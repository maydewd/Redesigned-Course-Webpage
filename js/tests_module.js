/*
 * Tests for a modern course website
 *
 * @author David Maydew
 */

define(['jquery', 'QUnit'], function($, QUnit) {
    // test if correct values for the links were loaded
    function startTests() {
        QUnit.test('Correct Title', function(assert) {
            assert.strictEqual(document.title, "CS330 Course Homepage", 'Correct page title');
        });

        QUnit.test('Correct Navbar', function(assert) {
            var brand = $("#courseName");
            assert.strictEqual(brand.text(), "CS330: Design and Analysis of Algorithms (Spring 17)", 'Correct page title');
            assert.strictEqual(brand.css('color'), "rgb(0, 0, 0)", 'Correct title color');
            var items = $('#js-navigation li');
            assert.strictEqual(items.length, 6, 'Correct number of links');
            // HTML does not care about extra whitespace that may sneak in
            assert.strictEqual($(items[1]).text().trim(), 'Grading', 'Correct second text');
            assert.strictEqual($($(items[1]).children()[0]).attr('href'), '#grading', 'Correct first link');
            assert.strictEqual($(items[5]).text().trim(), 'References', 'Correct last text');
            assert.strictEqual($($(items[5]).children()[0]).attr('href'), '#references', 'Correct last link');
        });

        QUnit.test('Correct Synopsis', function(assert) {
            var overview = $("section#overview");
            assert.strictEqual(overview.find("h4").first().text(), "Synopsis", 'Correct first subsection');
            assert.strictEqual(overview.find("h4").eq(1).text(), "Objectives", 'Correct second subsection');
            assert.strictEqual(overview.find("h4").eq(2).text(), "Course Topics", 'Correct third subsection');
            assert.strictEqual(overview.find("h4").eq(3).text(), "Prerequisites", 'Correct fourth subsection');
            assert.strictEqual(overview.find("h4").eq(4).text(), "Instructor", 'Correct fifth subsection');
            assert.strictEqual(overview.find(".man-flex").first().find(".staff-info").find("a").first().attr('href'), "http://www.cs.duke.edu/~debmalya/", 'Correct website for Instructor');
            assert.ok(overview.find(".man-flex").first().find(".staff-info").length > 0, 'At least one professor');
            assert.ok(overview.find(".man-flex").eq(1).find(".staff-info").length > 0, 'At least one Grad TA');
            assert.ok(overview.find(".man-flex").eq(2).find(".staff-info").length > 0, 'At least one UTA');
            assert.ok(overview.find("h4").eq(6).next().text(), "French Science 2231 on Mondays and Wednesdays at 10:05 - 11:20 am", 'Correct Lecture time');
            assert.strictEqual(overview.find("h4").eq(5).next().children().length, 2, 'Correct number of recitations');
        });

        QUnit.test('Correct Grading', function(assert) {
            var grading = $("section#grading");
            assert.ok(grading.children().eq(1).is("ul"), 'Announcements are a list');
            assert.strictEqual(grading.find("li").first().text(), "Homework Assignments (11 required + 1 optional): 35%", 'Correct first grade category');
            assert.strictEqual(grading.find("li").last().text(), "Both the midterms and the final exam will be in-class closed-book exams.", 'Correct grading general info');
        });

        QUnit.test('Correct Announcements', function(assert) {
            var announcements = $("section#announcements");
            assert.ok(announcements.children().eq(1).is("ul"), 'Announcements are a list');
            assert.strictEqual(announcements.find("li").first().text(), "TA and UTA office hours have been updated. Please check the corresponding section for details.", 'Correct first announcement');
        });

        QUnit.test('Correct Homework', function(assert) {
            var homework = $("section#homework");
            assert.strictEqual(homework.find(".man-flex").children().length, 12, 'Correct number of homeworks');
            assert.strictEqual(homework.find(".man-flex").children().first().find("a").text(), "Homework 1", 'First is Homework 1');
            assert.strictEqual(homework.find(".man-flex").children().first().find("p").first().text(), "Released: 1/11", 'Correct Homework 1 released date');
            assert.strictEqual(homework.find(".man-flex").children().first().find("p").last().text(), "Due: 1/18", 'Correct Homework 1 due date');
            assert.strictEqual(homework.find(".man-flex").children().first().find("a").attr('href'), "https://www.cs.duke.edu/courses/compsci330/current/homeworks/hw1.pdf", 'First link is correct');
            assert.strictEqual(homework.find(".man-flex").children().eq(2).find("a").attr('href'), "https://www.cs.duke.edu/courses/compsci330/current/homeworks/hw3.pdf", 'Third link is correct');
            assert.strictEqual(homework.find(".man-flex").children().eq(2).find("p").first().text(), "Released: 1/25", 'Correct Homework 3 released date');
            assert.strictEqual(homework.find(".man-flex").children().eq(2).find("p").last().text(), "Due: 2/1", 'Correct Homework 3 due date');
            assert.strictEqual(homework.find(".man-flex").children().eq(4).find("a").attr('href'), "https://www.cs.duke.edu/courses/compsci330/current/homeworks/hw5.pdf", 'Fifth link is correct');
            assert.strictEqual(homework.find(".man-flex").children().eq(6).find("a").attr('href'), "https://www.cs.duke.edu/courses/compsci330/current/homeworks/hw7.pdf", 'Seventh link is correct');
            assert.strictEqual(homework.find(".man-flex").children().eq(7).find("a").text(), "Homework 8", 'Eighth is Homework 8');
            assert.strictEqual(homework.find(".man-flex").children().eq(7).find("a").attr('href'), "https://www.cs.duke.edu/courses/compsci330/current/homeworks/hw8.pdf", 'Eighth link is correct');
            assert.strictEqual(homework.find(".man-flex").children().last().find("p").first().text(), "Homework 12", 'Last is Homework 12');
            assert.ok($("section#homework:contains('collaboration')").length, "Discusses Collaboration policy");
        });

        QUnit.test('Correct Course Plan', function(assert) {
            var courseplan = $("section#courseplan");
            assert.ok($("section#courseplan:contains('Midterm 1')").length, "Discusses midterm 1");
            assert.ok($("section#courseplan:contains('Final')").length, "Discusses final exam");
            assert.strictEqual(courseplan.find(".card-header").find("a").first().text(), "Introduction", 'Contains Introduction lectures');
            assert.strictEqual(courseplan.find(".card-header").find("a").eq(1).text(), "Algorithm Design Techniques", 'Contains Algorithm Design Techniques lectures');
            assert.strictEqual(courseplan.find(".card-header").find("a").eq(2).text(), "Graph Algorithms", 'Contains Graph Algorithms lectures');
            assert.strictEqual(courseplan.find(".card-header").find("a").eq(3).text(), "Randomized Algorithms", 'Contains Randomized Algorithms lectures');
            assert.strictEqual(courseplan.find(".card-header").find("a").eq(4).text(), "Linear Programming", 'Contains Linear Programming lectures');
            assert.strictEqual(courseplan.find(".card-header").find("a").eq(5).text(), "Intractability", 'Contains Intractability lectures');
        });

        QUnit.test('Correct References', function(assert) {
            var references = $("section#references");
            assert.ok(references.find("h4").next().is("ul"), 'Textbooks are a list');
            assert.strictEqual(references.find("li").first().text(), "[DPV] S. Dasgupta, C. Papadimitriou, and U. Vazirani. Algorithms. McGraw Hill, 2006.", 'Correct first textbook');
            assert.strictEqual(references.find("li").eq(2).text(), "[CLRS] T. Cormen, C. Leiserson, R. Rivest, and C. Stein. Introduction to Algorithms. MIT Press, 2009.", 'Correct last textbook');
            assert.strictEqual(references.find("li").eq(3).text(), "[AHU] A. Aho, J. Hopcroft, and J. Ullman. Design and Analysis of Algorithms. Addison Wesley 1974.", 'Correct first external reference');
            assert.strictEqual(references.find("li").eq(6).text(), "[Ta] R. E. Tarjan. Data Structures and Network Algorithms. Society for Industrial Mathematics, 1987.", 'Correct first external reference');
        });

        QUnit.test("Correct Theme", function(assert) {
            assert.strictEqual($("body").css("background-image"), 'url("http://images.all-free-download.com/images/graphiclarge/mathematical_formula_handwritten_edition_vector_521072.jpg")', "Correct background image");
            var brand = $("#courseName");
            assert.strictEqual(brand.css('color'), "rgb(0, 0, 0)", 'Correct title color');
        });
    }


    // test if correct styles were loaded
    // QUnit.test('Correct Style', function(assert) {
    //     var expected = $('<div/>').css('color', '#999').appendTo('body');
    //     // note, let JavaScript convert color to standard form
    //     assert.strictEqual(window.getComputedStyle(expected.get(0)).color,
    //         $('#js-linklist li a').css('color'),
    //         'Correct text color');
    // });
    //
    // // test if correct background image was actually loaded (need to wait for the load to complete)
    // QUnit.test('Image Correctly Loaded', function(assert) {
    //     // will need to wait for this test to signal when it is complete
    //     var testDone = assert.async();
    //     var imgURL = $('body').css('background-image').split('"')[1];
    //     assert.strictEqual(imgURL.split('/').pop(), 'green.jpg', 'Correct background image');
    //     $('<img/>')
    //         // if the image throws an error, the test fails
    //         .on('error', function(e) {
    //             assert.ok(false, 'Background image not loaded');
    //             testDone();
    //         })
    //         // if the image loads, the test succeeds
    //         .on('load', function() {
    //             assert.ok(true, 'Background image loaded');
    //             testDone();
    //         })
    //         // try to actually load the image
    //         .attr('src', imgURL);
    // });
    return {
        run: startTests
    };
});
