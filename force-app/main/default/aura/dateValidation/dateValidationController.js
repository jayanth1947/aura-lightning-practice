({
    dateUpdate : function(component, event, helper) {
       // Creating a new date object
       var today=new Date();
       // Getting the day, month and year from the date object
       var dd=today.getDate();
       var mm=today.getMonth()+1;
       var yyyy=today.getFullYear();

       // If the day is less than 10, prepend a '0' to it
       if(dd<10){
        dd='0'+dd;
       }
       // If the month is less than 10, prepend a '0' to it
       if(mm<10){
        mm='0'+mm;
       }

       // Formatting the date string in yyyy-mm-dd format
       var formattedDate=yyyy+ '-' +mm + '-' +dd;
       // Checking if the entered date is not empty and is less than the current date
       if(component.get("v.testDate")!='' && component.get("v.testDate")<formattedDate){
        // If the date is invalid, set the dataValidationError attribute to true
        component.set("v.dataValidationError",true);
       }
       else{
        // If the date is valid, set the dataValidationError attribute to false
        component.set("v.dataValidationError",false);
       }
    },

    handleSubmit:function(component,event,helper){
        // Checking if the entered date is valid
        var isDateError=component.get("v.dataValidationError");
        if(isDateError !=true){
            // If the date is valid, display an alert message
            alert('Entered date is valid');
        }
    }
})
