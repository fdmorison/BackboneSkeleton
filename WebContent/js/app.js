/**
 * Copyright 2015-2020 INdT. All rights reserved.
 *
 * Global definitions of the application, like constants, packages, etc.
 *
 * @author fmarinho
 *
 */

/* ------ Constants ---------------- */
var EMPTY_FUNCTION = function() {};
var TEMPLATE_DIR = "templates/";
var DOMAIN = "http://localhost:8080";
var APPNAME = "BackboneSkeleton";
var BASE_URL = DOMAIN + "/" + APPNAME;

/* ------ Package Structure ------------- */
var app = {};
app.view = {};
app.view.main = {};
app.models = {};
app.collections = {};
app.services = {};

/* ------ The global session of the app ------------- */
app.session = {};

/* ------ The top view of the page ------------- */
app.rootView = null;

/* ------ Workarounds -- */
if (!window.console) {
    window.console = {
        log : EMPTY_FUNCTION,
        debug : EMPTY_FUNCTION
    };
}

String.prototype.toCapitalCase = function(str) {
    
    var str = this.toString();
    return str.charAt(0).toUpperCase() + str.substring(1);

}