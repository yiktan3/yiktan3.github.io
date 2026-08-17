(()=>{
  const canvas=document.querySelector('.canvas');
  const start=document.querySelector('.start');
  const field=document.querySelector('.sticker-field');
  if(!canvas||!start||!field)return;

  const stickers=[...field.querySelectorAll('.sticker')];
  const back=document.createElement('button');
  back.className='mini-back';
  back.type='button';
  back.textContent=window.PORTFOLIO_CONTENT?.home?.interactionBack || '← BACK';
  back.setAttribute('aria-label','Return to homepage');
  canvas.append(back);

  let active=false;
  let completed=false;
  let finishing=false;
  const activePops=new Set();
  const cluster=[
    ['34%','25%','126px','5.2s','-1.2s'],
    ['47%','19%','112px','4.8s','-.5s'],
    ['58%','28%','130px','5.6s','-2s'],
    ['38%','47%','142px','5s','-3s'],
    ['52%','43%','132px','5.4s','-1.7s'],
    ['62%','50%','108px','4.7s','-.9s'],
    ['46%','62%','140px','5.8s','-2.5s']
  ];
  stickers.forEach((sticker,index)=>{
    const values=cluster[index%cluster.length];
    sticker.style.setProperty('--cx',values[0]);
    sticker.style.setProperty('--cy',values[1]);
    sticker.style.setProperty('--cw',values[2]);
    sticker.style.setProperty('--cd',values[3]);
    sticker.style.setProperty('--c-delay',values[4]);
  });

  function setMode(on){
    active=on;
    canvas.classList.toggle('mini-mode',on);
    document.body.classList.toggle('mini-active',on);
  }

  function restoreFood(){
    activePops.forEach(animation=>animation.cancel());
    activePops.clear();
    stickers.forEach(sticker=>{
      sticker.classList.remove('consumed');
      sticker.style.removeProperty('opacity');
      sticker.style.removeProperty('filter');
    });
  }

  function enter(){
    if(active||completed||finishing)return;
    setMode(true);
  }

  function exitWithBack(){
    if(!active||finishing)return;
    restoreFood();
    setMode(false);
  }

  function addPopDetails(sticker){
    const canvasRect=canvas.getBoundingClientRect();
    const rect=sticker.getBoundingClientRect();
    const x=rect.left-canvasRect.left+rect.width/2;
    const y=rect.top-canvasRect.top+rect.height/2;
    const ripple=document.createElement('i');
    ripple.className='pop-ripple';
    ripple.style.left=x+'px';
    ripple.style.top=y+'px';
    canvas.append(ripple);
    ripple.addEventListener('animationend',()=>ripple.remove());
    for(let i=0;i<4;i++){
      const particle=document.createElement('i');
      const angle=(Math.PI*2/4)*i+Math.random()*.35;
      const distance=16+Math.random()*13;
      particle.className='pop-particle';
      particle.style.left=x+'px';
      particle.style.top=y+'px';
      particle.style.setProperty('--dx',Math.cos(angle)*distance+'px');
      particle.style.setProperty('--dy',Math.sin(angle)*distance+'px');
      canvas.append(particle);
      particle.addEventListener('animationend',()=>particle.remove());
    }
  }

  function finishInteraction(){
    if(finishing)return;
    finishing=true;
    active=false;
    back.style.pointerEvents='none';
    setTimeout(()=>{
      setMode(false);
      canvas.classList.add('interaction-complete');
      completed=true;
      finishing=false;
      back.style.removeProperty('pointer-events');
    },420);
  }

  function popFood(sticker){
    if(!active||finishing||sticker.classList.contains('consumed'))return;
    addPopDetails(sticker);
    const animation=sticker.animate([
      {transform:'scale(1) rotate(0deg)',opacity:1,filter:'blur(0)'},
      {transform:'scale(1.1,1.04) rotate(1deg)',opacity:1,filter:'blur(0)',offset:.42},
      {transform:'scale(.96,1.06) rotate(-1.5deg)',opacity:.9,filter:'blur(.2px)',offset:.62},
      {transform:'scale(.18) rotate(4deg)',opacity:0,filter:'blur(4px)'}
    ],{duration:250,easing:'cubic-bezier(.25,.75,.3,1)',fill:'forwards'});
    activePops.add(animation);
    animation.finished.then(()=>{
      activePops.delete(animation);
      sticker.classList.add('consumed');
      if(stickers.every(item=>item.classList.contains('consumed')))finishInteraction();
    }).catch(()=>{});
  }

  start.addEventListener('click',event=>{event.preventDefault();enter();});
  stickers.forEach(sticker=>sticker.addEventListener('click',event=>{event.stopPropagation();popFood(sticker);}));
  back.addEventListener('click',event=>{event.stopPropagation();exitWithBack();});
})();
