import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import "./coin.css";
import LineChart from "../../components/lineChart/LineChart";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const { currency } = useContext(CoinContext);

  const [historicalData,setHistoricalData]=useState();

  const fetchCoinData = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
        },
      };

      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };



  const fetchHistoricalData = async () =>{
    try {
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': `${import.meta.env.VITE_API_KEY}`}
      };
      
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options);

      const data=await response.json();
      setHistoricalData(data);
              
    } catch (error) {
      console.error(error);            
    }
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, []); // Dependency array is empty since `currency` isn't directly used.


  if (coinData,historicalData) {
    return (
      <>
         <Navbar></Navbar>
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt={coinData.name} />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>           
          </p>
          <br></br>
          <p style={{margin:'0px',padding:'0px'}}>         
            Last 10 Days overview                   
          </p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData}/>
        </div>    

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>Market cap</li>
            <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 hour high</li>
            <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 hour low</li>
            <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>

      </div>
      <Footer/>
      </>
    );
  } else {
  
    return (
      <>
      <Navbar></Navbar>
      <div className="spinner">
        <div className="spin"></div>
      </div>
      <Footer/>
      </>
    );
  }
};

export default Coin;
