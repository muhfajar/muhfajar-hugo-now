$(document).ready(function () {
    Countable.count($(".blog-post-content")[0], function(counter) {
        var imageCount = $(".blog-post-content").find("img").length;
        var seconds = counter.words / 275 * 60 + imageCount * 12;
        var rendered = (Date.now()-timerStart) / 1000;
        var minutes = Math.round(((seconds + rendered) / 60) * 100) / 100;
        $(".read-time").html("You've spent time reading for " + minutes + " min.");
    });
});
