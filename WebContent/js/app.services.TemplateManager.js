/**
 * Copyright 2015-2015 INdT. All rights reserved.
 *
 * Loads and caches templates to be used with views.
 *
 * @author fmarinho
 *
 */
app.services.TemplateManager = {

    cache: {},
    async: false,

    get: function(templateID, callback) {

        callback   = callback || EMPTY_FUNCTION;
        templateID = templateID.toLowerCase().replace(".","/");
        
        var template = this.cache[templateID];

        if (template) {
            callback(template);
        } else {
            that = this;
            jQuery.ajax({
                url  : TEMPLATE_DIR + templateID + ".html",
                async: that.async,
                success: function(html){
                    template = _.template(html);
                    that.cache[templateID] = template;
                    callback(template);
                }
            });
        }
        
        return template;

    }

}
