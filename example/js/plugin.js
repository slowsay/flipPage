chrome.app.runtime.onLaunched.addListener(function(e) {
    // Center window on screen.
    var swidth = screen.availWidth;
    var sheight = screen.availHeight;
    var width = 500;
    var height = 400;

    chrome.app.window.create('index.html', {
        id : "FlipPage",
        outerBounds : {
            width : swidth,
            height : sheight,
            left : Math.round((swidth - width) / 2),
            top : Math.round((sheight - height) / 2)
        }
    });
});
