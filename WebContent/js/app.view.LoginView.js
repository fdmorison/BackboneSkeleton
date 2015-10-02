/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * This view allows the user to be authenticated and use the app.
 *
 * @author fmarinho
 *
 */
app.view.LoginView = Backbone.View.extend({

    el : "#document",
    templatePath: "login",

    events : {
        "click #login-btn": "doLogin"
    },

    initialize : function(args) {

        console.log("app.view.LoginView.initialize()");
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

        console.log("app.view.LoginView.destroy()");

    },

    doLogin : function() {

        console.log("app.view.LoginView.doLogin()");
        app.router.navigate("//main", {trigger: true});

    }

});
