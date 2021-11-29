import React from 'react';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Person from './pages/Person';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Sidebar/> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/faq">
            <FAQ/>
          </Route>
          <Route path="/person">
            <Person/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
