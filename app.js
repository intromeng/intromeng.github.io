const dialog=document.querySelector('#lightbox');let opener;
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{opener=button;dialog.querySelector('img').src=button.dataset.image;dialog.querySelector('img').alt=button.querySelector('img').alt;dialog.showModal();document.body.style.overflow='hidden'}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus()});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{let msg;try{await navigator.clipboard.writeText(b.dataset.copy);msg='邮箱已复制'}catch{msg='邮箱：'+b.dataset.copy}const t=document.querySelector('.toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500)}));
const heroVideo=document.querySelector('.hero-video');
if(heroVideo){
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const sync=()=>{if(preference.matches||document.hidden)heroVideo.pause();else heroVideo.play().catch(()=>{});};
 preference.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);sync();
}
