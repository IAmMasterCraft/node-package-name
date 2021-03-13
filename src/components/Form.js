// import MyButton from "./Button";
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import MyModal from "./Modal";
import MyPopover from "./Popover";

const name = require("../data/Name");
const randomName = require("../data/RandomName");

const Form = () => {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("Error!");
    const [content, setContent] = useState("Please fill the form and enter proposed node package name");
    const [suggestion, setSuggestion] = useState(false);
    const [visibility, setVisibility] = useState("none");
    const toggle = () => setModal(!modal);

    //popOver config
    const [popoverOpen, setPopoverOpen] = useState(false);
    
    const togglePopOver = () => setPopoverOpen(!popoverOpen);

    const alwaysFalse = () => setPopoverOpen(false);

    const submittingForm = async() => {
        //check if form is filled
        const packageNameInput = document.getElementById("npm-name");
        if (packageNameInput.value) {
            alwaysFalse();
            //show loading
            setVisibility("");
            //get name info
            const packageNameInfo = await name.checkName(packageNameInput.value.replace(/ /g, "-"));
            setTitle(`<h3>${packageNameInput.value.replace(/ /g, "-").toUpperCase()}</h3>`);
            setContent(
                `<b className=${packageNameInfo.success ? "text-success" : "text-danger"}>
                    ${packageNameInfo.message}
                </b>`
            );
            const allSuggestions = getSuggestions(packageNameInput.value.replace(/ /g, "-")).sort((a, b) => b.length - a.length);
            setSuggestion(
                !(packageNameInfo.success) ? 
                    `Need inspiration? Check these out:<br />>>&nbsp;${allSuggestions.join("<br />>>&nbsp;")}` : 
                    `>>&nbsp;As a problem-solver...<br />
                    >>&nbsp;You are not part of the problem...<br />
                    >>&nbsp;You are the solution...<br />
                    >>&nbsp;Make it happen...<br />
                    >>&nbsp;DEPLOY THAT PACKAGE NOW!!!
                    `
            );
            //update input with longest recommendation
            packageNameInput.value = !(packageNameInfo.success) ? allSuggestions[0] : packageNameInput.value;
            toggle();
            setVisibility("none");
        } else {
            //toggle popover
            // togglePopOver();
            setPopoverOpen(true);
            setTimeout(togglePopOver, 500);
        }
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={submitHandler} style={{ display: (visibility === "none") ? "" : "none" }}>
                    <div className="form-group">
                        {/* <label for="npm-name">Node Package Name:</label> */}
                        <input type="text" className="form-control" id="npm-name" placeholder="Enter node package name" required />
                        <span className="pull-right text-right" id="npm-pop" />
                    </div>
                    <Button id="submit-button" color="secondary" style={buttonStyle} onClick={submittingForm}> Check Availability </Button>
                    <MyPopover targetId="npm-pop" popoverOpen={popoverOpen} toggleFunction={togglePopOver} popTitle="<span class='text-danger'>Error &nbsp; <i class='fa fa-exclamation-triangle'></i></span" popContent="<span class='text-danger'>Empty package name</span>" />
                </form>
                <h2 className="text-center my-4 py-2">
                    <i 
                        className="fa fa-spinner fa-spin fa-4x text-white text-center" 
                        style={
                            {
                                display: visibility,
                            }
                        }>
                    </i>
                </h2>
                <MyModal modal={modal} toggleFunction={toggle} title={title} content={content} suggestion={suggestion} />
            </div>
        </div>
    );
}

const submitHandler = async(event) => {
    event.preventDefault();
}

const getSuggestions = (name) => {
    const suggestions = [];
    for (let i = 0; i < 3; i++) {
        suggestions.push(randomName.generateName(name));
    }
    return suggestions;
}

const buttonStyle = {
    /*
    background: "#7ece73",
    borderRadius: "15%",
    boxShadow: "inset 9.91px 9.91px 15px #73BB69, inset -9.91px -9.91px 15px #89E17D",
    
    background: "rgba( 0, 255, 118, 0.55 )",
    */
    padding: "10px",
    color: "white",
    width: "100%",
    boxShadow: "inset 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ), inset 3px 3px 7px #bebebe, inset -3px -3px 7px #ffffff",
    backdropFilter: "blur( 4px )",
    WebkitBackdropFilter: "blur( 20.0px )",
    borderRadius: "5px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    fontFamily: "inherit",
};

export default Form;