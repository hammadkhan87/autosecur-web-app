import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
