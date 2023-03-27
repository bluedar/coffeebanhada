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


let Btn = 0
let Num = 0
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
  Btn += 1
  let yBtn = Btn-1
  if(Btn ==8){
    Btn = 0;
    Num = 0;
    bnImg.style.marginLeft = `${Num}px`
    bnBtn[7].classList.remove('point_bn')
    bnBtn[0].classList.add('point_bn')
  }else{Num -= 1920;
    bnImg.style.marginLeft = `${Num}px`;
    console.log(Num)
    bnBtn[yBtn].classList.remove('point_bn')
    bnBtn[Btn].classList.add('point_bn')
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