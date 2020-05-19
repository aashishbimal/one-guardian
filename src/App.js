import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import Card from './components/Cards/Card';
import Skills from './components/Skills/Skills';
import Layout from './components/Layout/Layout';
import Employees from './components/Employees/employeesList';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <Route path="/" component={Layout} />
     <Route path="/home" component={Card} />
     <Route path="/skills" component={Skills} />
     <Route path="/employees" component={Employees} />
    </div>
    </Router>
  );
}

export default App;
