import { Navbar, Nav } from "react-bootstrap";
import { Search, BellFill, PersonFill } from "react-bootstrap-icons";

export const MyNav = () => (
  <Navbar expand={"lg"} className="navbar-dark">
    <a className="navbar-logo" href="a" alt="Netflix Homepage">
      <img src="assets/logo.png" alt="Neflix Logo " />
    </a>
    <Navbar.Toggle
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </Navbar.Toggle>

    <Navbar.Collapse className="justify-content-between">
      <Nav className="navbar-nav mr-auto">
        <Nav.Item>
          <Nav.Link className="font-weight-bold">
            Home <span className="sr-only"></span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="active">
          <Nav.Link className="font-weight-bold">TV Shows</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="font-weight-bold">Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="font-weight-bold">Recently Added</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="font-weight-bold">My List </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="d-flex">
        <Search className="icons"></Search>
        <div id="kids">KIDS</div>
        <BellFill className="icons"></BellFill>
        <PersonFill className="icons"></PersonFill>
      </div>
    </Navbar.Collapse>
  </Navbar>
);
