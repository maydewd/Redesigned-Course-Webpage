/*
 * A module to list given data as announcements
 *
 * @author David Maydew
 */


define(['jquery', 'section_module', 'utils_module'], function($, sectionHelper, utils) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    // add announcement elements to the page
    function addAnnouncements(announcements) {
        if (announcements.length > 0) {
            var list = utils.createBasicList(announcements);
            sectionHelper.addSection("announcements", "Announcements", list, "text-danger");
        } else {
            error("No Announcements");
        }
    }

    // return only public methods
    return {
        init: addAnnouncements
    };
});
