import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routers from "./config/Routers";
import FullPageLoader from "./components/loader/FullPageLoader";
import LoaderConText from "./contexts/LoaderContext";

function App() {
  const loadCtx = useContext(LoaderConText);

  return (
    // <FullPageLoader />
    <BrowserRouter>
    <Route
      render={(props) => (
        <>
          <Header {...props} />
          <Routers />
          <Footer />
        </>
      )}
    />
    </BrowserRouter>
  );
}

export default App;
