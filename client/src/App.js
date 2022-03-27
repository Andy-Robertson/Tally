import React from "react";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import Footer from "./components/Footer/Footer";
import "./assets/styles/normalize.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
