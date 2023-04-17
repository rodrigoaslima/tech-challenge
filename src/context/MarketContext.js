import { createContext, useState, useContext } from 'react';
import Api from '../services/Api/api';

const MarketContext = createContext();

function MarketProvider({children}){
    const [markets, setmarkets] = useState([]);

    const socketIo = Api;

    function getMarkets(){
        socketIo.on("market-data", (data) =>{
            setmarkets([...markets, data])
        });
    }

    return(
        <MarketContext.Provider value={{getMarkets, markets}}>
            {children}
        </MarketContext.Provider>
    )
}

function useMarket(){
    const context = useContext(MarketContext);
    return context
}

export {MarketProvider, useMarket}