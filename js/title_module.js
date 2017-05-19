/*
 * A module to set the meta page title
 *
 * @author David Maydew
 */


define(function() {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    // set the meta page title
    function setTitle(titleData) {
        if (titleData.title) {
            document.title = titleData.title;
        } else {
            error("No page title given!");
        }
    }

    // return only public methods
    return {
        init: setTitle
    };
});
