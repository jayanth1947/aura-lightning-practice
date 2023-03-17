public class demoAuraWrapper {
    //used in the aura Component
    public class wrapperTest {
        @AuraEnabled
        public String myString{get;set;}
        @AuraEnabled
        public Integer myInteger{get;set;}
        
    }
}