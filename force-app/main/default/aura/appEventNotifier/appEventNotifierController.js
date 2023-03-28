({
    fireAppEvent : function(component, event, helper) {

        // Here the event dats is stored in this variable
        var appEvent=$A.get("e.c:applicationEvent");

        appEvent.setParams({
            // This message attribute is intialized in the event
            "message" : "Value from App Event"
        });

        // Firing the event
        appEvent.fire();
    }
})
