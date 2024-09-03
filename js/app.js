$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        navText:['Prev','Next'],
        responsive:{
            0:{
                 nav:false,
            },
            768:{
                nav:true,
            }
            
        }
    });
// project slider
$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    smartSpeed:1000,
    margin:24,
    responsive:{
        0:{
            
        },
        768:{
            
        },
        1140:{
          items:3,
          center:true,
          
        },

    }
  });
  $('owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    })
});