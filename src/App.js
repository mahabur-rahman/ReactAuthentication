// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// custom scss
import "./global.scss";
// react router
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cards from "./pages/Cards";
import { Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./useAuth";

const App = () => {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/accounts" className="mx-3">
            Account (protected)
          </Link>
          <Link to="/cards">Card (Un protected)</Link>
        </li>
      </ul>
      {isAuth ? (
        <>
          <div className="ui message brown">You are logged in..</div>
          <button className="ui button blue" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="ui message violet">You are logged out..</div>
          <button className="ui button blue" onClick={login}>
            Login
          </button>
        </>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cards" component={Cards} />
        <ProtectedRoute
          exact
          path="/accounts"
          component={Account}
          auth={isAuth}
        />
      </Switch>
    </>
  );
};

export default App;
