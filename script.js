try{
const D=window.DATA,I=window.IMG||{},$=s=>document.querySelector(s);
const img=k=>I[k]?`url('${I[k]}')`:`url('assets/${k}.webp')`;
document.querySelectorAll('[data-img]').forEach(e=>e.style.backgroundImage=img(e.dataset.img));
$('#rt').textContent=D.rating;$('#rc').textContent=D.reviewsCount;
$('#svc').innerHTML=D.services.map(s=>`<article class="s reveal"><div class="im" style="background-image:${img(s.img)}"></div><div class="bd"><div class="ic">${s.i}</div><h3>${s.h}</h3><ul>${s.l.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('');
$('#gal').innerHTML=['audio','noise','equip','polish','chip','tires','anticor'].map(k=>`<div class="reveal" style="background-image:${img(k)}"></div>`).join('');
const esc=x=>x.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function prices(t,ci){const nb=p=>String(p).replace(/\s/g,'\u00A0');const row=i=>`<div class="pr"><div class="pn">${i.n}${i.u?`<small>${i.u.replace(/[()]/g,'')}</small>`:''}</div><div class="pp">${nb(i.p)}</div></div>`;
const cat=(title,items)=>`<div class="pc">${title?`<h3>${title} <span>${items.length}</span></h3>`:''}<div class="prs">${items.map((x,k)=>k<6?row(x):row(x).replace('class="pr"','class="pr more"')).join('')}</div>${items.length>6?`<button class="pmore" onclick="this.parentNode.classList.toggle('open');this.textContent=this.parentNode.classList.contains('open')?'Свернуть':'Показать все (${items.length})'">Показать все (${items.length})</button>`:''}</div>`;
let h='';if(t=='y'){ci=ci==null?-1:ci;h=`<div class="ctabs"><button class="${ci<0?'on':''}" data-c="-1">Все</button>${D.yandexPrices.map((c,k)=>`<button class="${ci==k?'on':''}" data-c="${k}">${c.c}</button>`).join('')}</div>`+D.yandexPrices.filter((c,k)=>ci<0||ci==k).map(c=>cat(c.c,c.items)).join('')}else h=cat('Цены на Авито',D.avitoPrices);
$('#pl').innerHTML=h;$('#pl').querySelectorAll('.ctabs button').forEach(b=>b.onclick=()=>prices('y',+b.dataset.c));$('#psrc').textContent=t=='y'?'Источник: карточка «Автотюнинг71» на Яндекс Картах (раздел «Товары и услуги», данные представителя организации; Яндекс отмечает, что давно не обновлялись). Также там: «Переобуть все колёса: 500–4000 ₽».':'Источник: объявление на Авито № 2336184449 («от 500 ₽ за услугу»), цены «от», в скобках — длительность. Цены на разных площадках могут отличаться — точную стоимость уточняйте по телефону.';
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

document.querySelectorAll('[data-route]').forEach(a=>a.addEventListener('click',e=>{if(!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))return;e.preventDefault();const web=a.href;let gone=false;const v=()=>{if(document.hidden)gone=true};document.addEventListener('visibilitychange',v);location.href='yandexmaps://maps.yandex.ru/?rtext=~54.034744,37.491228&rtt=auto';setTimeout(()=>{document.removeEventListener('visibilitychange',v);if(!gone&&!document.hidden)location.href=web},1200)}));
(function(){const el=document.getElementById('ymap');if(!el)return;let done=false;const load=()=>{if(done)return;done=true;const sc=document.createElement('script');sc.src='https://api-maps.yandex.ru/2.1/?lang=ru_RU';sc.onload=()=>ymaps.ready(()=>{el.innerHTML='';const c=[54.034744,37.491228];const m=new ymaps.Map(el,{center:c,zoom:16,controls:['zoomControl','fullscreenControl']});m.behaviors.disable('scrollZoom');m.geoObjects.add(new ymaps.Placemark(c,{balloonContentHeader:'Автотюнинг71',balloonContentBody:'Пролетарская ул., 16/2, р.п. Первомайский',hintContent:'Автотюнинг71'},{preset:'islands#redAutoIcon'}))});document.head.appendChild(sc)};
if('IntersectionObserver'in window){new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){load();o.disconnect()}},{rootMargin:'400px'}).observe(el)}else load()})();
