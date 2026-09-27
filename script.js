const wedding = new Date('2027-03-07T16:00:00-06:00');
function tick(){const d=Math.max(0,wedding-new Date());document.querySelector('#days').textContent=Math.floor(d/86400000);document.querySelector('#hours').textContent=Math.floor(d%86400000/3600000);document.querySelector('#minutes').textContent=Math.floor(d%3600000/60000)}tick();setInterval(tick,60000);
const nav=document.querySelector('#nav');addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));
const menu=document.querySelector('.menu'),links=document.querySelector('.links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
