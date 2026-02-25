// Small helpers: theme toggle, copy email, smooth scroll, active nav highlighting
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const EMAIL_ID = 'email';

  function toggleTheme(){
    const current = root.getAttribute('data-theme');
    if(current === 'dark'){
      root.removeAttribute('data-theme');
      btn.textContent = '🌓';
      localStorage.setItem('theme','light');
    } else {
      root.setAttribute('data-theme','dark');
      btn.textContent = '🌙';
      localStorage.setItem('theme','dark');
    }
  }

  if(btn) btn.addEventListener('click', toggleTheme);

  // Initialize from localStorage if user previously toggled
  if(localStorage.getItem('theme')==='dark'){
    root.setAttribute('data-theme','dark');
    if(btn) btn.textContent = '🌙';
  }

  // Quick copy email on click
  const emailEl = document.getElementById(EMAIL_ID);
  if(emailEl){
    emailEl.addEventListener('click', function(e){
      e.preventDefault();
      const email = emailEl.textContent.trim();
      if(navigator.clipboard){
        navigator.clipboard.writeText(email).then(()=>{
          const prev = emailEl.textContent;
          emailEl.textContent = 'Copied!';
          setTimeout(()=>emailEl.textContent = prev,1200);
        }).catch(()=>{ window.location.href = 'mailto:' + email; });
      } else { window.location.href = 'mailto:' + email; }
    });
  }

  // Smooth scroll for nav links and active link on scroll
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
      // update active immediately
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  function onScroll(){
    const offset = window.scrollY + 120; // header offset
    let current = sections[0];
    for(const s of sections){
      if(s.offsetTop <= offset) current = s;
    }
    navLinks.forEach(l => l.classList.remove('active'));
    const active = navLinks.find(l => l.getAttribute('href') === '#'+current.id);
    if(active) active.classList.add('active');
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  // set initial active
  setTimeout(onScroll, 200);

})();
