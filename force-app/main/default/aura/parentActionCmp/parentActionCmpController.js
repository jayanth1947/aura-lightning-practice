({
    methodFromChild : function(component, event, helper) {

        // This line gets the child component by its aura:id, "msg".
        var childCmp=component.find("msg");

        // This line sets the value of the parent component's "valueFromChild" attribute to the value of the child component's "valueForParent" attribute.
        component.set("v.valueFromChild",childCmp.get("v.valueForParent"));
    }
})
