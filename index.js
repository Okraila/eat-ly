let menuBtn = document.querySelector(".menu__btn");
let link = document.querySelector(".header__link");
let list = document.querySelector(".header__list");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  list.classList.toggle("active");
});

const isElementInViewport = (el)=> {
  const rect = el.getBoundingClientRect()
  return {
    rect.top >=0 &&
    rect.left >=0 &&
    rect.bottom <= (window.innerHeight ||document.documentElement.clientHeight ) &&
    rect.top <= (window.innerWidth ||document.documentElement.clientWidth ) &&
  }
}
console.log(isElementInViewport(menuBtn));

const handleScroll = ()=> {
  const section = document.querySelector(".customers__list")
  if (isElementInViewport(section)) {
    section.classList.add(".customers__animation")
    window.removeEventListener("scroll", handleScroll)
  }

}

window.addEventListener("scroll", handleScroll)
// handleScroll