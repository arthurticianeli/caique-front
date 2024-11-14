import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import Logo from "./logo";

function MainNavigation() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-3">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
        <div
          className="container-fluid container  "
          style={{ position: "relative" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mt-2 mt-lg-0 me-2 me-lg-4">
                <Link href="/" className="nav-link">
                  <div style={{ color: "white" }}>Principal</div>
                </Link>
              </li>
              <li className="nav-item me-2 me-lg-4">
                <Link href="/posts" className="nav-link">
                  <div style={{ color: "white" }}>Categoria A</div>
                </Link>
              </li>
              <li className="nav-item me-2 me-lg-4">
                <Link href="/posts" className="nav-link">
                  <div style={{ color: "white" }}>Categoria B</div>
                </Link>
              </li>
              <li className="nav-item me-2 me-lg-4">
                <Link href="/posts" className="nav-link">
                  <div style={{ color: "white" }}>Categoria C</div>
                </Link>
              </li>
              <li className="nav-item me-2 me-lg-4">
                <Link href="/posts" className="nav-link">
                  <div style={{ color: "white" }}>Categoria D</div>
                </Link>
              </li>
              <li className="nav-item me-2 me-lg-4">
                <Link href="/contact" className="nav-link">
                  <div style={{ color: "white" }}>Contact</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="position-absolute" style={{ top: 0, right: 0 }}>
            <form className="ms-auto">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                />
                <button className="btn btn-outline-secondary" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
