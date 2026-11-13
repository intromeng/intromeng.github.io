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

// Pixel lettering: staggered arrival and proximity-based lift/glow.
const matrix=document.querySelector('.matrix');
if(matrix){
 const glyphs={M:['10001','11011','10101','10101','10001','10001','10001'],E:['11111','10000','10000','11110','10000','10000','11111'],N:['10001','11001','11001','10101','10011','10011','10001'],G:['01111','10000','10000','10111','10001','10001','01110'],X:['10001','10001','01010','00100','01010','10001','10001'],I:['111','010','010','010','010','010','111'],W:['10001','10001','10001','10101','10101','11011','10001']};
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const text=matrix.textContent.trim();
 const fragment=document.createDocumentFragment();let order=0;const dots=[];
 for(const character of text){
  const letter=document.createElement('span');letter.className=character===' '?'pixel-space':'pixel-letter';
  if(character!==' '){const rows=glyphs[character];if(!rows)continue;letter.style.setProperty('--columns',rows[0].length);
   rows.forEach((row,y)=>[...row].forEach((value,x)=>{if(value==='1'){const dot=document.createElement('i');dot.className='pixel-dot';dot.style.gridColumn=x+1;dot.style.gridRow=y+1;dot.style.setProperty('--delay',`${120+order++*2.5}ms`);letter.append(dot);dots.push(dot);}}));
  }fragment.append(letter);
 }
 matrix.replaceChildren(fragment);matrix.classList.add('pixel-matrix');
 let frame=0,point=null;
 const clear=()=>{point=null;cancelAnimationFrame(frame);frame=0;dots.forEach(dot=>{dot.style.removeProperty('--lift');dot.style.removeProperty('--scale');dot.style.removeProperty('--glow');});};
 matrix.addEventListener('pointermove',event=>{if(motion.matches||event.pointerType==='touch')return;point={x:event.clientX,y:event.clientY};if(frame)return;
  frame=requestAnimationFrame(()=>{frame=0;if(!point)return;const rect=matrix.getBoundingClientRect();const radius=innerWidth<700?65:105;
   dots.forEach(dot=>{const letter=dot.parentElement;const x=rect.left+letter.offsetLeft+dot.offsetLeft+dot.offsetWidth/2;const y=rect.top+letter.offsetTop+dot.offsetTop+dot.offsetHeight/2;const influence=Math.max(0,1-Math.hypot(x-point.x,y-point.y)/radius);dot.style.setProperty('--lift',`${-influence*8}px`);dot.style.setProperty('--scale',1+influence*.45);dot.style.setProperty('--glow',`${influence*18}px`);});
  });
 });
 matrix.addEventListener('pointerleave',clear);matrix.addEventListener('pointercancel',clear);motion.addEventListener('change',clear);
}
