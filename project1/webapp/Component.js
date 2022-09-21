// Define the user defined component
jQuery.sap.declare("ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.Component");

// Create the component and load the root view (App.view.xml)
sap.ui.core.UIComponent.extend("ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.Component", {
	createContent : function() {
		var oApp = sap.ui.view({
			id	: "idApp",
			viewName	: "ZPROJTEST_APP_SPLIT_APP.ZPROJTEST_APP_SPLIT_APP.view.App",
			type	: sap.ui.core.mvc.ViewType.XML
		});
		return oApp;
	}
});

