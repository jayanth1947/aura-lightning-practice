({
    doInit : function(component, event, helper) {

        // Here we call the method
        var action=component.get("c.getAccountRecords"); //get the method from the class
        action.setCallback(this,function(response){
            var state=response.getState();
            // checking the state is sucess and the data is assigned to the acclist
            if(state==="SUCCESS"){
                component.set("v.accList",response.getReturnValue());
            }
        });

        // This is important whwn you did not specify this the action won't get executed
        $A.enqueueAction(action);
    }
})