const MenuLine = document.querySelectorAll('.sub_menu_line');
const MenuBlank = document.querySelectorAll('.main_menu_li');



MenuLine.forEach(function(item,index){
  item.onmouseover = function(){
    MenuBlank[index].classList.add('underbar')
  }
  item.onmouseout = function(){
    MenuBlank[index].classList.remove('underbar')
  }
})

const bnBtn = document.querySelectorAll('.banner ul li button')
const bnImg = document.querySelector('.banner_space div')

let mgl = 0
let ttime = 0

let Btn = 0
bnBtn.forEach(function(bnbtn,btn){
  bnbtn.onclick = function(){
    bnBtn[Btn].classList.remove('point_bn')
    this.classList.add('point_bn')
    
    Btn=btn;
    Num= -1920 * btn
    bnImg.style.marginLeft = `${Num}px`;
    console.log(Num)
    }
})


setInterval(function(){
  ttime += 1
  bnBtn[0].classList.remove('point_bn')
  if(ttime ==8){
    ttime = 0
    mgl = 0;
    bnImg.style.marginLeft = `${mgl}px`
  }else{mgl -= 1920;
    bnImg.style.marginLeft = `${mgl}px`;
    console.log(mgl)
  }
}, 2000);
/*
let bnImgt = 0
$(function(){
setInterval(function(){
  if(bnImgt == 8){
    bnImgt = 0;
    bnImg.animate({'margin-left':'=0px'},300);
  } else {
    bnImg.animate({'margin-left':'-1920px'},300);
    bnImgt++}
    console.log(bnImgt)
},2000)
})
*/