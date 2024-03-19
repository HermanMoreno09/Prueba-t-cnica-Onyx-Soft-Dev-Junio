
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowLibro from './component_crud/ShowLibro';
import EditLibro from './component_crud/EditLibro';
import CreateLibro from './component_crud/CreateLibro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowLibro/>} />
        <Route path="/edit/:id" element={<EditLibro/>} />
        <Route path="/create" element={<CreateLibro/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
