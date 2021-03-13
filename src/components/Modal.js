import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props) => {
    //destructure from props
    const {modal, toggleFunction, fullscreen, title, content, suggestion} = props;

    return (
        <Modal isOpen={modal} toggle={toggleFunction} fullscreen={fullscreen}>
            <ModalHeader toggle={toggleFunction}>
                <span dangerouslySetInnerHTML={{__html: title}}></span>
            </ModalHeader>
            <ModalBody>
                <span dangerouslySetInnerHTML={{__html: content}}></span><br />
                <code dangerouslySetInnerHTML={{__html: suggestion}}></code>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" style={buttonStyle} onClick={toggleFunction}>Ok</Button>
            </ModalFooter>
        </Modal>
    );
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

export default MyModal;