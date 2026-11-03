try{
const D=window.DATA,I=window.IMG||{},$=s=>document.querySelector(s);
const img=k=>I[k]?`url('${I[k]}')`:`url('assets/${k}.webp')`;
document.querySelectorAll('[data-img]').forEach(e=>e.style.backgroundImage=img(e.dataset.img));
$('#rt').textContent=D.rating;$('#rc').textContent=D.reviewsCount;
$('#svc').innerHTML=D.services.map(s=>`<article class="s reveal"><div class="im" style="background-image:${img(s.img)}"></div><div class="bd"><div class="ic">${s.i}</div><h3>${s.h}</h3><ul>${s.l.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('');
$('#gal').innerHTML=['audio','noise','equip','polish','chip','tires','anticor'].map(k=>`<div class="reveal" style="background-image:${img(k)}"></div>`).join('');
const esc=x=>x.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function prices(t){$('#pl').innerHTML=t=='y'?D.yandexPrices.map(c=>`<div class="pc"><h3>${c.c}</h3><table>${c.items.map(i=>`<tr><td>${i.n}${i.u?` <small>· ${i.u}</small>`:''}</td><td>${i.p}</td></tr>`).join('')}</table></div>`).join(''):`<table>${D.avitoPrices.map(i=>`<tr><td>${i.n}${i.u?` <small>· ${i.u.replace(/[()]/g,'')}</small>`:''}</td><td>${i.p}</td></tr>`).join('')}</table>`;
$('#psrc').textContent=t=='y'?'Источник: карточка «Автотюнинг71» на Яндекс Картах (раздел «Товары и услуги», данные представителя организации; Яндекс отмечает, что давно не обновлялись). Также там: «Переобуть все колёса: 500–4000 ₽».':'Источник: объявление на Авито № 2336184449 («от 500 ₽ за услугу»), цены «от», в скобках — длительность. Цены на разных площадках могут отличаться — точную стоимость уточняйте по телефону.';
document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t==t))}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>prices(b.dataset.t));prices('y');
const card=r=>`<blockquote class="rv${r.neg?' neg':''}"><div class="st${r.neg?' bad':''}">${r.neg?'оценка ниже 5':'★★★★★'}</div><p>${esc(r.t)}</p><b>${esc(r.a)}</b><small>${r.d} · Яндекс Карты</small>${r.r?`<div class="rep"><b>Ответ организации · ${r.rd}</b><br>${esc(r.r)}</div>`:''}</blockquote>`;
const all=D.reviews.map(card).join('');$('#track').innerHTML=all+all;
}catch(e){console.error(e);document.documentElement.classList.add('all')}
try{
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
$('#burger').onclick=()=>document.body.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.body.classList.remove('open'));
}catch(e){document.documentElement.classList.add('all')}

document.querySelectorAll('[data-route]').forEach(a=>a.addEventListener('click',e=>{if(!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))return;e.preventDefault();const web=a.href;let gone=false;const v=()=>{if(document.hidden)gone=true};document.addEventListener('visibilitychange',v);location.href='yandexmaps://maps.yandex.ru/?rtext=~54.034336,37.498919&rtt=auto';setTimeout(()=>{document.removeEventListener('visibilitychange',v);if(!gone&&!document.hidden)location.href=web},1200)}));
(function(){const el=document.getElementById('ymap');if(!el)return;let done=false;const load=()=>{if(done)return;done=true;const sc=document.createElement('script');sc.src='https://api-maps.yandex.ru/2.1/?lang=ru_RU';sc.onload=()=>ymaps.ready(()=>{el.innerHTML='';const c=[54.034336,37.498919];const m=new ymaps.Map(el,{center:c,zoom:16,controls:['zoomControl','fullscreenControl']});m.behaviors.disable('scrollZoom');m.geoObjects.add(new ymaps.Placemark(c,{balloonContentHeader:'Автотюнинг71',balloonContentBody:'Пролетарская ул., 16/2, р.п. Первомайский',hintContent:'Автотюнинг71'},{preset:'islands#redAutoIcon'}))});document.head.appendChild(sc)};
if('IntersectionObserver'in window){new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){load();o.disconnect()}},{rootMargin:'400px'}).observe(el)}else load()})();
