const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.card').forEach(c=>io.observe(c));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('open')));
