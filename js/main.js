$('#header-slider').owlCarousel({
    items:1,
    margin:10,
    rtl : true ,
    autoplay : true,
    loop:true,
    autoplayTimeout: 7000
})

$('.collapse').collapse()

$('#rating-slider').owlCarousel({
    loop:true,
    rtl : true ,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
        },
        1000:{
            items:3,
        }
    }
})