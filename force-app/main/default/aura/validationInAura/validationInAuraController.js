({
    // Defines a function to be executed when an action is triggered
    doAction : function(component, event, helper) {
        // Retrieve the component with the "inputCmp" aura:id
        var inputCmp=component.find("inputCmp");
        // Get the current value of the input component
        var value=inputCmp.get("v.value");

        // Check if the value is not a number
        if(isNaN(value)){
            // If the value is not a number, set an error message on the input component
            inputCmp.set("v.errors",[{message:"Input Not a Number: "+ value}]);
        }
        else{
            // If the value is a number, clear any error messages on the input component
            inputCmp.set("v.errors",null);
        }
    }
})
