({
    throwError : function(component, event, helper) {
        // Initialize a variable called "hasPerm" to false
        var hasPerm=false;

        // Use a try-catch block to throw an error if "hasPerm" is false
        try{
            if(!hasPerm){
                throw new Error("You don't have any permissions");
            }
        }
        catch(e){
             // If an error is thrown, create two UI components to display the error message
            $A.createComponents([
                ["ui:message",{
                    "title" : "Sample Throw Error",
                    "severity" : "error"
                }],
                [
                    "ui:outputText",{
                        "value":e.message
                    }]
            ],
            function(components,status,errorMessage){
                // If the components were created successfully, set the message and outputText components and add them to the DOM
                if(status==="SUCCESS"){

                    // Get the first component that was created and store it in a variable called "message"
                    var message=components[0];

                    // Get the second component that was created and store it in a variable called "outputText"
                    var outputText=components[1];

                    // Set the "v.body" attribute of the message component to the outputText component
                    message.set("v.body",outputText);

                    // Find the "div1" component on the page and set its "v.body" attribute to the message component
                    var div1=component.find("div1");
                    div1.set("v.body",message);
                    }

                    // If the response was incomplete, log an error message
                    else if(status==="INCOMPLETE"){
                        console.log("no response from the server");
                    }

                    // If an error occurred, log the error message
                    else if(status==="ERROR"){
                        console.log("Error"+errorMessage);
                    }
            }
            );
        }
    }
})
