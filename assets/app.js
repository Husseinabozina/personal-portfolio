const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
}),{threshold:.08});
reveals.forEach(el=>io.observe(el));

const menuBtn=document.getElementById('menuBtn');
const mobileMenu=document.getElementById('mobileMenu');
menuBtn.addEventListener('click',()=>{
  const open=mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu');
  menuBtn.textContent=open?'×':'☰';
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  mobileMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'
}));

const langBtn=document.getElementById('langBtn');
let lang='en';
function applyLang(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.body.dir=document.documentElement.dir;
  langBtn.textContent=lang==='en'?'AR':'EN';
  document.querySelectorAll('[data-en][data-ar]').forEach(el=>el.textContent=el.dataset[lang]);
}
langBtn.addEventListener('click',()=>{lang=lang==='en'?'ar':'en';applyLang()});


// Case studies use dedicated shareable pages in V5.
