/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * This view allows users to login in the application.
 *
 * @author fmarinho
 *
 */
app.view.main.UserView = Backbone.View.extend({

    el : "#content",
    templatePath: "main/user",

    parentView: null,

    initialize : function(args) {

        console.log("app.view.UserView.initialize()");
        this.parentView = args.parentView;
        this.render();

    },

    render : function() {

       var that = this;
       app.services.TemplateManager.get(this.templatePath,function(t){
           var html = t();
           that.$el.html(html);
       });
       return this;

    },

    destroy : function() {

        console.log("app.view.UserView.destroy()");

    },

});
