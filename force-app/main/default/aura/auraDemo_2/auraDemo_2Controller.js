({
    // Here the values of the two messages are constant , when the button is clicked the values will be changed
    doInit:function(component,event,helper){
        //component.set("v.message1","Button is Constant")
        // component.set("v.message2","Button is Constant")
    },
    handleClick : function(component, event, helper) {
        var btn=event.getSource()
        var msg=btn.get("v.label") //This will get the value of the label of the button
        // component.set("v.message1","Button Clicked")

        // when the button1 clicked it will show label1 and if button2 clicked the second label will be shown
        if(msg=="Click Here"){
            component.set("v.message1",msg)
        }
        else{
            component.set("v.message1",msg)
        }
        
        //we can also write the above  component in different way
        //component.set("v.message1",event.getSource().get("v.label"))
    },

    handleClickbutton : function(component, event, helper) {
        component.set("v.message2","Button Clicked Again")
    }
})
