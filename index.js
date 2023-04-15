const toggle = document.querySelector(".toggle");
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.link')

toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navlinks.classList.toggle('open')
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        toggle.classList.remove('open')
        navlinks.classList.remove('open')
    })
})

if ($(".text-slider").length == 1) {
             
            var typed_strings =
                $(".text-slider-items").text();
 
            var typed = new Typed(".text-slider", {
                strings: typed_strings.split(", "),
                typeSpeed: 50,
                loop: false,
                backDelay: 100,
                backSpeed: 30,
            });
}
        
$(window).scroll(function() {
    $('.animate-on-scroll').each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop();
        if (position < scrollPosition + $(window).height()) {
            $(this).addClass('animated');
        }
    });
});

AOS.init();