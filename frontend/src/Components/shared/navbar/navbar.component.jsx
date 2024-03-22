import Container from "react-bootstrap/Container";
import "./navbar.styles.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";

function NavBar() {
  return (
    <Navbar>
      <Container className="navBar">
        <Nav>
          <Navbar.Brand>
            <img
              alt=""
              src="favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <b1>MINK</b1>
          </Navbar.Brand>
        </Nav>
        <Nav>
          <NavLink href="/home"><b>Home</b></NavLink>
          <div class="vr"></div>
          <Nav.Link href="/restaurants"><b>Restaurant</b></Nav.Link>
          <div class="vr"></div>
          <Nav.Link href="/customers"><b>Customer</b></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
