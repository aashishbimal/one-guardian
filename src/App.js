import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Route path="/" component={NavBar} />
     <Route path="/home" component={Home} />
     <Route path="/skills" component={Skills} />
    </div>
    </Router>
  );
}

export default App;
