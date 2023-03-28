({
    handleComponentEvent : function(component, event, helper) {

        // Get the message and label parameters from the event
       var message=event.getParam("message") ;
       var label=event.getParam("label");

        // Set the "msgFromNotifier" and "label" attributes of the component to the received message and label
       component.set("v.msgFromNotifier",message);
       component.set("v.label",label);

       // Increment the "eventCount" attribute of the component by 1
       var count=parseInt(component.get("v.eventCount")+1);
       component.set("v.eventCount",count);
    }
})
