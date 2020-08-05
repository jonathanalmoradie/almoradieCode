import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';


function App() {

  const renderHome = () => {
    return(
      <Home />
    )
  }

  return (
    <div className="App">
      <Router>
        <div>
          <NavbarComponent />
        </div>
        <Route exact path='/home' render={renderHome}/>
      </Router>
    </div>
  );
}

export default App;
