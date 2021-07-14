import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { loginContext } from "../components/context/loginContext"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import MyPlaylist from "../components/MyPlaylist/MyPlaylist"
export const router = (
  <Router>
    <loginContext.Consumer>
      {({ login, changeLogin }) => {
        if (login === false) {
          return (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    My Music
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/home"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
              </Switch>
            </>
          )
        } else {
          return (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    My Music
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/home"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="/playlist">
                          MyPlaylist
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          onClick={() => {
                            changeLogin()
                          }}
                          to="/"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/playlist" component={MyPlaylist} />
              </Switch>
            </>
          )
        }
      }}
    </loginContext.Consumer>
  </Router>
)
