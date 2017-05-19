/*
 * A module to list given data as course references
 *
 * @author David Maydew
 */


define(['jquery', 'section_module', 'utils_module'], function($, sectionHelper, utils) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    // add course references
    function addReferences(references) {
        if (references) {
            var holder = $("<div></div>");
            for (var key in references) {
                holder.append(utils.createSubSubsection(key, utils.createBasicList(references[key])));
            }
            sectionHelper.addSection("references", "References", holder);
        } else {
            error("No references!");
        }
    }

    // return only public methods
    return {
        init: addReferences
    };
});
