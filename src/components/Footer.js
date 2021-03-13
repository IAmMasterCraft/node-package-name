const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-lg-12 text-center text-white mt-4 pt-4">
                    <span className="mb-3">&copy; &nbsp; {new Date().getFullYear()}</span><br/>
                    @IAmMasterCraft <br/>
                    <a href="https://github.com/IAmMasterCraft" target="_blank" rel="noreferrer">
                        <i className="fa fa-github text-info fa-2x btn pulse mr-2 mt-3" style={iconStyle}></i> 
                    </a>
                    <a href="https://twitter.com/BOmoakin" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter text-info fa-2x btn pulse ml-2 mt-3" style={iconStyle}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

const iconStyle = {
    boxShadow: "3px -2px 7px #5a5a5a, -3px 2px 7px #ffffff"
};

export default Footer;