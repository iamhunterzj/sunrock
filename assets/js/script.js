
document.addEventListener('DOMContentLoaded',function(){
  const navLinks = document.querySelectorAll('header nav a');
  const sections = document.querySelectorAll('section');
  function setActive(){
    let index = sections.length;
    while(--index && window.scrollY + 120 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    const id = sections[index].id;
    const active = document.querySelector('header nav a[href="#'+id+'"]');
    if(active) active.classList.add('active');
  }
  setActive();
  window.addEventListener('scroll', setActive);

  // smooth scroll for clicks
  navLinks.forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({behavior:'smooth'});
    });
  });

  // reveal on scroll
  const fades = document.querySelectorAll('.fade');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('visible'); });
  }, {threshold:0.15});
  fades.forEach(f=>obs.observe(f));
});
