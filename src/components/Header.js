import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        {" "}
                        <img
                            className="ms-3"
                            src="https://cdn-icons-png.flaticon.com/32/770/770655.png"
                            alt="login"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Log In
                            <img
                                className="ms-3"
                                src="https://flaticons.net/icon.php?slug_category=application&slug_icon=user-login&icon_size=26&icon_color=FFFFFF&icon_flip=&icon_rotate=0"
                                alt="login"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
