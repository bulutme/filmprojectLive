import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicLayout from "./PublicLayout/PublicLayout";
import Content from "./Content/Content";
import Films from "./NavbarComponents/Films";
import FilmsDetay from "./NavbarComponents/FilmsDetay";
import People from "./NavbarComponents/People";
import PeopleDetay from "./NavbarComponents/PeopleDetay";
import RatingCard from "./Content/Sections/Cards/RatingCard";

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => <PublicLayout>{children}</PublicLayout>} />
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PublicRoute path="/" exact>
            <Content />
          </PublicRoute>
          <PublicRoute path="/people" exact>
            <People />
          </PublicRoute>
          <PublicRoute path="/people/:id" exact>
           <PeopleDetay/>
          </PublicRoute>
          <PublicRoute path="/films" exact>
            <Films />
          </PublicRoute>
          <PublicRoute path="/films/:id" exact>
            <FilmsDetay />
          </PublicRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
