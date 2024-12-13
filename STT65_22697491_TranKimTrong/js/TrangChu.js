window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    
    document.querySelector('.parallaximage4').style.transform = `translate3d(0px, ${scrollPosition * 0.10}px, 0px)`;
    document.querySelector('.parallaximage3').style.transform = `translate3d(0px, ${scrollPosition * 0.12}px, 0px)`;
    document.querySelector('.parallaximage2').style.transform = `translate3d(0px, ${scrollPosition * 0.14}px, 0px)`;
    document.querySelector('.parallaximage1').style.transform = `translate3d(0px, ${scrollPosition * 0.16}px, 0px)`;
});
