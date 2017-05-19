/*
 * A module to list given data as a course overview
 *
 * @author David Maydew
 */


define(['jquery', 'section_module', 'utils_module'], function($, sectionHelper, utils) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    function createSynopsisView(synopsisData) {
        var content = $("<div></div>");
        content.append(utils.createSubSubsection("Synopsis", $("<p></p>").append(synopsisData.text)));
        content.append(utils.createSubSubsection("Objectives", utils.createBasicList(synopsisData.objectives)));
        content.append(utils.createSubSubsection("Course Topics", utils.createBasicList(synopsisData.topics)));
        content.append(utils.createSubSubsection("Prerequisites", utils.createBasicList(synopsisData.prerequisites)));
        return content;
    }

    // creates a div with data for an individual person
    function createStaffView(person) {
        var content = $("<div class='staff-info'></div>");
        content.append($("<p>" + person.name + "</p>"));
        if (person.webpage) {
            content.append($("<a href='" + person.webpage + "'>" + person.webpage + "</p>"));
        }
        if (person.location) {
            content.append($("<p>" + person.location + "</p>"));
        }
        content.append($("<a href='mailto:" + person.email + "'>" + person.email + "</p>"));
        content.append($("<p>Office Hours: " + person.office_hours + "</p>"));
        return content;
    }

    // creates a view for every staff member
    function createStaffViews(staffData) {
        var content = $("<div></div>");
        for (var key in staffData) {
            var items = staffData[key].map(createStaffView);
            content.append(utils.createSubSubsection(key, utils.createFBfromItems(items)));
        }
        return content;
    }

    // add overview to the page
    function addOverview(overviewData) {
        if (overviewData.synopsis) {
            var content = $("<div></div>");
            content.append(createSynopsisView(overviewData.synopsis));
            content.append(createStaffViews(overviewData.staff));
            content.append(utils.createSubSubsection("Lectures", $("<p>" + overviewData.lectures + "</p>")));
            content.append(utils.createSubSubsection("Recitations", utils.createBasicList(overviewData.recitations)));
            sectionHelper.addSection("overview", "Overview", content);
        } else {
            error("No overview data!");
        }
    }

    // return only public methods
    return {
        init: addOverview
    };
});
