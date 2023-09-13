$(document).ready(function() {
    // Initialize the first Owl Carousel
    $('.first-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        navText: ["<i class='bi bi-arrow-left carousel-arrow'></i>", "<i class='bi bi-arrow-right carousel-arrow'></i>"],
    });

    // Initialize the second Owl Carousel
    var owl = $('.second-carousel-content');
    owl.owlCarousel({
        items: 3,
        dots: true,
        loop: true,
        dots:true,
        nav: true,
        dotsEach: true,
        autoplay: false,
        margin: 30,
        navText: ["<i class='bi bi-arrow-left carousel-arrow'></i>", "<i class='bi bi-arrow-right carousel-arrow'></i>"],
        responsive: {
            0: {
                items: 1,
                minWidth: 100
            },
            992: {
                items: 2
            },
            1250: {
                items: 3
            }
        }
    });

    // Apply active-dot-box to clicked dots
    $(".owl-dot").on("click", function() {
        $(".owl-dot span::before").remove(); // Remove existing boxes
        $(this).find("span").append("<div class='active-dot-box'></div>");
    });
});
