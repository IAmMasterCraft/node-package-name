import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="container">
            <div className="container-fluid" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}>
                <div className="jumbotron" style={glassMorphicCard}>
                    <Header />
                    <Form />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

const glassMorphicCard = {
    background: "rgba( 255, 255, 255, 0.00 )",
    /*boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",*/
    boxShadow: "5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff",
    backdropFilter: "blur( 20.0px )",
    WebkitBackdropFilter: "blur( 20.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.01 )",
};

export default Home;