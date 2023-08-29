const menuBtn = document.querySelector('#burgerBtn');
const menu = document.querySelector('.burger-menu');
const body = document.body;


function closeBurgerMenu() {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
}

function isMenuOpen() {
  return menu.classList.contains("active") && menuBtn.classList.contains("active");
}

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('burger_btn-active');
  menu.classList.toggle('active');
  document.body.classList.toggle('noScroll');
})

body.addEventListener('click', function (e) {
  if (isMenuOpen()) {
    if (!e.target.classList.contains("burger-menu") && !e.target.classList.contains("burger_btn") && !e.target.classList.contains("bar")) {
      closeBurgerMenu();
    }
  }
})


const residentialComplexes = document.querySelector("#residentialComplexesList");
const residentialComplexesItem = document.querySelector(".residential-cmplexes");
const howToBuyList = document.querySelector("#howToBuyList");
const howToBuyItem = document.querySelector(".how-to-buy");

residentialComplexes.addEventListener("click", function(){
  residentialComplexesItem.classList.toggle('active');
})

howToBuyList.addEventListener("click", function(){
  howToBuyItem.classList.toggle('active');
})