import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../api";
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import './google.css';

const GoogleLogin = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // State for loader
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    setLoading(true); // Show loader
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult.code);
        const { email, name, image } = result.data.user;
        const token = result.data.token;
        const obj = { email, name, token, image };
        localStorage.setItem('user-info', JSON.stringify(obj));
        toast.success('Login successfully ..');
        navigate('/home');
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (e) {
      console.log('Error while Google Login...', e);
      toast.error('Failed to login with Google');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to CryptoWorld</h1>
        <p>Sign in to explore the largest cryptocurrency marketplace.</p>
        <div className="login">
          {loading ? (
            <div className="spinner">
              <div className="spin"></div>
            </div>
          ) : (
            <button className="google-login-btn" onClick={googleLogin}>
              <FaGoogle className="google-icon" />
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
