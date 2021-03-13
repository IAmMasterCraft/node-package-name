import { useState } from "react";
import MyModal from "./Modal";

const Header = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return ( 
        <header>
            <div className="row text-white mb-2">
                <div className="col-10 mt-3">
                    <h4> Node Package Name </h4>
                </div>
                <div className="col-2" >
                    <h4>
                        <i className="fa fa-info text-info btn pulse" style={iconStyle} onClick={toggle}></i>
                    </h4>
                </div>
            </div>
            <MyModal 
                modal={modal} 
                toggleFunction={toggle} 
                fullscreen={true} 
                title={`<h3>About the app</h3>`} 
                content={
                    `<p>
                        <b>'Node Package Name'</b> is a simple tool that helps to check if a package name is available for use on npm registry.<br />
                        All you have to do is enter proposed package name!
                    </p>`
                } />
        </header>
    );
}

const iconStyle = {
    padding: "10px 17px",
    borderRadius: "50%",
    boxShadow: "3px -2px 20px #5a5a5a, -3px 2px 30px #ffffff"
};

export default Header;