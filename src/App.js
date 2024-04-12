// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
// import About from './About';
// import Services from './Services';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/services" component={Services} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
