import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import Header from "./Header";
import Carousel from "./Carousel";
import {Container} from "react-bootstrap";
import Footer from "./Footer";
import Form from "./Form";

function App() {
    return (
        <div className="app">
            <Header/>
            <Carousel/>
            <Container className='w-50'>
                <div className="jumbotron jumbotron-fluid text-light my-5">
                    <div>
                        <h1 className="display-4 ">Welcome</h1>
                        <p className="lead">
                            Where do we work and where are our offices located.
                        </p>
                    </div>
                </div>
                <Cards/>
                <hr className="my-5 text-light "/>
                <div className="jumbotron jumbotron-fluid text-light my-3">
                    <div>
                        <h1 className="display-4 ">Contact Us</h1>
                        <p className="lead">
                            This is a modified jumbotron that occupies the entire horizontal
                            space of its parent.
                        </p>
                    </div>
                </div>
                <Form/>
                <hr className="my-5 text-light "/>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
