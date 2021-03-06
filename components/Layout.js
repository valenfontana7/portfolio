import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/router";
import nprogress from "nprogress";
import classnames from "classnames";
const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      nprogress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nprogress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <div
      className={classnames({
        "bg-secondary": dark,
        "bg-light": !dark,
      })}
    >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link href="/">
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
            <Nav.Link href="/github">
              <img className="github-logo" src="/github.svg" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className="container py-4">
        {title && (
          <h1 className={classnames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Valentin Fontana's portfolio</h1>
            <br />
            <p>2020 - {new Date().getFullYear()}</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
