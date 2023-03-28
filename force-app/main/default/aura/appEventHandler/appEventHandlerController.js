({
    handleAppEvent : function(component, event, helper) {
        // getting the message var from the event app
        var message=event.getParam("message");

        // setting the value of the message in the event handler
        component.set("v.messageFromNotifier",message);
    }
})
