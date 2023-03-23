({
    handleParentClick : function(component, event, helper) {
        component.set("v.parentAttr","Parent is clicked")

    },
    parentHandler : function(component, event, helper) {
        console.log("Parent is called");
    }
})
