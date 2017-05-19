/*
 * A module to list given data as homeworks in course.
 *
 * @author Robert C. Duvall
 * @author David Maydew
 */


define(['jquery', 'section_module', 'utils_module', 'bootstrap'], function($, sectionHelper, utils) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    function createHomeworkView(hw) {
        var holder = $("<div></div>");
        if (hw.link) {
            holder.append($("<a href='" + hw.link + "'>" + hw.name + "</a>"));
        } else {
            holder.append($("<p>" + hw.name + "</p>"));
        }
        holder.append($("<p>Released: " + hw.released + "</p>"));
        holder.append($("<p>Due: " + hw.due + "</p>"));
        return holder;
    }

    // add homework elements to the page, starting them out hidden
    function addItems(hwData) {
        if (hwData.assignments) {
            var holder = $("<div></div>");
            var hwViews = hwData.assignments.map(createHomeworkView);
            holder.append(utils.createFBfromItems(hwViews));
            holder.append(utils.createBasicList(hwData.info));
            sectionHelper.addSection("homework", "Homework", holder);
        } else {
            error("No Homework Assignments!");
        }

    }

    // return only public methods
    return {
        init: addItems
    };
});
