public with sharing class accountController {
    @AuraEnabled
    public static List<Account> getAccountRecords(){
        List<Account> accliist=new List<Account>();
        accliist=[SELECT Id,Name,Phone FROM Account LIMIT 10];
        return accliist;
    }
}