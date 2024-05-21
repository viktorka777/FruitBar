
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar/>
        {/* Основний контент сторінки */}
      </div>
    </div>
  );
}

export default App;


