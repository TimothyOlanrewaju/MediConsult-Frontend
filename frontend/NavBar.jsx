import { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";
import { CartContext } from "../contexts/CartContextProvider";

const NavBar = () => {
  const { data } = useContext(CartContext);
  const { search, user } = useContext(SearchContext);
  const [searchQuery, setSearchQuery] = search;
  const [email, setEmail] = user;
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    // e.preventDefault()
    setSearchQuery(e.target.value);
    navigate("/search");
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setEmail(localStorage.getItem("email"));
    }
  });

  useEffect(() => {
    const checkAuth = () => {
      if (localStorage.getItem("access_token") !== null) {
        setIsAuth(true);
        //   setEmail(localStorage.getItem('email'))
      } else {
        setIsAuth(false);
        setEmail("");
      }
    };
    checkAuth();
  }, [isAuth]);

  const handleSignout = () => {
    localStorage.clear();
    setIsAuth(false); // Update state immediately
    setEmail(""); // Clear email state
    navigate("/");
  };

  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href=""
              >
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
          <div className="navbar-search col-lg-4 mx-auto">
            <input
              className="form-control border-0 w-100 py-1 mt-1 ps-4 pe-5"
              type="text"
              placeholder="🔍 Search Item by name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              {email ? (
                <>
                  <Link onClick={handleSignout}>
                    <small className="me-3 text-light">
                      <i
                        onClick={handleSignout}
                        className="fa fa-sign-in-alt me-2"
                      ></i>
                      Logout
                    </small>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="register">
                    <small className="me-3 text-light">
                      <i className="fa fa-user me-2"></i>Register
                    </small>
                  </Link>
                  <Link to="login">
                    <small className="me-3 text-light">
                      <i className="fa fa-sign-in-alt me-2"></i>Login
                    </small>
                  </Link>
                </>
              )}

              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-light"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <i className="fas fa-user-alt me-2"></i> {email}
                  </small>
                </a>
                <div className="dropdown-menu rounded">
                  <Link to="/auth/profile" className="dropdown-item">
                    <i className="fas fa-user-alt me-2"></i> My Profile
                  </Link>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-comment-alt me-2"></i> Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-bell me-2"></i> Notifications
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-cog me-2"></i> Account Settings
                  </a>
                  <Link onClick={handleSignout} className="dropdown-item">
                    <i className="fas fa-power-off me-2"></i> Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar & Hero Start --> */}
      <div className="container-fluid position-relative p-0">
        <nav
          style={{ backgroundColor: "grey" }}
          className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
        >
          <a href="" className="navbar-brand p-0">
            <h1 className="m-0">
              {/* <i className="fa fa-map-marker-alt me-3"></i> */}
              mediConsult
            </h1>
            {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
          </a>
          <div className="user-dropdown">
            <a
              href="#"
              className="dropdown-toggle text-light"
              data-bs-toggle="dropdown"
            >
              <small>
                <i className="fas fa-user-alt me-2"></i> {email}
              </small>
            </a>
            <div className="dropdown-menu rounded">
              <Link to="/auth/profile" className="dropdown-item">
                <i className="fas fa-user-alt me-2"></i> My Profile
              </Link>
              <a href="#" className="dropdown-item">
                <i className="fas fa-comment-alt me-2"></i> Inbox
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-bell me-2"></i> Notifications
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-cog me-2"></i> Account Settings
              </a>
              <Link onClick={handleSignout} className="dropdown-item">
                <i className="fas fa-power-off me-2"></i> Logout
              </Link>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/services" className="nav-item nav-link">
                Services
              </NavLink>
              <NavLink to="/store" className="nav-item nav-link">
                Stores
              </NavLink>
              {/* <Link to="/" className="nav-item nav-link">Packages</Link> */}
              {/* <Link to="/" className="nav-item nav-link">Blog</Link> */}
              <div className="nav-item dropdown">
                <a
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Orders
                </a>
                <div className="dropdown-menu m-0">
                  <Link to="/orders/place_order" className="dropdown-item">
                    Place Order
                  </Link>
                  <Link to="/" className="dropdown-item">
                    Orders List
                  </Link>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
              <NavLink to="/orders/cart" className="nav-item nav-link">
                <i className="bi bi-cart">{data.length}Cart</i>
              </NavLink>
            </div>
            <Link
              to="/bookConsultation"
              className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
        <div className="bottomBar">
          <input
            className="form-control border-0 rounded-pill w-100 py-1 ps-4 pe-5"
            type="text"
            placeholder="🔍 Search for items"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
