import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar} from "react-bootstrap";

function Footer() {
    return (
        <div className="footer">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        {" "}
                        <img
                            src="https://cdn-icons-png.flaticon.com/32/770/770655.png"
                            alt="login"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto mt-2">
                        <Nav.Link href="#home"><h6>2022 ALL RIGHTS RESERVED</h6></Nav.Link>
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

export default Footer;
