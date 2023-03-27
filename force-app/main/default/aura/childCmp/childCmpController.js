({
    // The controller function for the "show" method defined in the component
    showMessage : function(component, event, helper) {
        // Calls the helper function to display the message with a type of "confirm"
        helper.showMessageHelper(component,event,'confirm');

    },

    showErrorMessage : function(component, event, helper) {
        // Calls the helper function to display the message with a type of "error"
        helper.showMessageHelper(component,event,'error');
    },

    removeMessage : function(component, event, helper) {
        // Calls the helper function to remove the message
        helper.removeMessageHelper(component);
    }
})
