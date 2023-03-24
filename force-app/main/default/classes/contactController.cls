public with sharing class contactController {
    // This method will return the contact records 
    @AuraEnabled
    public static List<Contact> getContactRecords(Id recordId){
        return [SELECT Id,FirstName,LastName,Email,Phone 
        FROM Contact WHERE AccountId=:recordId];
    }
}