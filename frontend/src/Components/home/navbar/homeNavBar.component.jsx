import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";
import "./homeNavBar.styles.css";

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
            <b1>MINK</b1>
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link href="/manager">
            <b>Manager</b>
          </Nav.Link>
          <div class="vr"></div>
          <Nav.Link href="/customers">
            <b>Customer</b>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
