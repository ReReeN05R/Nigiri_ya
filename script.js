// ===== ハンバーガーメニューとぐる =====
const hamburger = document.getElementById('hamburger');
const topMenu = document.getElementById('topMenu');

function setMenu(open){
  topMenu.classList.toggle('open', open);
  hamburger.classList.toggle('is-open', open);
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

hamburger.addEventListener('click', () => {
  setMenu(!topMenu.classList.contains('open'));
});


document.querySelectorAll('.menu-list a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
      setMenu(false);
    }
  });
});

// ===== ページトップへ飛ぶためのボタン =====
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  toTop.style.display = (y > 420) ? 'block' : 'none';
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('送信はダミーです。');
  });
}


window.addEventListener('hashchange', () => {
  const id = location.hash;
  if(!id) return;
  const el = document.querySelector(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
});


const orderModal = document.getElementById('orderModal');
const openOrderModal = document.getElementById('openOrderModal');
const closeOrderModal = document.getElementById('closeOrderModal');
const submitOrder = document.getElementById('submitOrder');

function openModal(){
  if(!orderModal) return;
  orderModal.classList.add('is-open');
  orderModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  if(!orderModal) return;
  orderModal.classList.remove('is-open');
  orderModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if(openOrderModal){
  openOrderModal.addEventListener('click', openModal);
}
if(closeOrderModal){
  closeOrderModal.addEventListener('click', closeModal);
}

// 背景クリックで閉じる
if(orderModal){
  orderModal.addEventListener('click', (e) => {
    if(e.target === orderModal){
      closeModal();
    }
  });
}

// Escで閉じる
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && orderModal?.classList.contains('is-open')){
    closeModal();
  }
});

// 送信ボタン（仮）
if(submitOrder){
  submitOrder.addEventListener('click', () => {
    alert('注文送信（ダミー）です。');
    closeModal();
  });
}
