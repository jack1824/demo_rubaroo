import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./constants/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import Contact from "./components/Contact";
import SidebarComponent from "./components/SidebarComponent";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SidebarComponent />
        <Routes>
          {/* Redirect "/" to Home */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/navbar" element={<Navbar />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/sponsors" element={<Sponsors/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* Redirect all other routes to Home */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
