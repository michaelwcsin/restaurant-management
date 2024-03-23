import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/restaurants">Restaurant</Nav.Link>
          <Nav.Link href="/customers">Customer</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
