import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import DownloadSpreadsheetPage from "./pages/DownloadSpreadsheetPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComp />
        <Routes>    
          <Route path='/' element={<DownloadSpreadsheetPage />} />         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
