import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RegisterPopup from "./components/RegisterPopup";
import { useState } from "react";

import Routes from "./Routes";

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <Router>
      <Header setModelOpen={setModelOpen} />
      <Routes />
      <Footer />
      <RegisterPopup />
      <RegisterPopup />
    </Router>
  );
}

export default App;