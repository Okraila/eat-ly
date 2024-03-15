let menuBtn = document.querySelector(".menu__btn");
let link = document.querySelector(".header__link");
let list = document.querySelector(".header__list");

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  list.classList.toggle("active");
});

const options = {
  root:null,
  rootMargin:"0px",
  treshhold:0.1,
}
function callback (entries,observer){
  entries.forEach(entry => {
    if (entry.Intersection) {
      console.log("Елемент Видимий");
    }
    else{
      console.log("Не Видимий Елемент");
    }
  });
}
const observer = new IntersectionObserver(callback,options)
const targetElement = document.querySelector(".customers__list")
console.log(targetElement);
observer.observe(targetElement)
