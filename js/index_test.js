/*
 * Functions to load JSON data and update content based on its values.
 *
 * Note, do these actions right away, NOT after the page loads
 *
 * @author Robert C. Duvall
 * @author David Maydew
 */

require.config({
    "baseUrl": "js",
    "shim": {
        "bootstrap": {
            "deps": ['jquery']
        },
        "QUnit": {
            "exports": 'QUnit',
            "init": function() {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            },
            "deps": ['jquery']
        }
    },
    "paths": {
        "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min",
        "jquery": "https://code.jquery.com/jquery-3.1.1.min",
        'QUnit': "https://code.jquery.com/qunit/qunit-2.1.1"
    }
});


require([
        // dependencies for this code
        "jquery",
        "QUnit",
        "tests_module",
        "title_module",
        "navigation_module",
        "overview_module",
        "grading_module",
        "announcements_module",
        "homework_module",
        "courseplan_module",
        "references_module",
        "section_module",
        "utils_module"
    ],

    function($, QUnit, tests, title, navigation, overview, grading, announcements, homework, courseplan, references) {
        // Variables to configure where to specify JSON data
        const folderPrefix = 'data_';
        const folderTheme = $('#script').attr('theme');

        /* This action is defined by the less.js package and is used to set
         * the variables according to a particular theme
         */
        const lessAction = less.modifyVars;

        /*
         * Each data file that needs to be processed should go in this array
         * fileName: filename of a JSON (or other) file to be imported
         * action to apply to this JSON (or other) file
         */
        const data_inputs = [{
            fileName: "theme.json",
            action: lessAction
        }, {
            fileName: "title.json",
            action: title.init
        }, {
            fileName: "navigation.json",
            action: navigation.init
        }, {
            fileName: "overview.json",
            action: overview.init
        }, {
            fileName: "grading.json",
            action: grading.init
        }, {
            fileName: "announcements.json",
            action: announcements.init
        }, {
            fileName: "homework.json",
            action: homework.init
        }, {
            fileName: "courseplan.json",
            action: courseplan.init
        }, {
            fileName: "references.json",
            action: references.init
        }];

        /*
         * Actually load JSON data and how to process it
         */
        // given a JSON data file, apply the given action to it after it is loaded and parsed
        function loadJSON(jsonFile, actionOnLoad) {
            $.getJSON(jsonFile, function(data) {
                try {
                    actionOnLoad(data);
                } catch (err) {
                    alert(err);
                }
            });
        }

        // load the json for each of the data inputs with their specified action
        data_inputs.forEach(function(input) {
            var filepath = folderPrefix + folderTheme + "/" + input.fileName;
            loadJSON(filepath, input.action);
        });

        tests.run();
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);
