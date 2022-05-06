AOS.init();
$('.owl-carousel-slide').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.owl-carousel-pr').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$(document).ready(function () {
    $(".hbg-menu-mb").click(function () {
        $(".menu-project-pk").toggleClass("active");
    });
    $(".box-search").click(function () {
        $(".form-search-pc").toggleClass("active");
    });
    $('.fancybox').fancybox();
});