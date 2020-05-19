import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

    const navStyle = {
        backgroundColor: '#00728d'
      }

    return (
<div style={{width: '100%'}}>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="./images/guardian_logo.svg" alt="Guardian" width="160px" style={{paddingBottom: 10}}/>
        <span style={{fontSize: 25, fontWeight: 'bold', paddingLeft: 15, paddingTop: 15}}>work-assist</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fas fa-bars text-hudson-navy"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

  <nav className="sub-nav-lg bg-hugo-blue-shade" style={navStyle} >
    <div className="nav container-fluid align-items-center" id="nav-tab" style={{height: '3.75rem'}} role="tablist">
      <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
        aria-controls="nav-hero" aria-selected="true" style={{fontWeight: '700', color: '#fff'}} to="/home/">Project List</Link>
      <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
        aria-controls="nav-hero" aria-selected="true" style={{fontWeight: '700', color: '#fff'}} to="/skills/">Skills</Link>
        <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
          aria-controls="nav-hero" aria-selected="true" style={{fontWeight: '700', color: '#fff'}} to="/employees/">Employees</Link>
          <Link className="nav-item nav-link active" id="nav-hero-tab" data-toggle="tab" href="#nav-hero" role="tab"
          aria-controls="nav-hero" aria-selected="true" style={{fontWeight: '700', color: '#fff'}} to="/training/">Training</Link>
    </div>
  </nav>
</div>
    );
}

export default NavBar;