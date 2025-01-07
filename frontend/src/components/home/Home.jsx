import { useContext, useEffect, useState } from 'react';
import './home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

  const {allCoin,currency}=useContext(CoinContext);
  const [displayCoin,setDisplayCoin]=useState([]);
  const [input,setInput]=useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputHandler = (event) =>{
    setInput(event.target.value);
    if(event.target.value===''){
      setDisplayCoin(allCoin);
    }
  }


  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const sarchHandler =async (event) =>{
    event.preventDefault();
    const coins = await allCoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase()); 
    })
    setDisplayCoin(coins);
  }

  const relode= (event)=>{
    event.preventDefault();
    setInput("");
    setDisplayCoin(allCoin);
  }

  useEffect(()=>{
    setDisplayCoin(allCoin);
  },[allCoin]);


  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
      const data = localStorage.getItem('user-info');
      toast.success('Login successfully ..');
      const userData = JSON.parse(data);
      setUserInfo(userData);
  },[])

  const handleLogout = ()=>{
      localStorage.removeItem('user-info');
      toast.info('Logged out successfully ..');
      navigate('/login');
  }

  return (
    <>
    <Navbar></Navbar>
    <div style={{marginTop:'5px'}} className="user-info-container">
      <div className="user-info-header" style={{background:'transparent'}} onClick={toggleDropdown}>
        <img
          className="user-avatar"
          src={userInfo?.avatar || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
          alt="User Avatar"
        />
        <p className="user-name">{userInfo?.name || "User Name"}</p>
        <span className={`dropdown-icon ${dropdownOpen ? "open" : ""}`}>&#9662;</span>
      </div>
      {dropdownOpen && (
        <div style={{padding:'10px'}} className="dropdown-menu">
          <p className="user-email" style={{color:'white'}}>{userInfo?.email}</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
    <div className='home'>
      <div className='hero'>
        <h1>Largest<br></br>Crypto Marketplace</h1>
        <p>Welcome to the worlds largest cryptocurrency marketplace .Sign up to explore more about crypto</p>
        <form onSubmit={sarchHandler}>
          <input onChange={inputHandler} list='coinlist' value={input} required type='text' placeholder='Search crypto..'/>

          <datalist id="coinlist">
                {Array.isArray(allCoin) && allCoin.length > 0 ? (
                    allCoin.map((item, index) => (
                        <option key={index} value={item.name} />
                    ))
                ) : (
                    <option value="Loading or no coins available" />
                )}
            </datalist>

          <button onClick={relode}>✖</button>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className='table-layout'>
          <p style={{fontWeight:"bold"}}>#</p>
          <p style={{fontWeight:"bold"}}>Coins</p>
          <p style={{fontWeight:"bold"}}>Price</p>
          <p style={{textAlign:"center",fontWeight:"bold"}}>24H Change</p>
          <p  style={{fontWeight:"bold"}} className='market-cap'>Market Cap</p>
        </div>
        {Array.isArray(displayCoin) && displayCoin.slice(0, 10).map((item, index) => (
    <Link
        style={{ textDecoration: "none" }}
        to={`/coin/${item.id}`}
        className="table-layout"
        key={index}
    >
        <p>{item.market_cap_rank}</p>
        <div className="img_para">
            <img className="img" src={item.image} alt={`${item.name}`} />
            <p>{item.name + " - " + item.symbol}</p>
        </div>
        <p style={{ color: "green" }}>
            {currency.symbol} {item.current_price.toLocaleString()}
        </p>
        <p style={{ textAlign: "center", color: "red" }}>
            {Math.floor(item.price_change_percentage_24h * 100)}
        </p>
        <p className="market-cap">
            {currency.symbol} {item.market_cap.toLocaleString()}
        </p>
    </Link>
))}

      </div>

      
    </div>  
    <Footer/>
    </>

  )
}

export default Home