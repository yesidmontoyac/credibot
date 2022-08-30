import React from "react";

import "./OutcomesOptions.css";

//options component that will guide the user to possible options.

const OutcomesOptions = (props) => {
    const options = [
        {
            text : "500.000 - 1.500.000", 
            handler:()=>props.actionProvider.handleYTList("500.000 - 1.500.000"),
            id:1,
        },
        {
            text : "1.500.000 - 4.500.000",
            handler:()=>props.actionProvider.handleYTList("1.500.000 - 4.500.000"),
            id:2,
        },
        {
            text : "4.500.000 - 7.500.000", 
            handler:()=>props.actionProvider.handleYTList("4.500.000 - 7.500.000"),
            id:3,
        },
        {
            text : "7.500.000 - 10.500.000",
            handler:()=>props.actionProvider.handleYTList("7.500.000 - 10.500.000"),
            id:4,
        },
        {
            text : "10.500.000 - 15.500.000", 
            handler:()=>props.actionProvider.handleYTList("10.500.000 - 15.500.000"),
            id:5,
        },
        {
            text : "Mayor a 15.500.000", 
            handler:()=>props.actionProvider.handleYTList("Mayor a 15.500.000"),
            id:6,
        },
    ];


    const optionsMarkup = options.map((option) => (
        <button 
        className="outcomes-option-button"
        key={option.id}
        onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="outcomes-options-container">{optionsMarkup}</div>
};



export default OutcomesOptions;