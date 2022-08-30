import React from "react";

import "./SherbotOptions.css";

//options component that will guide the user to possible options.

const SherbotOptions = (props) => {
    const options = [
        {
            text : "10.000.000 - 20.000.000", 
            handler: ()=>  props.actionProvider.handleGamingList("10.000.000 - 20.000.000"),
            id:1,
        },
        {
            text : "21.000.000 - 40.000.000",
            handler: ()=> props.actionProvider.handleGamingList("21.000.000 - 40.000.000"),
            id:2,
        },
        {
            text : "41.000.000 - 60.000.000", 
            handler: ()=> props.actionProvider.handleGamingList("41.000.000 - 60.000.000"),
            id:3,
        },
        {
            text : "61.000.000 - 80.000.000",
            handler: ()=> props.actionProvider.handleGamingList("61.000.000 - 80.000.000"),
            id:4,
        },
        {
            text : "81.000.000 - 100.000.000", 
            handler: ()=> props.actionProvider.handleGamingList("81.000.000 - 100.000.000"),
            id:5,
        },
        {
            text : "Mayor a 101.000.000", 
            handler: ()=> props.actionProvider.handleGamingList("Mayor a 101.000.000"),
            id:6,
        },
    ];


    const optionsMarkup = options.map((option) => (
        <button 
        className="sherbot-option-button"
        key={option.id}
        onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="sherbot-options-container">{optionsMarkup}</div>
};



export default SherbotOptions;