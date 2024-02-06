
$(window).load(function(){
  // $(".preloader").fadeOut();
})




$(document).ready(function(){

   
// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});


// brands swiper
const brandsSwiper = new Swiper('.brands .swiper', {
  loop: true,
  // autoplay : true ,
  pagination: {
    el: '.brands .swiper-pagination',
    clickable: true,
  },
 
  navigation: {
    nextEl: ' .brands .swiper-button-next',
    prevEl: '.brands .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 35
    } , 
      992: {
      slidesPerView: 5,
      spaceBetween: 25
    } , 
    1100: {
      slidesPerView: 6,
      spaceBetween: 15
    }
  }
});


//  bestseller swiper

const bestsellerSwiper = new Swiper(' .bestseller .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 7
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 6,
      spaceBetween: 17
    }
  }
});



//  special offers swiper

const specialOffers = new Swiper(' .special-offers .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers .swiper-button-next ',
    prevEl: '.special-offers .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 7
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 6,
      spaceBetween: 17
    }
  }
});









// **************************************************************************************************



// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("overflow-hiddden") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("overflow-hiddden") ;
})



// **************************************************************************************************

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 400);
}) 



// **************************************************************************************************


//fixed nav

let myHeader = document.querySelector("header"),
prevScrollposition = $(window).scrollTop();

$(window).on("scroll", function () {
   if ($(window).scrollTop() > 150) {
       $(myHeader).addClass("fixed");
   } else {
       $(myHeader).removeClass("fixed");
   }
   var scrollTop = $(window).scrollTop();
   prevScrollposition < scrollTop && prevScrollposition > 0 ? myHeader.classList.add("stayTop") : myHeader.classList.remove("stayTop"), (prevScrollposition = scrollTop);
 });







// **************************************************************************************************

// nested menus

if($(window).width() <= 992) {  
  $(".products-btn").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".sub-menu").slideToggle(300) ;
    $(this).toggleClass("nav-arrow-rotate");
    })
}
if($(window).width() <= 992) {  
  $(".li-has-children").click(function (e) {
    e.preventDefault() ;
    $(this).children(".second-sub-menu").slideToggle(300) ;
    $(".second-sub-menu").not($(this).children(".second-sub-menu")).slideUp(300);
    $(this).children("a").children("i").toggleClass("rotate-icon");
    $(".li-has-children").not($(this)).children("a").children("i").removeClass("rotate-icon");
    })
}


  /********************************************************************************* */

// footer nested menu

if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }





/********************************************************************************* */


})







