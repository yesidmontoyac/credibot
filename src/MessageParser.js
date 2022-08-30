// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage=message.toLowerCase();
        
        
        if(lowerCaseMessage.includes('yesid montoya') || 
        lowerCaseMessage.includes('mario jojoa') ||
        lowerCaseMessage.includes('yussed dinero')){
            this.actionProvider.greet();
        }

        //fun
        if(lowerCaseMessage.includes('Yesid Montoya')) {
            this.actionProvider.greet1();
        }
        if(lowerCaseMessage.includes('ekkich') ||
            lowerCaseMessage.includes('Ekkich')) {
                this.actionProvider.greet2();
        }
        if(lowerCaseMessage.includes('#kiki')) {
            this.actionProvider.greet3();
        }
        if(lowerCaseMessage.includes('1047489251') || lowerCaseMessage.includes('1234567890')) {
            this.actionProvider.handleDefault();
        }

        //goodbye
        if(lowerCaseMessage.includes('chao') || 
            lowerCaseMessage.includes('goodbye') ||
            lowerCaseMessage.includes('peace')) {
            
                this.actionProvider.farewell();
                
        }
    }
  }
  
  export default MessageParser;