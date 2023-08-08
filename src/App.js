import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
// components
import ShowListing from "./ShowListing";
import Summary from "./Summary";
import BookShow from "./BookShow";


function App() {
  return (
    <>  
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<ShowListing />}></Route>
          <Route path='/summary/:id' element={<Summary />}></Route>
          <Route path='/book/:id' element={<BookShow />} ></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;