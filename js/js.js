const MenuLine = document.querySelector('.sub_menu_line');
const MenuBlank = document.querySelector('.main_menu_li');

MenuLine.addEventListener
  ('mouseenter',function(){
    MenuBlank.classList.add('show');
  });
  MenuLine.addEventListener
  ('mouseleave',function(){
    MenuBlank.classList.remove('show');
  });

let check = document.querySelectorAll('.banner ul li button');

check.forEach(function(aa,bb){
  aa.onclick = function(){
    console.log(bb)
    check[num].classList.remove('check')
  this.classList.add('check')
  num = bb;
  }
})