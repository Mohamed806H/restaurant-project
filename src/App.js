import React from "react";
import { Header, About ,SpecialMenu ,Chef ,VidRest ,Laurels ,Gallery ,FindUs ,Footer} from "./container";
import { Navbar } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <VidRest />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
