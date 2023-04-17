import React from "react";
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";

import InfoCard from '../pages/InfoCard';
import MarketTable from '../pages/Table';


const Routess = () => {
   return(
       <HashRouter>
            <Routes>
                <Route 
                    path="/" exact
                    element={<Navigate to="/user" replace />} 
                />
                <Route element = { <InfoCard/> }  path="/user" />
                <Route element = { <MarketTable/> }  path="/table" />
            </Routes>
       </HashRouter>
   )
}

export default Routess;