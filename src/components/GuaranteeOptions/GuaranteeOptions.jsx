import React from "react";

import "./GuaranteeOptions.css";

//options component that will guide the user to possible options.

const GuaranteeOptions = (props) => {
    const options = [
        {
            text : "Hipoteca", 
            handler:()=>  props.actionProvider.handleTalkList("Hipoteca"),
            id:1,
        },
        {
            text : "Pignoración de ingresos",
            handler:()=> props.actionProvider.handleTalkList("Pignoración de ingresos"),
            id:2,
        },
        {
            text : "Ninguna", 
            handler:()=> props.actionProvider.handleTalkList("Ninguna"),
            id:3,
        },
    ];


    const optionsMarkup = options.map((option) => (
        <button 
        className="guarantee-option-button"
        key={option.id}
        onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="guarantee-options-container">{optionsMarkup}</div>
};



export default GuaranteeOptions;