/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * This is a sample view
 *
 * @author fmarinho
 *
 */
app.view.main.ProductView = Backbone.View.extend({

    el : "#content",
    templatePath: "main/product",

    initialize : function(args) {

        console.log("app.view.ProductView.initialize()");
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

        console.log("app.view.ProductView.destroy()");

    }

});
