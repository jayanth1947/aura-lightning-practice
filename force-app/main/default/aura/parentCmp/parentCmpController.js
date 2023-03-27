({
     // Function to handle the "Show Confirmation" button click
    handleShow : function(component, event, helper) {
        // Call the "show" method on the child component with a message parameter
        component.find("messages").show("Confirmation Message");
    },
    handleError : function(component, event, helper) {
        // Call the "error" method on the child component with a message parameter
        component.find("messages").error("Error Message");
    },
    handleRemove : function(component, event, helper) {
        // Call the "remove" method on the child component to remove the current message
        component.find("messages").remove();

    }

})
