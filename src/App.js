import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Headers from './Components/Header/header';
import Details from './Components/ProductsDetails/ProdDetails';
import Items from './Components/Products/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <div className="container-fluid">
          <Switch>

            <Route exact path="/">
              <Items />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
