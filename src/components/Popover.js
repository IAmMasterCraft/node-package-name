import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const MyPopover = (props) => {
    const {targetId, popoverOpen, toggleFunction, popTitle, popContent} = props;
    return (
        <div>
            <Popover style={glassMorphicCard} placement="bottom-end" trigger="focus" isOpen={popoverOpen} target={targetId} toggle={toggleFunction} >
                <PopoverHeader dangerouslySetInnerHTML={{__html: popTitle}}></PopoverHeader>
                <PopoverBody dangerouslySetInnerHTML={{__html: popContent}}></PopoverBody>
            </Popover>
        </div>
    );
}

const glassMorphicCard = {
    background: "rgba( 255, 255, 255, 0.00 )",
    /*boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",*/
    boxShadow: "-4px 2px 7px #5a5a5a, -4px 2px 7px #ffffff",
    backdropFilter: "blur( 20.0px )",
    WebkitBackdropFilter: "blur( 20.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.01 )",
};

export default MyPopover;