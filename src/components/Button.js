const MyButton = () => {
    return (
        <button className="btn pulse" style={buttonStyle} data-toggle="modal" data-target="#myModal"> Check Availability </button>
    );
}

const buttonStyle = {
    /*
    background: "#7ece73",
    borderRadius: "15%",
    boxShadow: "inset 9.91px 9.91px 15px #73BB69, inset -9.91px -9.91px 15px #89E17D",
    */
    background: "rgba( 0, 255, 118, 0.55 )",
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

export default MyButton;