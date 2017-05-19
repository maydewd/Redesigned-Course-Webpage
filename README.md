# Redesign Course Webpage

<img src='demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Summary
I chose to redesign the CS 330: Design and Analysis of Algorithms website [(original)](https://www.cs.duke.edu/courses/compsci330/spring17/). The original site is simply one long page with no interactivity. Formatting is done via html tables.

To improve upon this, I first focused on the navbar. On the original site, there is no way to access content other than scrolling. In my version, there is a fixed navbar so the user always has the ability to go between sections. In addition, I added in a smooth scrolling animation so that when the user does use the nav bar, it has a modern feel to it. Next, I used a combination of css and differing font sizes to better break up content. In my version, it is more clear which information belongs in which area. In addition, I put the course plan/schedule in an accordion element so the user can better focus on the information they desire. In other words, the student can now view the lectures and recitations for this topic without being intimidated by the lecture plans up ahead (unless they open that accordion element too!). Lastly, my webpage is fully responsive, including removing the overview section on devices smaller than a laptop.

In addition, I completed some of the "extra credit" tasks in code modularity, including a module that handles the creation of sections (representing pages). I also have a utils module that contains frequently used patterns to remove duplicated code. Lastly, I also used require.js to import and run my test file to allow for integration between my modules and QUnit (this was much more difficult than it seems).

** Note: ** For some reason, the QUnit tests occasionally fail when running on the live dukecs.io server. It seems like sometimes the tests are running before the page is fully loaded. Regardless, refreshing the page a few will eventually show that my tests succeed (which I have included a screenshot of in this folder). Alternatively, I can show you me running the tests locally, where they succeed consistently.


Name: David Maydew

NetID: dmm68

Started, Finished, Hours: Mar 4, Mar 10, 26 hours

Students talked to: None

Resources used: https://getbootstrap.com/components/#navbar
http://getfishtank.ca/blog/how-to-use-bootstrap-3-with-requirejs
http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

Assets used: None

Bugs: None
