import Input from "../components/Input";
import CityChart from "../components/CityChart";
import PageNotFound from "../components/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Input} />
        <Route path="/city/:cityId" component={CityChart} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
