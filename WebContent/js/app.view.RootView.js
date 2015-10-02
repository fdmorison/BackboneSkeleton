/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * This is the topmost view associated to the body of the page. 
 *
 * @author fmarinho
 *
 */
app.view.RootView = Backbone.View.extend({

    el : "body",

    childPackage: "app.view.",
    currentView: null,
    currentViewId: null,
    defaultViewId: "Login",
    
    initialize : function(args) {

        console.log("app.view.RootView.initialize()");
        this.render();

    },

    render : function() {

        console.log("app.view.RootView.render()");
        this.setChildView(this.defaultViewId);
        return this;

    },

    setChildView : function(viewId, args, callback) {

        console.log("app.view.RootView.setChildView("+viewId+")");
        
        // Abort if view was not provided
        if (!viewId || viewId == "") {
            return;
        }

        // Abort if it is the same view
        if (viewId == this.currentViewId) {
            if (callback) callback(this.currentView);
            return;
        }

        // Lookup the view
        var viewClass = eval(this.childPackage + viewId + "View");
        if (!viewClass) {
            throw "The view '" + viewId + "' does not exist.";
        }

        // Close current view
        if (this.currentView && this.currentView.destroy) {
            this.currentView.destroy();
            this.currentView.undelegateEvents();
        }

        // Open the requested view (pre-load its template)
        var that = this;
        var templatePath = viewId;
        app.services.TemplateManager.get(templatePath,function(){
            args = args || { parentView: that };
            that.currentView   = new viewClass(args);
            that.currentViewId = viewId;
            if (callback) callback(that.currentView);
        });

    }

});
