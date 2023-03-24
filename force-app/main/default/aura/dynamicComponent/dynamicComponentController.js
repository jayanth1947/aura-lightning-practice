({
    doInit : function(component, event, helper) {
        // Create a new Lightning button component with the specified attributes
        $A.createComponent(
            "lightning:button",
            {
                "aura:id" : "findAuraId",
                "label" : "Click Me",
                "onclick" : component.getReference("c.handleClick")
            },
            function(newButton,status,errorMessage){
                // If the button is created successfully, add it to the component's body
                if(status==="SUCCESS"){
                    var body=component.get("v.body");
                    body.push(newButton);
                    component.set("v.body",body);
                }
                // If the request is incomplete, log a message
                else if(status==="INCOMPLETE"){
                    console.log("No response");
                }
                // If there is an error, log the error message
                else if(status==="ERROR"){
                    console.log("Error"+errorMessage);
                }
            }
        );
    },
    // Button click handler function
    handleClick:function(component,event,helper){
        // Update the component's message attribute
        component.set("v.message","Button is clicked");
    }
})
