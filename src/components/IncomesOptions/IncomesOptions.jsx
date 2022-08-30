import React from "react";

import "./IncomesOptions.css";

//options component that will guide the user to possible options.

const IncomesOptions = (props) => {
    const options = [
        {
            text: "1.000.000 - 3.000.000", 
            handler:()=> props.actionProvider.handleWebList("1.000.000 - 3.000.000"),
            id:1,
        },
        {
            text: "3.000.000 - 6.000.000",
            handler:()=> props.actionProvider.handleWebList("3.000.000 - 6.000.000"),
            id:2,
        },
        {
            text: "6.000.000 - 9.000.000", 
            handler:()=> props.actionProvider.handleWebList("6.000.000 - 9.000.000"),
            id:3,
        },
        {
            text: "9.000.000 - 12.000.000",
            handler:()=> props.actionProvider.handleWebList("9.000.000 - 12.000.000"),
            id:4,
        },
        {
            text: "12.000.000 - 18.000.000", 
            handler:()=> props.actionProvider.handleWebList("12.000.000 - 18.000.000"),
            id:5,
        },
        {
            text: "Mayor a 18.000.000", 
            handler:()=> props.actionProvider.handleWebList("Mayor a 18.000.000"),
            id:6,
        },
    ];


    const optionsMarkup = options.map((option) => (
        <button 
        className="incomes-option-button"
        key={option.id}
        onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="incomes-options-container">{optionsMarkup}</div>
};



export default IncomesOptions;