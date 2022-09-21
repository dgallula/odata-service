sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.controller.LoginForm", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.view.LoginForm
		 */
		onInit: function () {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.view.LoginForm
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.view.LoginForm
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.view.LoginForm
		 */
		//	onExit: function() {
		//
		//	}
		checkDetails:function(){
			var uname = this.getView().byId("idIUname").getValue();
			var pwd = this.getView().byId("idIPwd").getValue();
			if ( uname=="" || pwd=="" )
			{
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Both input fields are mandatory",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Failed",
					actions : [sap.m.MessageBox.Action.OK]
				});
			}
			else
			{ if (uname=="test" && pwd=="test")
				{
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.show("Login successful",{
					icon    : sap.m.MessageBox.Icon.INFORMATION,
					title   : "Validation Success",
					actions : [sap.m.MessageBox.Action.OK]
					});
					var oApp = this.getView().getParent();
					oApp.to("idApp--idSplitApp");
				}
			}
		}
	});
});