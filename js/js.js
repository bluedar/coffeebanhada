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



const boxs = document.querySelectorAll('.box')
const detailViews = document.querySelectorAll('.detail_view')
const closeBtn = document.querySelectorAll('.close_btn')

boxs.forEach(function(box,index){
  box.onclick = function(){
    detailViews.forEach(function(detailView){
      detailView.style.display = 'none'
    })
    detailViews[index].style.display = 'block'
  }
})

closeBtn.forEach(function(Close,index){
  Close.onclick = function(){
    detailViews.forEach(function(detailView){
      detailView.style.display = 'none'
    })
  }
})