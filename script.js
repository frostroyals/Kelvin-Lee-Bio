// Small helpers: theme toggle and copy email button
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const EMAIL_ID = 'email';

  function toggleTheme(){
    const current = root.getAttribute('data-theme');
    if(current === 'dark'){
      root.removeAttribute('data-theme');
      document.body.style.background = '';
      btn.textContent = '🌓';
      localStorage.setItem('theme','light');
    } else {
      root.setAttribute('data-theme','dark');
      btn.textContent = '🌙';
      localStorage.setItem('theme','dark');
    }
  }

  btn.addEventListener('click', toggleTheme);

  // Initialize from localStorage if user previously toggled
  if(localStorage.getItem('theme')==='dark'){
    root.setAttribute('data-theme','dark');
    btn.textContent = '🌙';
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
        }).catch(()=>{
          // fallback
          window.location.href = 'mailto:' + email;
        });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  }
})();
