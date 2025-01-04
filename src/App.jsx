import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorBoundary from "./components/Error/ErrorBoundary";
import Home from "./components/home/Home";
import Pricing from "./pages/Pricing";
import Feature from "./pages/Feature";
import Blog from "./pages/Blog";
import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
     <Navbar></Navbar>
      <ErrorBoundary>     
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/features" element={<Feature></Feature>} />
          <Route path="/pricing" element={<Pricing></Pricing>} />
          <Route path="/blog" element={<Blog></Blog>} />
        </Routes>
      </ErrorBoundary>
      <Footer/>
    </Router>
  );
};

export default App;
