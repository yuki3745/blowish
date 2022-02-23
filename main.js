'use strict';

// menu
{
  const mmi = document.querySelector('.mobile-menu-icon');
  const spmenu = document.querySelector('.sp-menu');
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const lists = document.querySelectorAll('.menu');

  mmi.addEventListener('click', () => {
    spmenu.classList.toggle('show');
    open.classList.toggle('close');
    close.classList.toggle('close');
  });

  lists.forEach(list => {
    list.addEventListener('click', () => {
      spmenu.classList.toggle('show');
      open.classList.toggle('close');
      close.classList.toggle('close');
      
      list.classList.add('current');

        lists.forEach(li => {
          if(list !== li) {
            li.classList.remove('current');
          }
        });
    });
  });
}

// modal
{
  const skills = document.querySelectorAll('.skill a');
  const contents = document.querySelectorAll('.content');
  const skill = [];
  let currentSkill = 0;

  function openModal() {
    for(let i = 0; i < skills.length; i++){
      console.log(i);
    }
  }
  openModal();
}


// important-things
{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', ()=> {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if(dt !== el){
          el.parentNode.classList.remove('appear')
        };
      });
    });
  });
}

// table
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  const ul = document.getElementById('slides');
  const slide = ul.children;
  let currentIndex = 0;

  const dots = [];

  function updateButtons(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    
    if (currentIndex === 0){
      prev.classList.add('hidden');
    }
    if (currentIndex === slide.length - 1){
      next.classList.add('hidden');
    }
  }

  function moveSlides(){
    const slideWidth = slide[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for(let i = 0; i < slide.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        moveSlides()
      })
      dots.push(button);

  document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('nav-current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('nav-current');
    });
    dots[currentIndex].classList.add('nav-current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
    updateDots();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
    updateDots();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
}