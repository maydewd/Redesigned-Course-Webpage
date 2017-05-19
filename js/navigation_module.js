/*
 * A module to list given data as URL links.
 *
 * @author Robert C. Duvall
 * @author David Maydew
 */


define(['jquery'], function($) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    const $root = $('html, body'); // save since this will stay constant on each call to animate scroll

    function animateScroll() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - 70
        }, 'slow');
        return false;
    }

    function setNavTitle(title) {
        $("#courseName").html(title);
    }

    // add navigation elements to the page
    function addNavBar(navData) {
        setNavTitle(navData.courseName);
        if (navData.links.length > 0) {
            var list = $('#js-navigation');
            navData.links.forEach(function(l, idx) {
                var a = $('<a class="nav-link" href="' + l.url + '">' + l.name + '</a>').click(animateScroll);
                $('<li id="' + l.name + '"class="nav-item"></li>').append(a).appendTo(list);
            });
        } else {
            error("No Navigation Links!");
        }
    }

    // return only public methods
    return {
        init: addNavBar
    };
});
