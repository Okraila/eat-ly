let menuBtn = document.querySelector(".menu__btn");
let link = document.querySelector(".header__link");
let list = document.querySelector(".header__list");
let restaurantsList = document.querySelector(".restaurants__list")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  list.classList.toggle("active");
});

const isElementInViewport = (el)=> {
  const rect = el.getBoundingClientRect()
  return(
    rect.top >=0 &&
    rect.left >=0 &&
    rect.bottom <= (window.innerHeight ||document.documentElement.clientHeight ) &&
    rect.right <= (window.innerWidth ||document.documentElement.clientWidth) 
  )
}


const customersScroll = ()=> {
  const section = document.querySelector(".customers__list")
  if (isElementInViewport(section)) {
    section.classList.add("customers__animation")
    window.removeEventListener("scroll",customersScroll)
  }

}

window.addEventListener("scroll",customersScroll)

const qualityScroll = ()=> {
  const section = document.querySelector(".quality__inner")
  if (isElementInViewport(section)) {
    section.classList.add("quality__animation")
    window.removeEventListener("scroll",qualityScroll)
  }

}

window.addEventListener("scroll",qualityScroll)

const restaurantsData = [
  {
    id:1,
    imageUrl:"./images/restaurantimage1.jpg",
    title:"The Chicken King",
    deliveryTime:24,
    rating:4.8,
    status:"Healthy",
    button:"./images/Bookmark.png"
  },
  {
    id:2,
    imageUrl:"./images/restaurantimage2.jpg",
    title:"The Burger King",
    deliveryTime:24,
    rating:4.9,
    status:"Trending",
    button:"images/Bookmark.png"
  },
  {
    id:3,
    imageUrl:"./images/restaurantimage1.jpg",
    title:"The Chicken King",
    deliveryTime:24,
    rating:4.8,
    status:"Healthy",
    button:"./images/Bookmark.png"
  }
]

const createRestaurantList = restaurantsData.map((item) => {
  console.log(item, "item"); 
  const{id, imageUrl, title, deliveryTime, rating, status, button} = item;
  return `
  <li class="restaurants__item">
  <img class="restaurants__img" src=${imageUrl}" alt="">
  <h3 class="restaurants__h3">
  ${title}
  </h3>
  <span class="restaurants__time">
  ${deliveryTime}
  </span>
  <span class="restaurants__rating">
  ${rating}
  </span>
  <span class="restaurants__status">
  ${status}  
  </span>
  <button class="restaurants__button"> 
  ${button}
  </button> 
</li>
  `
})

.join("");
restaurantsList.innerHTML = createRestaurantList;
createRestaurantList();