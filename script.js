// Small helpers: theme toggle, copy email, smooth scroll, active nav highlighting
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const EMAIL_ID = 'email';

  function toggleTheme(){
    const current = root.getAttribute('data-theme');
    if(current === 'dark'){
      root.removeAttribute('data-theme');
      if(btn) btn.textContent = '🌓';
      localStorage.setItem('theme','light');
    } else {
      root.setAttribute('data-theme','dark');
      if(btn) btn.textContent = '🌙';
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

  // Highlight active nav item across pages and support same-page anchors
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const currentFile = (window.location.pathname.split('/').pop() || 'index.html') || 'index.html';

  navLinks.forEach(link => {
    try{
      const linkUrl = new URL(link.href, window.location.href);
      const linkFile = (linkUrl.pathname.split('/').pop() || 'index.html');

      // mark active if target file matches current file
      if(linkFile === currentFile) link.classList.add('active');

      // if same page and has hash, do smooth scroll
      if(linkFile === currentFile && linkUrl.hash){
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(linkUrl.hash);
          if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
          // update classes
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        });
      }
    } catch (err) {
      // ignore malformed URLs
    }
  });

})();
