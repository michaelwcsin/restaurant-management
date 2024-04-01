import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./userNavBar.styles.css";

function NavBar() {
  return (
    <Navbar>
      <Container className="navBar">
        <Nav>
          <Navbar.Brand className="navBarBrand">
            <img
              alt=""
              src="favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <b>MINK</b>
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link href="/home">
            <b>Home</b>
          </Nav.Link>
          <div class="vr"></div>
          <Nav.Link href="/cart">
          <i class="large calendar plus icon cart"></i>
          <span>0</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
