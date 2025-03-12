import React from 'react';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import { Slider } from './components/Slider';
import Searchbar from './components/Searchbar';

function App() {
  

  return (
    <>
      <Navbar />
      <Searchbar />
      {/* <Slider /> */}
      <Home />
    </>
  )
}

export default App
