/*
 * A module to list given data as a course plan
 *
 * @author David Maydew
 */


define(['jquery', 'section_module', 'utils_module', 'bootstrap'], function($, sectionHelper, utils) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    function createExamsSubsection(exams) {
        return utils.createSubsection("Exams", utils.createBasicList(exams));
    }

    function createMaterialSubsection(material) {
        var accordion = $('<div id="accordion" role="tablist" aria-multiselectable="true"></div>');
        for (var key in material) {
            accordion.append(createPanel(key, material[key]));
        }
        return utils.createSubsection("Material", accordion);
    }

    function createPanel(name, data) {
        var lectures = utils.createSubSubsection("Lectures", utils.createFBfromItems(data.lectures.map(createCard)));
        var recitations = utils.createSubSubsection("Recitations", utils.createFBfromItems(data.recitations.map(createCard)));
        var card = $('<div class="card"><div class="card-header" role="tab" id="h-' + name.replace(/\s/g, "") + '"><h5 class="mb-0">' +
            '<a data-toggle="collapse" data-parent="#accordion" href="#c-' + name.replace(/\s/g, "") + '" aria-expanded="true" aria-controls="' + name.replace(/\s/g, "") + '">' +
            name +
            '</a></h5></div>' +
            '<div id="c-' + name.replace(/\s/g, "") + '" class="collapse" role="tabpanel" aria-labelledby="h-' + name.replace(/\s/g, "") + '">' +
            '<div class="card-block"></div></div></div>');
        card.find('.card-block').append(lectures).append(recitations);
        return card;
    }

    function createCard(event) {
        var content = $("<div></div>");
        content.append("<p>" + event.number + " - " + event.date + "</p>");
        content.append("<p>" + event.topic + "</p>");
        if (event.notes_link) {
            content.append("<a href='" + event.notes_link + "'>Notes</a>");
        }
        if (event.references) {
            content.append("<p>" + event.references + "</p>");
        }
        return content;
    }

    // add overview to the page
    function addCoursePlan(coursePlanData) {
        if (coursePlanData.material) {
            var holder = $("<div></div>");
            holder.append(createExamsSubsection(coursePlanData.exams));
            holder.append(createMaterialSubsection(coursePlanData.material));
            sectionHelper.addSection("courseplan", "Course Plan", holder);
        } else {
            error("No Course Plan!");
        }
    }

    // return only public methods
    return {
        init: addCoursePlan
    };
});
