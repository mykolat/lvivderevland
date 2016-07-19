(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '25px',
            maxFontSize: '50px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    $("form").submit(function(e) {
        var self = $(this),
            button = self.find("button"),
            xhr = new XMLHttpRequest();
        button.html(self.data("sending"));
        xhr.open('POST', '//formspree.io/' + self.data("email"), true);
        xhr.setRequestHeader("Accept", "application/json")
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(self.serialize());
        xhr.onloadend = function(res) {
            if (res.target.status === 200) {
                button.html(self.data("sent"));
                button.prop('disabled', true);
                console.log(xhr.status);
            } else {
                button.html(self.data("error"));
                button.toggleClass("btn-warning btn-primary");
                setTimeout(function() {
                    button.html(self.data("submit"));
                    button.toggleClass("btn-warning btn-primary");
                }, 3000)

            }
        };

        e.preventDefault();
    })

})(jQuery); // End of use strict
