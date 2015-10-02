/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * Causes to load and start the initial processes for the application.
 *
 * @author fmarinho
 *
 */
$(document).ready(function() {

    // Log initialization
    console.log('INIT: main');

    // Disable right click (You may show a custom context menu instead)
    $(document).bind("contextmenu", function(e) {
        return false;
    });

    // Create the document view (the topmost parent of all views)
    app.router   = new app.services.Router();
    app.rootView = new app.view.RootView();
    
    Backbone.history.start();

});
