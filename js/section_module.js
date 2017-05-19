/*
 * A module to create a titled section with content
 *
 * @author David Maydew
 */


define(['jquery'], function($) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    // add navigation elements to the page
    function addSection(id, titleText, content, className) {
        if (id === undefined || titleText === undefined || content === undefined) {
            error("Must provide id, title, and content to section!");
        }
        className = className !== undefined ? className : ""; // if className isn't given, set to empty string
        var section = $("<section id='" + id + "' class='" + className + "'></section>");
        $("<h2></h2>").html(titleText).appendTo(section);
        section.append(content);
        section.appendTo($("#sections"));
    }

    // return only public methods
    return {
        addSection: addSection
    };
});
