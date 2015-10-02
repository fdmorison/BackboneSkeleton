/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * This is the topmost view of the Main Module of the app. 
 *
 * @author fmarinho
 *
 */
app.view.MainView = Backbone.View.extend({

    el : "#document",
    templatePath: "main",

    childPackage  : "app.view.main.",
    currentView   : null,
    currentViewId : null,
    defaultViewId : "User",

    initialize : function(args) {

        console.log("app.view.MainView.initialize()");
        this.render();

    },

    render : function() {

        console.log("app.view.MainView.render()");
        var that = this;

        app.services.TemplateManager.get(this.templatePath,function(t){
            that.$el.html( t() );
            that.setChildView(that.defaultViewId);
        });

        return this;

    },

    setChildView : function(viewId, args) {

        console.log("app.view.MainView.setChildView("+viewId+")");
        
        // Stop if view was not provided
        if (!viewId || (viewId == "")) {
            return;
        }

        // Stop if it is the same view
        if (viewId == this.currentViewId) {
            return;
        }

        // Close current view
        if (this.currentView && this.currentView.destroy) {
            this.currentView.destroy();
            this.currentView.undelegateEvents();
        }

        // Lookup the view
        var viewClass = eval(this.childPackage + viewId + "View");
        if (!viewClass) {
            throw "The view '" + viewId + "' does not exist.";
        }
        
        // Open the requested view (pre-load its template)
        var that = this;
        var templatePath = this.templatePath + "/" + viewId;
        app.services.TemplateManager.get(templatePath,function(){
            args = args || { parentView: that };
            that.currentView   = new viewClass(args);
            that.currentViewId = viewId;
        });

    },
    
    onMenuClick : function(event) {

        var viewId = $(event.target).data("view");
        this.setChildView(viewId);

    },

});
