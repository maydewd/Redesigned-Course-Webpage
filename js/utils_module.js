/*
 * A module of utility functions
 *
 * @author David Maydew
 */


define(['jquery'], function($) {
    // throw a generic error
    function error(msg) {
        throw "Error: " + msg;
    }

    // items: array of items, one per li
    function createBasicList(items) {
        var lis = items.map(function(item) {
            return $("<li>" + item + "</li>");
        });
        return $("<ul></ul").append(lis);
    }

    // creates a horizontal, wrapping flexbox with the items in this section
    // items: array of items, one per element in the flexbox
    function createFBfromItems(items) {
        var group = $("<div class='man-flex'></div>");
        items.forEach(function(item) {
            $("<div></div>").append(item).appendTo(group);
        });
        return group;
    }

    function createSubsection(name, content) {
        var subsection = $("<div></div>");
        subsection.append($("<h3>" + name + "</h3>"));
        subsection.append(content);
        return subsection;
    }

    function createSubSubsection(name, content) {
        var subsection = $("<div></div>");
        subsection.append($("<h4>" + name + "</h4>"));
        subsection.append(content);
        return subsection;
    }

    // return only public methods
    return {
        createBasicList: createBasicList,
        createFBfromItems: createFBfromItems,
        createSubsection: createSubsection,
        createSubSubsection: createSubSubsection
    };
});
