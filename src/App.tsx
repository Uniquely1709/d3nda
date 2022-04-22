import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Background from "./ressources/background.jpg";

import "./App.css";

const background = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
};
function App() {
  return (
    <div className="bg-image img-fluid w-100 h-100" style={background}>
      <div className="d-flex h-100 text-center text-white">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
