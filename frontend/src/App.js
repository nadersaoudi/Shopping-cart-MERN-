import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from './Components/Screen/HomeScreen/HomeScreen';
import ProductScreen from './Components/Screen/ProductScreen/ProductScreen';
import CartScreen from './Components/Screen/CartScreen/CartScreen';


//Layouts
import Navbar from './Components/Layouts/Navbar/Navbar';
import Backdrop from './Components/Layouts/Backdrop/Backdrop';
import SideDrawer from './Components/Layouts/SideDrawer/SideDrawer';

function App() {

    const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
    <Navbar click={() => setSideToggle(true)} />
    <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
    <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
    <main className="app">
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
