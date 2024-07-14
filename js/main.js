//owl carousel plugin code
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        margin: 15,
        slideSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        resonsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1000 : {
                items: 2
            },
            1200 : {
                items: 3
            },
            1920 : {
                items: 3
            }
        }
    }); 
  });
  // smooth scroll behaviour
  $('a').on('click',function(event){
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        },400,function(){
            window.location.hash = hash;
        })
    }
})