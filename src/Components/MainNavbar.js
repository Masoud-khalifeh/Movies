import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Styles/MainNavbar.css';

export default function MainNavbar() {
  return (
    <div className='navbarSection' data-bs-theme="dark">
      <Navbar expand={"md"} className="bg-body-tertiary mb-6" style={{width:"95%"}}>
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Nav className="justify-content-end flex-grow-2 pe-5">
                <Nav.Link href="#action2">Pro</Nav.Link>
                <Nav.Link href="#action1">Menu</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action2">Sign In</Nav.Link>
                <Nav.Link href="#action2">Watchlist</Nav.Link>
                <NavDropdown
                  title="En"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action5">English </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">Deutsch</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">French</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Persian</NavDropdown.Item>
                </NavDropdown>
              </Nav>


            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>

  );
}

