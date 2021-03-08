import Link from "next/link";
import { Navbar } from "react-bootstrap";

const NavBar = () => (
  // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //   <div className="container">
  //     <Link href="/">
  //       <a className="navbar-brand">Portfolio</a>
  //     </Link>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarNav"
  //       aria-controls="navbarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav ml-auto">
  //         <li className="nav-item">
  //           <Link href="/blog">
  //             <a className="nav-link">Blog</a>
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link href="/github">
  //             <a className="nav-link">Github</a>
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);
export default Navbar;
