({
    handleChildClick : function(component, event, helper) {
        component.set("v.childAttr","Button clicked")
    },

    handleChildChange: function(component,event,helper){
        console.log("Child is changed")
    }
})
