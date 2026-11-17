
document.addEventListener('DOMContentLoaded',()=>{
 const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
 const banner=document.getElementById('cookieBanner');
 const stored=localStorage.getItem('badoo_cookie_choice');
 if(banner && !stored) banner.classList.add('show');
 const save=(choice)=>{localStorage.setItem('badoo_cookie_choice',choice); if(banner)banner.classList.remove('show');};
 document.getElementById('acceptCookies')?.addEventListener('click',()=>save('accepted_optional'));
 document.getElementById('rejectCookies')?.addEventListener('click',()=>save('necessary_only'));
 const toggle=document.getElementById('optionalCookies');
 const status=document.getElementById('cookieStatus');
 if(toggle) toggle.checked=stored==='accepted_optional';
 document.getElementById('saveCookiePrefs')?.addEventListener('click',()=>{save(toggle?.checked?'accepted_optional':'necessary_only'); if(status)status.textContent='Preferências salvas neste navegador.';});
 document.getElementById('clearCookiePrefs')?.addEventListener('click',()=>{localStorage.removeItem('badoo_cookie_choice');if(toggle)toggle.checked=false;if(status)status.textContent='Escolha salva apagada. O aviso de cookies será exibido novamente.';});
});
