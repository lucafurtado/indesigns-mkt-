/* ============================================================
   INDESIGNS � script.js
   ============================================================ */

'use strict';

/* -- INTRO OVERLAY ----------------------------------------- */
(function () {
  const intro = document.getElementById('site-intro');
  if (!intro) return;

  if (
    sessionStorage.getItem('indesigns-intro') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    intro.remove();
    return;
  }

  document.documentElement.style.overflow = 'hidden';

  const exitIntro = () => {
    if (intro._exiting) return;
    intro._exiting = true;
    intro.classList.add('is-exiting');
    setTimeout(() => {
      intro.remove();
      document.documentElement.style.overflow = '';
      sessionStorage.setItem('indesigns-intro', '1');
    }, 900);
  };

  // Sair ap�s a anima��o do logo (2.6s de anima��o + 0.2s de margem)
  setTimeout(exitIntro, 2800);
  intro.addEventListener('click', exitIntro);
})();

document.addEventListener('DOMContentLoaded', () => {

  /* -- REFER�NCIAS DO DOM ------------------------------------ */

  const nav         = document.getElementById('nav');
  const navToggle   = document.getElementById('navToggle');
  const navLinks    = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');
  const ctaForm     = document.getElementById('ctaForm');
  const submitBtn   = document.getElementById('submitBtn');

  /* -- NAV: TRANSPARENTE NO HERO, PETRÓLEO APÓS SCROLL ------- */

  const heroEl = document.getElementById('hero');

  const updateNav = () => {
    const heroBottom = heroEl
      ? heroEl.getBoundingClientRect().bottom
      : 0;
    const heroHeight = heroEl ? heroEl.offsetHeight : 0;
    const progress = Math.min(
      Math.max((heroHeight - heroBottom) / heroHeight, 0),
      1
    );

    if (heroBottom <= 80) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* -- MENU MOBILE ------------------------------------------- */

  const openMenu = () => {
    navLinks.classList.add('open');
    navBackdrop.classList.add('visible');
    navBackdrop.style.display = 'block';
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navLinks.classList.remove('open');
    navBackdrop.classList.remove('visible');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // esconde backdrop ap�s transi��o
    setTimeout(() => { navBackdrop.style.display = ''; }, 350);
  };

  navToggle?.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });

  navBackdrop?.addEventListener('click', closeMenu);

  // Fecha menu ao clicar em qualquer link
  navLinks?.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fecha menu ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  /* -- SMOOTH SCROLL PARA �NCORAS --------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = nav.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  /* -- ANIMA��ES DE SCROLL (IntersectionObserver) ------------ */

  // Elementos .reveal � anima��o ao entrar na viewport
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Stagger progressivo para elementos no mesmo grupo (ex: cards)
        const parent = entry.target.parentElement;
        const siblings = parent
          ? Array.from(parent.querySelectorAll(':scope > .reveal'))
          : [];
        const index = siblings.indexOf(entry.target);
        const delay = Math.min(index * 90, 450);

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -48px 0px',
    }
  );

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  const showcaseSection = document.querySelector('.showcase');
  if (showcaseSection) {
    new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;
        showcaseSection.classList.add('is-visible');
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -80px 0px',
      }
    ).observe(showcaseSection);
  }

  // Elementos .fade-up do hero � anima��o de carregamento inicial
  const heroFadeEls = document.querySelectorAll('.hero .fade-up');
  heroFadeEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 180 + i * 190);
  });

  /* -- HIGHLIGHT DO LINK DE NAV ATIVO ----------------------- */

  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

  const activeLinkObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.style.color = isActive
            ? 'rgba(236, 236, 234, 1)'
            : '';
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => activeLinkObserver.observe(s));

  /* -- FORMUL�RIO -------------------------------------------- */

  if (ctaForm) {
    const originInput = ctaForm.querySelector('[name="origem"]');
    const allowedOrigins = new Set(['instagram', 'site', 'google', 'meta']);
    const rawOrigin = new URLSearchParams(window.location.search).get('origem')?.trim().toLowerCase();
    const leadOrigin = allowedOrigins.has(rawOrigin) ? rawOrigin : 'site direto';
    if (originInput) originInput.value = leadOrigin;

    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Valida campos manualmente (j� garantido pelo `required`, mas garante UX)
      const isValid = ctaForm.checkValidity();
      if (!isValid) {
        ctaForm.reportValidity();
        return;
      }

      // Captura os dados do formul�rio
      const data = new FormData(ctaForm);
      if ((data.get('empresa_site') || '').trim()) return;

      const nome    = data.get('nome')?.trim() || '';
      const tel     = data.get('tel')?.trim() || '';
      const email   = data.get('email')?.trim() || '';
      const tipo    = formatTipo(data.get('tipo') || '');
      const bairro  = data.get('bairro')?.trim() || '';
      const imagina = data.get('imagina')?.trim() || '';
      const prazo   = formatPrazo(data.get('prazo') || '');
      const origem  = data.get('origem')?.trim() || 'site direto';
      const leadPayload = {
        nome,
        whatsapp: tel,
        email,
        tipo_projeto: tipo,
        urgencia_prazo: prazo,
        origem,
        local: bairro,
        mensagem: imagina,
        pagina: window.location.pathname,
        capturado_em: new Date().toISOString(),
      };

      // Estado de loading
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      // Preparado para Formspree, Make, Zapier ou Google Sheets.
      // Quando houver endpoint, preencher data-crm-endpoint no form e enviar leadPayload via fetch.
      ctaForm.dispatchEvent(new CustomEvent('indesigns:lead', { detail: leadPayload }));

      // Monta e abre mensagem no WhatsApp
      const msg = encodeURIComponent(
        `Olá Indira! Vim pelo site.\n\n` +
        `Nome: ${nome}\n` +
        `WhatsApp: ${tel}\n` +
        `E-mail: ${email}\n` +
        `Tipo de projeto: ${tipo}\n` +
        `Prazo: ${prazo}\n` +
        `Origem: ${origem}\n` +
        (bairro ? `Local: ${bairro}\n` : '') +
        `\nMensagem: ${imagina}`
      );

      // Pequeno delay intencional para o feedback de "enviando"
      setTimeout(() => {
        window.open(`https://wa.me/5561998586151?text=${msg}`, '_blank', 'noopener');
        showFormSuccess();
      }, 600);
    });
  }

  const formatTipo = (val) => {
    const map = {
      'residencial-novo': 'Projeto residencial novo',
      'reforma':          'Reforma residencial',
      'coletivo':         'Espaço coletivo',
      'comercial':        'Espaço comercial',
      'consultoria':      'Consultoria',
      'planejando':       'Ainda planejando',
    };
    return map[val] || val;
  };

  const formatPrazo = (val) => {
    const map = {
      'flexivel': 'Prazo flexível',
      'meses':    'Nos próximos meses',
      'urgente':  'Com urgência de prazo',
    };
    return map[val] || val;
  };

  const showFormSuccess = () => {
    // Oculta o formul�rio e mostra mensagem de sucesso
    ctaForm.style.opacity = '0';
    ctaForm.style.transition = 'opacity 0.4s ease';

    setTimeout(() => {
      ctaForm.style.display = 'none';

      // Cria e insere mensagem de sucesso
      const success = document.createElement('div');
      success.className = 'cta-form__success visible';
      success.innerHTML = `
        <h3>Mensagem recebida.</h3>
        <p>Obrigada pelo contato. Vou retornar em até 24 horas.<br>
           Enquanto isso, você pode explorar o portfólio no Instagram.</p>
      `;
      ctaForm.insertAdjacentElement('afterend', success);
    }, 400);
  };

  /* -- EFEITO DE DIMMING NOS CARDS DO PORTF�LIO ------------- */
  // Fallback JS para browsers que n�o suportam :has()

  const portfolioCards = document.querySelectorAll('.portfolio__card');
  const supportsHas = CSS.supports('selector(:has(+ *))');

  if (!supportsHas && portfolioCards.length) {
    portfolioCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        portfolioCards.forEach(c => {
          if (c !== card) c.style.opacity = '0.5';
        });
      });
      card.addEventListener('mouseleave', () => {
        portfolioCards.forEach(c => { c.style.opacity = ''; });
      });
    });
  }

  /* -- LINHA DE PROCESSO ANIMADA ----------------------------- */

  const processoSteps = document.querySelector('.processo__steps');
  if (processoSteps) {
    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          processoSteps.classList.add('line-visible');
          lineObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    lineObserver.observe(processoSteps);
  }

  /* -- SHOWCASE DE PROJETOS ---------------------------------- */

  const showcaseProjects = [
    {
      theme:     'light',
      counter:   '01 / 03',
      category:  'RESIDENCIAL',
      title:     'Cobertura Duplex<br>Noroeste',
      place:     'Noroeste · Brasília, DF',
      narrative: 'Uma família sai de uma casa ampla para uma cobertura mais compacta. O projeto preserva conforto, convivência e continuidade afetiva.',
      href:      'residencia-noroeste/',
      img:       'assets/projects/noroeste/cover.jpg',
      imgAlt:    'Cobertura Duplex Noroeste, living da cobertura',
    },
    {
      theme:     'light',
      counter:   '02 / 03',
      category:  'ÁREA COLETIVA · REFORMA',
      title:     'Cobertura<br>Porto Seguro',
      place:     'Asa Sul · Brasília',
      narrative: 'Gourmet, academia e circulação clara em uma cobertura coletiva pensada para encontros, permanência e convivência.',
      href:      'cobertura-porto-seguro/',
      img:       'assets/hero-bg.jpg',
      imgAlt:    'Cobertura Porto Seguro, área coletiva com espaço gourmet e convivência',
    },
    {
      theme:     'light',
      counter:   '03 / 03',
      category:  'SAÚDE · REFORMA',
      title:     'Orbis<br>Psicologia',
      place:     'Brasília, DF · 2025',
      narrative: 'Um consultório psicológico compacto, resolvido para acolher, atender e reunir até 30 pessoas sem perder sensibilidade.',
      href:      'clinica-orbis/',
      img:       'assets/projects/orbis/hero.jpg',
      imgAlt:    'Orbis Psicologia, sala de atendimento com sofá, poltrona e mobiliário amadeirado',
    },
  ];

  const showcaseEl  = document.querySelector('.showcase');
  const scCounter   = document.getElementById('sc-counter');
  const scCategory  = document.getElementById('sc-category');
  const scTitle     = document.getElementById('sc-title');
  const scPlace     = document.getElementById('sc-place');
  const scNarrative = document.getElementById('sc-narrative');
  const scLink      = document.getElementById('sc-link');
  const scImg       = document.getElementById('sc-img');
  const scDots      = document.querySelectorAll('.showcase__dot');
  const scArrows    = document.querySelectorAll('[data-carousel-dir]');

  let currentProject = 0;
  let isAnimating    = false;

  const switchProject = (index) => {
    if (isAnimating || index === currentProject) return;
    isAnimating = true;

    const proj = showcaseProjects[index];

    scDots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });

    const textEls = [scCounter, scCategory, scTitle, scPlace, scNarrative, scLink].filter(Boolean);
    if (scImg) scImg.classList.add('is-transitioning');
    textEls.forEach(el => el.classList.add('is-transitioning'));
    if (showcaseEl) showcaseEl.setAttribute('data-theme', proj.theme);

    setTimeout(() => {
      if (scCounter)   scCounter.textContent   = proj.counter;
      if (scCategory)  scCategory.textContent  = proj.category;
      if (scTitle)     scTitle.innerHTML        = proj.title;
      if (scPlace)     scPlace.textContent      = proj.place;
      if (scNarrative) scNarrative.textContent  = proj.narrative;
      if (scLink)      scLink.setAttribute('href', proj.href);
      if (scImg) {
        scImg.src = proj.img;
        scImg.alt = proj.imgAlt;
        setTimeout(() => {
          scImg.classList.remove('is-transitioning');
          textEls.forEach(el => el.classList.remove('is-transitioning'));
          isAnimating = false;
        }, 70);
      } else {
        textEls.forEach(el => el.classList.remove('is-transitioning'));
        isAnimating = false;
      }
    }, 320);

    currentProject = index;
  };

  scDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      switchProject(parseInt(dot.dataset.project, 10));
    });
  });

  scArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      const dir = parseInt(arrow.dataset.carouselDir, 10);
      switchProject((currentProject + dir + showcaseProjects.length) % showcaseProjects.length);
    });
  });

  // Keyboard navigation within showcase
  if (showcaseEl) {
    showcaseEl.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') switchProject((currentProject + 1) % showcaseProjects.length);
      if (e.key === 'ArrowLeft')  switchProject((currentProject - 1 + showcaseProjects.length) % showcaseProjects.length);
    });
  }

  const projectList = document.querySelector('[data-projects-list]');
  const projectItems = projectList ? Array.from(projectList.querySelectorAll('.projetos-item')) : [];
  const filterButtons = document.querySelectorAll('[data-filter]');
  const viewButtons = document.querySelectorAll('[data-project-view]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'todos';
      filterButtons.forEach(btn => btn.classList.toggle('is-active', btn === button));

      projectItems.forEach((item) => {
        const categories = (item.dataset.projectCategory || '').split(/\s+/);
        const shouldShow = filter === 'todos' || categories.includes(filter);
        item.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });

  viewButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.dataset.projectView || 'editorial';
      viewButtons.forEach(btn => btn.classList.toggle('is-active', btn === button));
      projectList?.classList.toggle('is-list-view', view === 'lista');
    });
  });

  /* -- VIDEO REEL � P�ginas de projeto ---------------------- */

  const projectReel = document.querySelector('.project-reel');
  if (projectReel) {
    const videoSrc    = projectReel.dataset.video;
    const projectName = projectReel.dataset.title || document.getElementById('project-title')?.textContent?.trim() || 'Projeto Indesigns';
    const videoPoster = projectReel.dataset.poster || '';
    const modal       = document.getElementById('projectVideoModal');
    const modalVid    = modal?.querySelector('.video-modal__player');
    const modalClose  = modal?.querySelector('.video-modal__close');
    const modalTitle  = modal?.querySelector('.video-modal__title');
    const modalMute   = modal?.querySelector('.video-modal__mute');
    const modalShare  = modal?.querySelector('[data-video-share]');
    const relatedWrap = modal?.querySelector('.video-modal__related');
    const relatedVideos = parseRelatedVideos(projectReel.dataset.relatedVideos);

    // Inline ? Floating: after user scrolls past testimonial, reel moves to corner
    const testimonialEl = document.querySelector('.project-testimonial');
    if (testimonialEl) {
      new IntersectionObserver(
        ([entry]) => {
          const pastIt = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          if (pastIt && !projectReel.classList.contains('is-floating')) {
            projectReel.classList.add('is-floating');
            requestAnimationFrame(() => {
              setTimeout(() => projectReel.classList.add('is-visible'), 80);
            });
          } else if (!pastIt && projectReel.classList.contains('is-floating')) {
            projectReel.classList.remove('is-floating', 'is-visible');
          }
        },
        { threshold: 0.5 }
      ).observe(testimonialEl);
    }

    const openModal = () => {
      if (!modal) return;
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      if (modalTitle) modalTitle.textContent = projectName;
      renderRelatedVideos(relatedWrap, relatedVideos);
      requestAnimationFrame(() => modal.classList.add('is-open'));
      if (modalVid && videoSrc) {
        if (videoPoster) modalVid.setAttribute('poster', videoPoster);
        modalVid.src = videoSrc;
        modalVid.load();
        modalVid.muted = true;
        modalVid.setAttribute('muted', '');
        if (modalMute) modalMute.textContent = 'Ativar som';
        modalVid.play().catch(() => {});
      }
    };

    const closeModal = () => {
      if (!modal) return;
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => {
        modal.setAttribute('hidden', '');
        if (modalVid) {
          modalVid.pause();
          modalVid.removeAttribute('src');
          modalVid.load();
        }
      }, 520);
    };

    modalMute?.addEventListener('click', () => {
      if (!modalVid) return;
      modalVid.muted = !modalVid.muted;
      modalMute.textContent = modalVid.muted ? 'Ativar som' : 'Silenciar';
    });

    modalShare?.addEventListener('click', async () => {
      const shareData = {
        title: projectName,
        text: `${projectName} | Indesigns`,
        url: window.location.href,
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          modalShare.textContent = 'Link copiado';
          setTimeout(() => { modalShare.textContent = 'Compartilhar'; }, 1800);
        }
      } catch (_) {}
    });

    relatedWrap?.addEventListener('click', (e) => {
      const item = e.target.closest('[data-related-index]');
      if (!item || !modalVid) return;
      const nextVideo = relatedVideos[parseInt(item.dataset.relatedIndex, 10)];
      if (!nextVideo?.src) return;
      modalVid.src = nextVideo.src;
      modalVid.load();
      modalVid.play().catch(() => {});
    });

    projectReel.addEventListener('click', openModal);
    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) closeModal();
    });
  }

  /* -- GSAP: REFINOS SUTIS --------------------------------- */

  function parseRelatedVideos(raw) {
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(item => item && item.src) : [];
    } catch (_) {
      return [];
    }
  }

  function renderRelatedVideos(container, videos) {
    if (!container) return;
    if (!videos.length) {
      container.setAttribute('hidden', '');
      container.innerHTML = '';
      return;
    }
    container.removeAttribute('hidden');
    container.innerHTML = videos.map((video, index) => `
      <button type="button" class="video-modal__related-item" data-related-index="${index}">
        <span>${video.label || 'Vídeo relacionado'}</span>
      </button>
    `).join('');
  }

  if (window.gsap && window.ScrollTrigger) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion) {
      gsap.registerPlugin(window.ScrollTrigger);

      gsap.utils.toArray('.brand-break').forEach((el) => {
        gsap.fromTo(el, { opacity: 0.78 }, {
          opacity: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 86%',
            once: true,
          },
        });
      });

      gsap.utils.toArray('.section-header, .sobre__content, .project-intro, .project-detail-grid, .project-continue').forEach((el) => {
        gsap.fromTo(el, { y: 28, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
            once: true,
          },
        });
      });

      gsap.utils.toArray('.project-hero__img, .showcase__img, .sobre__img').forEach((img) => {
        gsap.to(img, {
          yPercent: -3,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('section') || img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        });
      });
    }
  }

});

/* -- CARROSSEL /projetos/ ----------------------------------- */
(function() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const slides = track.querySelectorAll('.projetos-carousel__slide');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  let current = 0;
  let autoPlayTimer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'projetos-carousel__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dotsContainer.querySelectorAll('.projetos-carousel__dot').forEach((d, i) => {
      d.classList.toggle('is-active', i === current);
    });
  }

  function startAutoPlay() {
    autoPlayTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
  }

  prevBtn.addEventListener('click', () => { stopAutoPlay(); goTo(current - 1); startAutoPlay(); });
  nextBtn.addEventListener('click', () => { stopAutoPlay(); goTo(current + 1); startAutoPlay(); });

  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();

  /* Teclado */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      stopAutoPlay();
      goTo(current - 1);
      startAutoPlay();
    }
    if (e.key === 'ArrowRight') {
      stopAutoPlay();
      goTo(current + 1);
      startAutoPlay();
    }
  });

  /* Swipe mobile */
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });

  track.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
    startAutoPlay();
  }, { passive: true });
})();
