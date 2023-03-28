({
    // Define the function that fires the component event
    fireCmpEvent : function(component, event, helper) {

        // Get the component event by name
         var componentEvent=component.getEvent("cmpEvent");

          // Get the message string from the component's attribute
         var msgString=component.get("v.messageString");

         // If the message string is empty, set it to "No Message Passed"
         msgString=$A.util.isEmpty(msgString) ? "No Message Passed" : msgString;

         // Set the parameters of the component event
         componentEvent.setParams({
            "message" : msgString,
            "label" : "Message Recieved"
         });

        // Fire the component event
        componentEvent.fire();

    }
})
