import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import Home from "./components/home/Home";
import Pricing from "./pages/Pricing";
import Feature from "./pages/Feature";
import Blog from "./pages/Blog";
import Navbar from './components/navbar/Navbar'
import './App.css'
import Footer from "./components/footer/Footer";
import Coin from "./components/coin/Coin";


import {GoogleOAuthProvider} from '@react-oauth/google';
import GoolgeLogin from "./components/GoogleLogin/GoogleLogin";
import RefrshHandler from "./RefreshHandler";
import { Navigate } from "react-router-dom";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
	const GoogleWrapper = ()=>(
		<GoogleOAuthProvider clientId="514004312122-99is337aogp8nsj9pphlpra22ks4ecc0.apps.googleusercontent.com">
			<GoolgeLogin></GoolgeLogin>
		</GoogleOAuthProvider>
	)
	const PrivateRoute = ({ element }) => {
		return isAuthenticated ? element : <Navigate to="/login" />
	}


  return (
    <BrowserRouter>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <ErrorBoundary>     
        <Routes>
        <Route path="/login" element={<GoogleWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
          {/* <Route path="/" element={<Home></Home>} /> */}
          <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
          {/* <Route path="/coin/:coinId" element={<PrivateRoute element={<Coin/>}/>}/> */}
          <Route path="/coin/:coinId" element={<Coin></Coin>}/>
          
          <Route path="/features" element={<Feature></Feature>} />
          <Route path="/pricing" element={<Pricing></Pricing>} />
          <Route path="/blog" element={<Blog></Blog>} />         
        </Routes>
      </ErrorBoundary>
      
    </BrowserRouter>
  );
};

export default App;
