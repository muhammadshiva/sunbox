import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './components/Layouts';
import { HomePage } from './modules/LoggedIn';

function App() {
  return (
    <BrowserRouter>
    <Layouts>
      <Routes>
          <Route path="/" element={<HomePage />} />
      </Routes>
    </Layouts>
    </BrowserRouter>
  );
}

export default App;
