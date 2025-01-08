import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import Home from "./components/home/Home";
import Pricing from "./pages/Pricing";
import Feature from "./pages/Feature";
import Blog from "./pages/Blog";

import './App.css'

import Coin from "./components/coin/Coin";


import {GoogleOAuthProvider} from '@react-oauth/google';
import GoolgeLogin from "./components/GoogleLogin/GoogleLogin";
import RefrshHandler from "./RefreshHandler";
import { Navigate } from "react-router-dom";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
	const GoogleWrapper = ()=>(
		<GoogleOAuthProvider clientId={import.meta.env.VITE_AUTH_CLIENT_ID}>
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
      <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop 
          closeOnClick 
          pauseOnHover 
          draggable 
          theme="light" 
        /> 
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
