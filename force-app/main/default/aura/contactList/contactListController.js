({
    // Defines a function that will be called when the component is initialized
    doInit : function(component, event, helper) {
        // Define an array of columns for the datatable component
        component.set("v.columns",[
            {label:"First Name",fieldName:"FirstName",type:"text"},
            {label:"Last Name",fieldName:"LastName",type:"text"},
            {label:"Phone",fieldName:"Phone",type:"phone"}
        ]);

        // Create an instance of the Apex controller method to retrieve contact records
        var action =component.get("c.getContactRecords");
        // Set the parameters for the Apex method call
        action.setParams({
             // Pass in the current record ID to retrieve associated contacts
            recordId:component.get("v.recordId")
        });
        // Set a callback function to handle the server response
        action.setCallback(this,function(data){
            // Set the value of the contacts attribute to the data returned by the Apex method
            component.set("v.contacts",data.getReturnValue());
        });

        // Queue the server call for execution
        $A.enqueueAction(action);
    }
})
