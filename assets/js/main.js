(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

        $('.testimonial-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            fade: true
        });


        $('.custom_select select').each(function () {
            var $this = $(this),
                numberOfOptions = $(this).children('option').length;

            $this.addClass('select-hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function (e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function () {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
                $(this).addClass('iss');
            });

            $listItems.click(function (e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
            });

            $(document).click(function () {
                $styledSelect.removeClass('active');
                $list.hide();
            });

        });

        $(".presslogos").ticker({
            item: 'div',
            pauseOnHover: false,
            speed: 40,
            delay: 100
        });

        $(".mainmenu ul li:has(ul)").addClass("has-submenu");
        $(".mainmenu ul li:has(ul)").addClass("small-submenu");
        $(".mainmenu ul li ul").addClass("sub-menu");
        $(".mainmenu ul.dropdown li").hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        });

        var $menu = $("#menu"),
            $menulink = $("#menu-toggle"),
            $menuTriggercont = $(".header-toggle"),
            $menuTrigger = $(".has-submenu > a");
        $menulink.click(function (e) {
            $menulink.toggleClass("active");
            $menu.toggleClass("active");
            $menuTriggercont.toggleClass("active");
            $('body').toggleClass("act");
        });

        $menuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this);
            t.toggleClass("active").next("ul").toggleClass("active")
        });

        $(".mainmenu ul li:has(ul)");


        $('.mb_text > .answer').hide();
        $('.mb_text').click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".answer").slideUp()
            } else {
                $(".mb_text.active .answer").slideUp();
                $(".mb_text.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown()
            }
            return !1
        })

    });
}(jQuery));



const body = document.body;
const triggerMenu = document.querySelector(".header-area");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;


window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});


ScrollTrigger.matchMedia({
    "(min-width: 960px)": function () {
        gsap.registerPlugin(ScrollTrigger)
        const inestors = gsap.utils.toArray(".list-section");

        inestors.forEach((ititle) => {
            gsap.to(ititle, {
                scrollTrigger: {
                    trigger: ititle,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    markers: false,
                    toggleClass: "active",
                }
            })
        });
    },



});
