/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * Allows navigation through view.
 *
 * @author fmarinho
 *
 */
app.services.Router = Backbone.Router.extend({

  routes: {
      ":moduleId(/:contentId)" : "defaultRoute"
  },
  
  initialize : function(options) {

  },
  
  defaultRoute : function(moduleId, contentId) {

      app.rootView.setChildView(moduleId.toCapitalCase(), null, function(moduleView){
          if (contentId) {
              moduleView.setChildView(contentId.toCapitalCase());
          }
      });

  },

});
