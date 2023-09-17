
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






const menu = document.querySelector("#menu");
const nav = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  nav.classList.toggle("responsive");
});

// gsap.to(".nikeimg1 .img1",{
//     x: "-100%",
//     opacity: 0,
//     duration: 1,
//     delay:.5,
//     stagger: 2,

//     // yoyo:true
// })

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper1", {
  effect: "cube",
  grabCursor: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper2", {
  effect: "cube",
  grabCursor: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false
  // },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".mySwiper3", {
  effect: "cube",
  grabCursor: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".mySwiper4", {
  effect: "cube",
  grabCursor: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


var tl = gsap.timeline();

tl.from(".heading", {
  height: "-10vh",
  duration: 1
})

tl.from(".heading img", {
  y: -60,
  duration: 1,
  stagger: 1
});
tl.from(" .navbar , .nav-icon ", {
  y: -55,
  duration: .8,
  stagger: 1
});
tl.from(".page1",{
  y: 200,
  opacity: 0,
  scale: .5,
  duration: .9,
  // rotate: 360,
})

tl.from(".page2-content h4, .page2-content h1, .page2-content p",{
  opacity: 0,
  x: -50,
  duration : .9,
  stagger: 1,
  scrollTrigger:{
    trigger: "#main .page2",
    scroller: "#main",
    // markers: true,
    start: "top 100%",
    end: "top -10%",
    scrub: true
  }
});

tl.from(".page3 h3, .page3 .img-first",{
  opacity: 0,
  x: -50,
  duration : .9,
  stagger: 1,
  ease: "power1.inOut",
  scrollTrigger:{
    trigger: "#main .page3",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top -3%",
    scrub: true
  }
});

tl.from(".page3 .img-second",{
  opacity: 0,
  x: 50,
  duration : .9,
  stagger: 1,
  ease: "power1.inOut",
  scrollTrigger:{
    trigger: "#main .page3",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top -3%",
    scrub: true
  }
});

tl.from(".page4-content h1, .page4-content p",{
  opacity: 0,
  x: -50,
  duration : .9,
  stagger: 1,
  ease: "power1.inOut",
  scrollTrigger:{
    trigger: "#main .page4",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top -3%",
    scrub: true
  }
});

tl.from(".page5 h3, .page5-cards .card1, .page5-cards .card3",{
  opacity: 0,
  x: -50,
  duration : .9,
  stagger: 1,
  ease: "power1.inOut",
  scrollTrigger:{
    trigger: "#main .page5",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top -50%",
    scrub: true
  }
});

tl.from(" .page5-cards .card2, .page5-cards .card4",{
  opacity: 0,
  x: 50,
  duration : .9,
  stagger: 1,
  ease: "power1.inOut",
  scrollTrigger:{
    trigger: "#main .page5",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top -50%",
    scrub: true
  }
});

tl.from(".page6-content h6, .page6-content h1, .page6-content p",{
  opacity: 0,
  x: -50,
  duration : .9,
  stagger: 1,
  scrollTrigger:{
    trigger: "#main .page6",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top -5%",
    scrub: true
  }
});

tl.from(".page7 h5",{
  opacity: 0,
  x: -50,
  duration : .9,
  stagger: 1,
  ease: "power1.inOut",
  scrollTrigger:{
    trigger: "#main .page7",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top -3%",
    scrub: true
  }
});
tl.from(".page7-img img",{
  opacity: 0,
  y: 100,
  scale: .7,
  duration : .9,
  stagger: 1,
  ease: "power1.inOut",
  scrollTrigger:{
    trigger: "#main .page7",
    scroller: "#main",
    // markers: true,
    start: "top 90%",
    end: "top -3%",
    scrub: true
  }
});