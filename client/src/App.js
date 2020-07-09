import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home';
import More from './components/More/More';

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/more' component={More} />
    </Router>
  );
}

export default App;
