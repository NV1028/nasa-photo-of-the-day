import React from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/cards";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <p></p>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
