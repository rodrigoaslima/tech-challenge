import React from "react";
import { Route, BrowserRouter, Routes, Navigate} from "react-router-dom";

import InfoCard from '../pages/InfoCard';
import MarketTable from '../pages/Table';


const Routess = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route 
                    path="/" exact
                    element={<Navigate to="/user" replace />} 
                />
                <Route element = { <InfoCard/> }  path="/user" />
                <Route element = { <MarketTable/> }  path="/table" />
            </Routes>
       </BrowserRouter>
   )
}

export default Routess;