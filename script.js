document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Locomotive Scroll and GSAP Integration
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    gsap.registerPlugin(ScrollTrigger);

    scroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('#main').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    // GSAP 'from' Animations for left-container and right-container
    gsap.from('nav',{
        y:-100,
        opacity:0,
        duration:1.5,
        ease:'power2.out'
       
    })
    gsap.from('#left-container h2', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3
    });

    gsap.from('#left-container h3', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.6
    });

    gsap.from('#left-container p', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.9
    });

    gsap.from('.main-card', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 1.2
    });

    gsap.from('.floating-card', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 1.5
    });
    
    gsap.from('.about', {
        scrollTrigger: {
            trigger: '.about',
            scroller: '#main',
            start: 'top 80%',
            end: 'top 60%',
            scrub: true
        },
        y: 100,
        opacity: 0,
        duration: 1
    });

    gsap.from('.skills', {
        scrollTrigger: {
            trigger: '.skills',
            scroller: '#main',
            start: 'top 80%',
            end: 'top 60%',
            scrub: true
        },
        y: 100,
        opacity: 0,
        duration: 1
    });

    gsap.from('.swiper-slide', {
        scrollTrigger: {
            trigger: '.swiper-slide',
            scroller: '#main',
            start: 'top 80%',
            end: 'top 60%',
            scrub: true
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
    
    gsap.from('#section-three h2', {
        scrollTrigger: {
            trigger: '.project',
            scroller: '#main',
            start: 'top 80%',
            end: 'top 60%',
            scrub: true
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    gsap.from('.project', {
        scrollTrigger: {
            trigger: '.project',
            scroller: '#main',
            start: 'top 80%',
            end: 'top 60%',
            scrub: true
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    gsap.from('footer', {
        scrollTrigger: {
            trigger: 'footer',
            scroller: '#main',
            start: 'top 80%',
            end: 'top 60%',
            scrub: true
        },
        y: 100,
        opacity: 0,
        duration: 1
    });
    
    
    
});

// Swiper Initialization
function swiper() {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        }
    });
}
swiper();