({
    // System Event Hsndler
    doInit : function(component, event, helper) {
      var action=component.get("c.getAccountRecords");
      action.setCallback(this,function(response){
        var state=response.getState();
        if(state==="SUCCESS"){
            component.set("v.accList",response.getReturnValue());
        }
      });
      $A.enqueueAction(action)  
    },

    // Browser event Handler

    handleChange: function(component, event, helper) {
         component.set("v.recordId",component.find("select").get("v.value"));
    }
})
