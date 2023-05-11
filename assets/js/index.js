// MENU BUTTON SEARCH
$(document).ready(function () {
  $("#searchButton").on("mouseenter", function () {
    $("#searchCamp").toggleClass("btnSearchFunction");
  });

  $("#searchCamp").on("mouseleave", function () {
    $("#searchCamp").toggleClass("btnSearchFunction");
  });
});

// MENU CLICK LINKS

let menuLink = $(".linksMenu a");

menuLink.each(function () {
  $(this).on("click", function () {
    let botao = $(".linksMenu .linkActive");

    botao.length != 0 ? botao.eq(0).removeClass("linkActive") : botao.length;

    $(this).addClass("linkActive");
  });
});

// RESPONSIVE NAVIGATION MENU

$("#btnMenu").on("click", function () {
  $("#responsiveMenu").css("display", "flex");
  $("#btnMenu").css("display", "none");
  $("#btnClose").css("display", "flex");
});

$("#btnClose").on("click", function () {
  $("#responsiveMenu").css("display", "none");
  $("#btnMenu").css("display", "flex");
  $("#btnClose").css("display", "none");
});

$("#responsiveMenu a").on("click", function () {
  $("#responsiveMenu").css("display", "none");
  $("#btnMenu").css("display", "flex");
  $("#btnClose").css("display", "none");
});

// CARROSSEIS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// GALAXIAS

var swiper = new Swiper(".swiperCo", {
  loop: true,
  loop: true,
  autoplay: {
    delay: 6500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// COSMOS

var swipe = new Swiper(".swiperGx", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
