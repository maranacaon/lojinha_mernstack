import { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import SideDrawer from "./components/SideDrawer.js/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product/:id" component={ProductPage}/>
            <Route exact path="/cart" component={CartPage}/>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
