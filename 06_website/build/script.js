/* ============================================================
   INDESIGNS · script.js
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ── REFERÊNCIAS DO DOM ──────────────────────────────────── */

  const nav         = document.getElementById('nav');
  const navToggle   = document.getElementById('navToggle');
  const navLinks    = document.getElementById('navLinks');
  const navBackdrop = document.getElementById('navBackdrop');
  const ctaForm     = document.getElementById('ctaForm');
  const submitBtn   = document.getElementById('submitBtn');

  /* ── NAV: FUNDO AO FAZER SCROLL ─────────────────────────── */

  const updateNav = () => {
    const scrolled = window.scrollY > 72;
    nav.classList.toggle('scrolled', scrolled);
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // estado inicial

  /* ── MENU MOBILE ─────────────────────────────────────────── */

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
    // esconde backdrop após transição
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

  /* ── SMOOTH SCROLL PARA ÂNCORAS ─────────────────────────── */

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

  /* ── ANIMAÇÕES DE SCROLL (IntersectionObserver) ──────────── */

  // Elementos .reveal — animação ao entrar na viewport
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

  // Elementos .fade-up do hero — animação de carregamento inicial
  const heroFadeEls = document.querySelectorAll('.hero .fade-up');
  heroFadeEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 180 + i * 190);
  });

  /* ── HIGHLIGHT DO LINK DE NAV ATIVO ─────────────────────── */

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

  /* ── FORMULÁRIO ──────────────────────────────────────────── */

  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Valida campos manualmente (já garantido pelo `required`, mas garante UX)
      const isValid = ctaForm.checkValidity();
      if (!isValid) {
        ctaForm.reportValidity();
        return;
      }

      // Captura os dados do formulário
      const data = new FormData(ctaForm);
      const nome    = data.get('nome')?.trim() || '';
      const tel     = data.get('tel')?.trim() || '';
      const tipo    = formatTipo(data.get('tipo') || '');
      const bairro  = data.get('bairro')?.trim() || '';
      const imagina = data.get('imagina')?.trim() || '';

      // Estado de loading
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      // Monta e abre mensagem no WhatsApp
      const msg = encodeURIComponent(
        `Olá Indira! Vim pelo site.\n\n` +
        `Nome: ${nome}\n` +
        `WhatsApp: ${tel}\n` +
        `Tipo de projeto: ${tipo}\n` +
        `Local: ${bairro}\n\n` +
        `O que imagino: ${imagina}`
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
      'planejando':       'Ainda planejando',
    };
    return map[val] || val;
  };

  const showFormSuccess = () => {
    // Oculta o formulário e mostra mensagem de sucesso
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

  /* ── EFEITO DE DIMMING NOS CARDS DO PORTFÓLIO ───────────── */
  // Fallback JS para browsers que não suportam :has()

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

  /* ── LINHA DE PROCESSO ANIMADA ───────────────────────────── */
  // Anima a linha conectora do processo ao entrar na viewport

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

});
