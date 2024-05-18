let menuBtn = document.querySelector(".menu__btn");
let link = document.querySelector(".header__link");
let list = document.querySelector(".header__list");
let restaurantsList = document.querySelector(".restaurants__list")
let dishesList = document.querySelector(".dishes__list");
let purchasesList = document.querySelector(".purchases__list");
const customersSay = document.querySelector(".customersay__list");
const swiperWrapper = document.querySelector(".swiper-wrapper");

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
    imageUrl:"./images/image.png",
    title:"The Chicken King",
    deliveryTime:24,
    rating:4.8,
    status:"Healthy",
    button:"./images/Bookmark.png"
  },
  {
    id:2,
    imageUrl:"./images/image2.png",
    title:"The Burger King",
    deliveryTime:24,
    rating:4.9,
    status:"Trending",
    button:"./images/Bookmark.png"
  },
  {
    id:3,
    imageUrl:"./images/image.png",
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
  <img class="restaurants__img" src="${imageUrl}" alt="">
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
  <img src="${button}" alt="">
  </button> 
</li>
  `
})

.join("");
restaurantsList.innerHTML = createRestaurantList;

const dishesData = [
  {
    id: 1,
    imageUrl2: "./images/heart.png",
    imageUrl: "./images/chicken.png",
    title: "Chicken Hell",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    price: "$12.99",
    saved: "",
  },
  {
    id: 2,
    imageUrl2: "./images/heart.png",
    imageUrl: "./images/swedish.png",
    title: "Swe Dish",
    deliveryTime: "34min •",
    rating: 4.9,
    status: "Trending",
    price: "$19.99",
    saved: "",
  },
  {
    id: 3,
    imageUrl2: "./images/heart.png",
    imageUrl: "./images/swedish.png",
    title: "Swe Dish",
    deliveryTime: "34min •",
    rating: 4.9,
    status: "Supreme",
    price: "$19.99",
    saved: "",
  },
  {
    id: 4,
    imageUrl2: "./images/heart.png",
    imageUrl: "./images/chicken.png",
    title: "Chicken Hell",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    price: "$12.99",
    saved: "",
  },
];

const createDishesList = dishesData
  .map((dish) => {
    return `
      <li class="dishes__item">
      <button class="dishes__heart__btn">
      <img class="dishes__img__heart"  src="${dish.imageUrl2}" alt="image">
      </button>
      <img class="dishes__img"  src="${dish.imageUrl}" alt="image">
      <div class="dishes__item__inner">
      <span class="dishes__status ${dish.status.toLowerCase()}">${
      dish.status
    }</span>
      <h3 class="dishes__title">${dish.title}</h3>
      <div class="time__wrapper">
      <span class="dishes__time">${dish.deliveryTime}</span>
      <span class="dishes__rating">${dish.rating}</span>
      </div>
      <div class="price__wrapper">
      <span class="dishes__price">${dish.price}</span>
      <button class="dishes__add__btn">+</button>
      </div>
      </div>
    </li>
    `;
  })

  .join("");
dishesList.innerHTML = createDishesList;

const purchasesData = [
  {
    id: 1,
    imageUrl: "./images/chicken.png",
    title: "Chicken Hell",
    time: "On The Way",
    endTime: "3:09 PM",
    saved: "",
  },
  {
    id: 2,
    imageUrl2: "./images/heart.png",
    imageUrl: "./images/swedish.png",
    title: "Swe Dish",
    time: "Delivered",
    endTime: "Yesterday",
    saved: "",
  },
  {
    id: 3,
    imageUrl2: "./images/heart.png",
    imageUrl: "./images/swedish.png",
    title: "Swe Dish",
    time: "Cancelled",
    endTime: "Yesterday",
    saved: "",
  },
];
const createPurchasesList = purchasesData
  .map((purchases) => {
    return `
      <li class="purchases__item">
      <img class="purchases__img"  src="${purchases.imageUrl}" alt="image">
      <div class="purchases__item__inner">
      <h3 class="purchases__title">${purchases.title}</h3>
      <div class="purchases__wrapper">
      <span class="purchases__time">${purchases.time}</span>
      </div>
      <span class="purchases__endtime">${purchases.endTime}</span>
      </div>
    </li>
    `;
  })
  .join("");
  purchasesList.innerHTML = createPurchasesList

  const customersData = [
    {
      id: 1,
      imageUrl: "./images/customer.png",
      title: "Alexander R.",
      time: "01 Year With Us ",
      imageUrl2: "./img/icons/Pathcustomersay.svg",
      stroke:
        "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
      star: "./images/star.png",
    },
  ];
  
  const createCustomersayList = customersData
    .map((custom) => {
      return `
        <li class="customersay__item">
        <div class="customersay__wrapper">
          <img class="customersay__img"  src="${custom.imageUrl}" alt="image">
          <div class="customersay__item__inner">
            <h3 class="customersay__title">${custom.title}</h3>
            <span class="customersay__p">${custom.time}</span>
          </div>
        </div>
        <span class="customersay__stroke">${custom.stroke}</span>
        <img class="customersay__star"   src="${custom.star}" alt="image">
      </li>
      `;
    })
  
    .join("");
  customersSay.innerHTML = createCustomersayList;
  
  const swiperData = [
    {
      id: 1,
      stroke:
        " Online nline invoice payment helps companies save time, are faster and save maximum effort for the clien ",
      star: "./images/star.png",
    },
  
    {
      id: 2,
      stroke:
        " Online nline invoice payment helps companies save time, are faster and save maximum effort for the clien ",
      star: "./images/star.png",
    },
  
    {
      id: 3,
      stroke:
        " Online nline invoice payment helps companies save time, are faster and save maximum effort for the clien ",
      star: "./images/star.png",
    },
  ];
  
  const createSwiperList = swiperData
    .map((swiper) => {
      return `
      <div class="swiper__slide">
        <div class="swiper__item">
          <span class="swiper__stroke">${swiper.stroke}</span>
          <img class="swiper__star"   src="${swiper.star}" alt="image">
        </div>
      </div>
      `;
    })
  
    .join("");
  swiperWrapper.innerHTML  = createSwiperList;

  const newSwiper = new Swiper(".mySwiper", {
    breakpoints: {
      368: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1140: {
        slidesPerView: 3,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide:true,
    }
  });