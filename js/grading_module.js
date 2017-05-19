/*
 * A module to list given data as a grading spec
 *
 * @author David Maydew
 */


define(['jquery', 'section_module', 'utils_module'], function($, sectionHelper, utils) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    // add grading elements to the page
    function addGradingList(gradeList) {
        if (gradeList) {
            var list = utils.createBasicList(gradeList);
            sectionHelper.addSection("grading", "Grading", list);
        } else {
            error("No Grade Breakdown!");
        }
    }

    // return only public methods
    return {
        init: addGradingList
    };
});
