import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from './Components/Header/header';
import Details from './Components/ProductsDetails/ProdDetails';
import Items from './Components/Products/Products';

function App() {
  return (
    <>
      <Headers/>
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route path="/" exact component={Items}/>
            <Route path="/details/:id" component={Details}/>
          </Switch>
        </Router>

      </div>
    </>
  );
}

export default App;
