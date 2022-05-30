import React from 'react';
import './styles/reset.css';
import './styles/base.sass';
import Home from './components/Home';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
