({
    doInit : function(component, event, helper) {
        component.set("v.name","Jayanth");

        const data={'name':'Jayanth',
                    'email':'jaya@gmail.com',
                    'company':'CTS'};

        component.set('v.jsObject',data);

        //Used in setting of wrapper class
        component.set("v.userData",{
            'myString':'String Value',
            'myInteger':2018
        })
    }
})
