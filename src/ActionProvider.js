import config from "./config";

// ActionProvider starter code
const data= []
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      
    }
  

    //default
    handleDefault = () => {
        const message = this.createChatBotMessage(
          "¿Cuál es el monto que desea prestar?",
         {
            withAvatar: true,
            widget: "sherbotOptions",
          }
        );
        this.updateChatbotState(message);
      };


    //function to render message and widgets when gaming sherbot option is clicked
    handleGamingList=(option)=>{
        const message1=this.createChatBotMessage(
            "¿Cuáles son sus ingresos mensuales?",
            {
                widget:"incomesOptions",
                withAvator:true,
            }
        );
        data[0] = option 
        this.updateChatbotState(message1);
    };


    //function to render message and widgets when webdev sherbot option is clicked
    handleWebList=(option)=>{
        const message1 = this.createChatBotMessage(
            "¿Cuáles son sus egresos mensuales?",
            {
                widget:"outcomesOptions",
                withAvator:true,
            }
        );
        data[1] = option
        this.updateChatbotState(message1);
    };

    //function to render message and widgets when YT LINKS sherbot option is clicked
    handleYTList=(option)=>{
        const message1 = this.createChatBotMessage(
            "¿Cuál será su garantía para el préstamo?",
            {
                widget:"guaranteeOptions",
                withAvator:true,
            }
        );
        data[2] = option
        this.updateChatbotState(message1);
    };

    //function to render message and widgets when talkLINKS sherbot option is clicked
    handleTalkList=(option)=>{
        data[3] = option
        fetch("http://127.0.0.1:5000/credit",{method:"post",body:JSON.stringify({data})})
        .then(res=> res.json).then(res=>{
            const message1 = this.createChatBotMessage(
                res,
            );
    
            this.updateChatbotState(message1);
        }).catch(()=> {
            const message1 = this.createChatBotMessage(
                "En este momento no se puede procesar su solicitud",
            );
    
            this.updateChatbotState(message1);
        })
        
    };

    //question1
    handleTalkList1=()=>{
        const message1 = this.createChatBotMessage(
            "Aqui veo que su prestamo no es posible, puedes sacar una cita en la sede mas cercana siguiente link: https://www.google.com/maps ",
        );

        this.updateChatbotState(message1);
    };

    //question2
    handleTalkList2=()=>{
        const message1 = this.createChatBotMessage(
            "WBF (World Botlife Fund) announced that there are very few metalhead sherbots left, including me.I know ,I know I have such an awesome taste.🔥🔥",
            {
                
                withAvator:true,
            }
        );

        this.updateChatbotState(message1);
    };

    //question3
    handleTalkList3=()=>{
        const message1 = this.createChatBotMessage(
            "The taste of shawarma and coke eaten together.......🙌🙌🙌",
            {
                
                withAvator:true,
            }
        );

        this.updateChatbotState(message1);
    };  
    
    //question4
    handleTalkList4=()=>{
        const message1 = this.createChatBotMessage(
            "*yawns* in dreamland 🥱🥱",
            {
                
                withAvator:true,
            }
        );

        this.updateChatbotState(message1);
    };


    //function to render message and widgets when music sherbot option is clicked
    handleMusicList=()=>{
        const message1 = this.createChatBotMessage(
            "Bots can love sufi genre too or a li'l bit metal or a li'l bit Pop.You never know.",
            {
                widget:"musicLinks",
                withAvator:true,
            }
        );
        this.updateChatbotState(message1);
    };

    //other messages
    greet(){
        const greetingMessage = this.createChatBotMessage("Por favor escriba su numero de cedula.");
        this.updateChatbotState(greetingMessage);
    }


    greet1(){
        const greetingMessage = this.createChatBotMessage("Da.");
        this.updateChatbotState(greetingMessage);
    }
    greet2(){
        const greetingMessage = this.createChatBotMessage("Aprobado");
        this.updateChatbotState(greetingMessage);
    }
    greet3(){
        const greetingMessage = this.createChatBotMessage("Do you love me?");
        this.updateChatbotState(greetingMessage);
    }
    //greet4(){
      //  const greetingMessage = this.createChatBotMessage("I'm sorry I didn't catch that.")
      // this.updateChatbotState(greetingMessage)
    //}

    //farewell
    farewell(){
        const greetingMessage = this.createChatBotMessage(
            "Espero que te encuentres bien, fue un placer ayudarte. 👋" ,
            {
                end:true,
            }
        );
        this.updateChatbotState(greetingMessage);
        
    }
    

    updateChatbotState(message){
       // NOTE: This function is set in the constructor, and is passed in 
       //from the top level Chatbot component. The setState function here     
       // actually manipulates the top level state of the Chatbot, so it's 
       //important that we make sure that we preserve the previous state.
       
       this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}
  
  export default ActionProvider;