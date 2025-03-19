sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.deploy.controller.Main", {
        onInit: function () {

        },
        onMenuPress: function(oEvent) {
            // Handle menu button press
            MessageToast.show("Menu pressed - this could open a menu or navigate to a section");
        }
    });
});
