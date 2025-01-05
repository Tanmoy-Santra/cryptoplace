import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    console.log(props);
    
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "USD",
        symbol: "$",
    });

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { 
                accept: 'application/json', 
                'x-cg-demo-api-key': 'CG-sjpDbL4K8HpibhU23cuaVrPs'
            }
        };

        try {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, 
                options
            );
            const data = await response.json();
            setAllCoin(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin,
        currency,
        setCurrency,
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
