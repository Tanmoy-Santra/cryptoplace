import {useState} from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../api";
import {useNavigate} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa"
import './google.css'
const GoolgeLogin = (props) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				const result = await googleAuth(authResult.code);
				const {email, name, image} = result.data.user;
				const token = result.data.token;
				const obj = {email,name, token, image};
				localStorage.setItem('user-info',JSON.stringify(obj));
				navigate('/home');
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
		} catch (e) {
			console.log('Error while Google Login...', e);
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
			<button className="google-login-btn" onClick={googleLogin}>
			  <FaGoogle className="google-icon" />
			  Sign in with Google
			</button>
		  </div>
		</div>
	  </div>
	);
};

export default GoolgeLogin;