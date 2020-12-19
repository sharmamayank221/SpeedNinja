// navbar responsive hamburger menu

const navSlide = ()=> {

    const navUl = document.querySelector('.nav-main-links');
    const navLinks = document.querySelectorAll('.nav-main-links li');
    const burger = document.querySelector('.burger');
    const signUp = document.querySelector('.nav-links .sign-up');
    burger.addEventListener('click', ()=> {
      
      // animation nav links
    navLinks.forEach((link, index)=>{
      
        if (link.style.animation) {
           link.style.animation = ''
        } else {
           link.style.animation = `navLinkFade 0.5s ease forwards ${index /9 + 0.2}s`;
        }
       
       })

     navUl.classList.toggle('nav-active')
     signUp.classList.toggle('sign-active')
     burger.classList.toggle('toggle');
    })
}

navSlide();

// header background on scroll

window.addEventListener('scroll', function () {
   let header = document.querySelector('header');
   let windowPosition = window.scrollY > 0;
   header.classList.toggle('header-bg', windowPosition);
})

// details list for services 
const caretDown = ()=> {
   const caret = document.querySelectorAll('.details-package a');
 
   const packageList = document.querySelectorAll('.package-list');
   

   caret.forEach((ul,index)=> {
   
     ul.addEventListener('click', ()=> {
       
      
     if(packageList[index].style.display = "none") {
      packageList[index].classList.toggle('package-list-active')
     }
     
       })
   })
}
caretDown();

// copy-right
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;


// slick slider
$('.slick-slider').slick({
   infinite: true,
   slidesToShow:3,
   slidesToScroll: 3,
   autoplay: false,
   responsive: [
     
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 580,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          arrows:false,
          autoplay: true,
         }
       }
   
    ],
   prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/icon-control-left.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/icon-control-right.svg'>",
    
 });
