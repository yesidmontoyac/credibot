import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import SherbotOptions from "./components/SherbotOptions/SherbotOptions";
import IncomesOptions from "./components/IncomesOptions/IncomesOptions";
import OutcomesOptions from "./components/OutcomesOptions/OutcomesOptions";
import GuaranteeOptions from "./components/GuaranteeOptions/GuaranteeOptions";
import LinkList from "./components/LinkList/LinkList";
import BotAvatar from "./components/BotAvatar";
import TalkLinks from "./components/TalkLinks/TalkLinks";

const config = {
    botName: "CrediBot",
    initialMessages: [
        createChatBotMessage("Hola, Yo soy CrediBot "),
        createChatBotMessage("Mi trabajo es evaluar la viabilidad de credito."),
        
        createChatBotMessage("Para continuar con el proceso por favor escriba su nombre completo."/*, {
            widget: "sherbotOptions",
        }*/),
      ],             
    //initialMessages property from the config is put into
    //the chatbot's internal state in a property called "messages"
    
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
      },  

    customStyles : {
        botMessageBox : {
            backgroundColor: '#000000',
        },
        chatButton :{
            backgroundColor : '#000000',
        },
    },

    widgets: [
        {
            widgetName: "sherbotOptions",
           widgetFunc: (props) => <SherbotOptions {...props} />,
        },

        {
            widgetName:"incomesOptions",
            widgetFunc:(props)=><IncomesOptions {...props} />,
        },

        {
            widgetName:"outcomesOptions",
            widgetFunc:(props)=><OutcomesOptions {...props} />,
        },

        {
            widgetName:"guaranteeOptions",
            widgetFunc:(props)=><GuaranteeOptions {...props} />,
        },

        {
            widgetName:"talkLinks",
            widgetFunc:(props)=><TalkLinks {...props} />,
            
        },

        {
            widgetName:"musicLinks",
            widgetFunc:(props)=><LinkList {...props} />,
            props: {
                options:[
                    {
                        text:"Nina Burmi Classical ",
                        url:"https://youtu.be/kfBvz2rG-NI",
                        id:1,
                },
                    {
                        text:"Yosi Horikawa",
                        url:"https://www.youtube.com/watch?v=_iEkGCoB_UE&list=PL-iw--mMCQ3JrQI5HlOGJD3XLndLMTo7S",
                        id:2,
                    },
                    {
                        text:"Muse Simulation Theory",
                        url:"https://www.youtube.com/watch?v=wJcVLxRtDms&list=PLdkbG6kCdZ8P7fnHPG3gnsWgh9u-qKsjQ",
                        id:3,
                    },
                    {
                        text:"Enigma Platinum Collection",
                        url:"https://www.youtube.com/watch?v=Jdn1j86xDdY&list=PL2sPxDN9Hp0oK0EahHN-JBUm0Fr3FfGE1",
                        id:4,
                    },
                    {
                        text:"Coke Studio Quarantine Playlist",
                        url:"https://www.youtube.com/watch?v=kw4tT7SCmaY&list=PLlYsrzDvIU9QhMdfnJCrPS9XGtxJV0yIu",
                        id:5,
                    },
                ],
            },
        },
        
    ],
}

export default config;