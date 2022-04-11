import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/common/Detail';

function App() {
  return (
    <section className="container-md">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:category/:id" element={<Detail />} />
      </Routes>
    </section>
  );
}

export default App;
