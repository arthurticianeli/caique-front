import useMediaQuery from "@/hooks/useMediaQuery";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import SearchForm from "./nav-search-form";
import NavbarLinks from "./navbar-links";

function MainNavigation() {
  const { isMobile, isDesktopLg, isDesktopXl } = useMediaQuery();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSearchVisibleDesktop, setIsSearchVisibleDesktop] = useState(false);
  const navbarCollapseRef = useRef<HTMLDivElement>(null);

  const handleNavItemClick = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };
  const toggleSearchVisibilityDesktop = () => {
    setIsSearchVisibleDesktop((prev) => !prev);
  };

  return (
    <header
      className={`main-navigation fixed-top bg-white ${isScrolled ? "scrolled" : ""}`}
    >
      <div className={`${isDesktopXl ? "container" : ""}`}>
        <nav className="navbar navbar-expand-lg mx-3">
          <div className={`d-flex ${isDesktopLg || isDesktopXl ? "" : "w-100"} justify-content-between`}>
            {/* Logo */}
            {!isSearchVisible || !isMobile ?
              <Link href="/" className="navbar-brand">
                <Logo isScrolled={isScrolled} />
              </Link> : <></>
            }

            {/* Botões de alternância para dispositivos móveis */}
            <div className="d-flex align-items-center">
              <div className={`search-input-container ${isSearchVisible ? "visible" : ""} ms-2`}>
                <SearchForm />
              </div>
              <button
                className="navbar-toggler border-0"
                type="button"
                onClick={toggleSearchVisibility}
                aria-label="Toggle search"
              >
                {isSearchVisible ? (
                  <i className="bi bi-x fs-5"></i>
                ) : (
                  <i className="bi bi-search fs-5"></i>
                )}
              </button>

              <button
                className="navbar-toggler border-0 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-list fs-4"></i>
              </button>
            </div>
          </div>

          {/* Menu de navegação */}
          <div className="collapse navbar-collapse" id="navbarContent" ref={navbarCollapseRef}>
            <ul className="navbar-nav w-100 justify-content-center">
              <NavbarLinks onNavItemClick={handleNavItemClick} />
            </ul>
            {isDesktopLg || isDesktopXl ?
              <div className="d-flex ms-auto">
                <div className={`search-input-container-desktop ${isSearchVisibleDesktop ? "visible" : ""} ms-2`}>
                  <SearchForm />
                </div>
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  onClick={toggleSearchVisibilityDesktop}
                  aria-label="Toggle search"
                >
                  {isSearchVisibleDesktop ? (
                    <i className="bi bi-x fs-5"></i>
                  ) : (
                    <i className="bi bi-search fs-5"></i>
                  )}
                </button>
              </div> : <></>
            }
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
