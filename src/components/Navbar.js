import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  let historyHook = useHistory();
  let [activeButton, setActive] = useState("");
  let activeNavButton = historyHook.location.pathname.split("/")[1];
  const logged =
    sessionStorage.getItem("email") || sessionStorage.getItem("userId");
  //catch logout
  const logoutHandler = async function (event) {
    await window.api.logout();
    setActive("");
    historyHook.push(`/`);
  };
  const clickHandler = function (e) {
    if (!e.target.href) {
      e.target.href = "";
    }
    let locationSplitted = e.target.href.split("/");
    activeNavButton = locationSplitted[locationSplitted.length - 1];
    if (activeNavButton === undefined) {
      activeNavButton = "";
    }
    setActive(activeNavButton);
  };

  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container h-100">
        <Link className="navbar-brand" to="/" onClick={clickHandler}>
          <h1 className="tm-site-title mb-0">Meals</h1>
        </Link>
        <button
          className="navbar-toggler ml-auto mr-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars tm-nav-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto h-100">
            <li className="nav-item">
              <Link
                className={activeButton === "" ? "nav-link active" : "nav-link"}
                to="/"
                onClick={clickHandler}
              >
                <i className="fas fa-lemon"></i>
                Dashboard
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={
                  activeButton === "allmeals" ||
                  activeButton === "reports" ||
                  activeButton === "addMeal"
                    ? "nav-link dropdown-toggle active"
                    : "nav-link dropdown-toggle"
                }
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-apple-alt"></i>
                <span>
                  Meals <i className="fas fa-angle-down"></i>
                </span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {logged ? (
                  <Link
                    className="dropdown-item"
                    to="/addMeal"
                    onClick={clickHandler}
                  >
                    Add new meal
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  className="dropdown-item"
                  to="/reports"
                  onClick={clickHandler}
                >
                  Latest actions
                </Link>
                <Link
                  className="dropdown-item"
                  to="/allmeals"
                  onClick={clickHandler}
                >
                  All meals
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={
                  activeButton === "login" || activeButton === "register"
                    ? "nav-link dropdown-toggle active"
                    : "nav-link dropdown-toggle"
                }
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-user"></i>
                <span>
                  User <i className="fas fa-angle-down"></i>
                </span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {logged ? (
                  <Link
                    className="dropdown-item"
                    to="/addMeal"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                ) : (
                  <div>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      onClick={clickHandler}
                    >
                      Login
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/register"
                      onClick={clickHandler}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          {logged ? (
            <li className="nav-item">
              <Link className="nav-link d-block" to="/" onClick={logoutHandler}>
                {sessionStorage.getItem("email")}, <b>Logout</b>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
}
