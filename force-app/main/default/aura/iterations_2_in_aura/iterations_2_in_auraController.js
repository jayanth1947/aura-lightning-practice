({
    doInit : function(component, event, helper) {

        // It retrieves the server-side action getAccountRecords from the controller.
        var action=component.get("c.getAccountRecords");

        // It sets up a callback function that gets executed when the server-side action is complete.
        action.setCallback(this,function(response){

            // When the server-side action completes, the callback function sets the component's accList attribute to the value returned by the server-side action.
            component.set("v.accList",response.getReturnValue())
        });

        //  the "enqueueAction" method is called to add the action to the server-side action queue, so that it can be executed asynchronously.
        $A.enqueueAction(action);

    }
})
