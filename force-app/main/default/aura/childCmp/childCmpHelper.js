({
    showMessageHelper : function(component,event,severity) {
         // Get the message parameter passed from the component
        var messages=event.getParam("arguments");
        var displayMessage='';
        // If there is a message, assign it to the displayMessage variable
        if(messages){
            displayMessage=messages.message;
        }
        // Get the message panel element from the component using its aura:id
        var messagePanel=component.find("messages");

        // Use $A.createComponents to create the UI message and output text components dynamically
        $A.createComponents([
            [
                "ui:message",{
                    "title" : severity.toUpperCase(),
                    'severity' : severity,
                    'closable' : 'true'
                }
            ],
            [
                "ui:outputText",{
                    'value' :displayMessage
                }
            ]
        ],
            // If the component creation is successful, get the message and output text components and set their values
            function(components,status,statusMessagesList){
                if(status==="SUCCESS"){
                    var uimessage=components[0];
                    var uioutput=components[1];
                    uimessage.set("v.body",uioutput);
                    // Set the message panel's body to the UI message component
                    messagePanel.set("v.body",uimessage);
                }
            }
        );
    },

    removeMessageHelper: function(component) {
        // Get the message panel element from the component using its aura:id
        var messagePanel=component.find("messages");
         // Set the message panel's body to an empty array, effectively removing any messages
        messagePanel.set("v.body",[]);
    }
})
