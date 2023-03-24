({
    handleBtn : function(component, event, helper) {
        // Get the component with the "inputCmp" aura:id attribute
        var inputCmp=component.find("inputCmp");
        // Get the value of the input component
        var value=inputCmp.get("v.value");

        // Check if the value is greater than or equal to 50
        if(value>=50){
            // If the value is greater than or equal to 50, set the "flag" attribute to true
            component.set("v.flag",true);
             // Also set the "flagHeader" attribute to true
            component.set("v.flagHeader",true);
        }
        else{
            // If the value is less than 50, set the "flag" attribute to false
            component.set("v.flag",false);
            // Also set the "flagHeader" attribute to true

            component.set("v.flagHeader",true);
        }
    }
})
