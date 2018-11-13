    module.exports = function (phantom, ready) {
        // make Wraith wait a bit longer before taking the screenshot
        //phantom.viewport()
        setTimeout(ready, 30000); // you MUST call the ready() callback for Wraith to continue

    }

    module.exports = function (phantom, ready) {
        // disable JavaScript
        phantom.settings.javascriptEnabled = true;

        // reload the page without JS enabled
        phantom.open(phantom.url, function () {
            setTimeout(ready, 10000);
        });
    }