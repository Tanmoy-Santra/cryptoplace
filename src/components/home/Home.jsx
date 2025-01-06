
import { useContext, useEffect, useState } from 'react';
import './home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
const Home = () => {

  const {allCoin,currency}=useContext(CoinContext);
  const [displayCoin,setDisplayCoin]=useState([]);
  const [input,setInput]=useState('');

  const inputHandler = (event) =>{
    setInput(event.target.value);
    if(event.target.value===''){
      setDisplayCoin(allCoin);
    }
  }

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
  return (
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

  )
}

export default Home
