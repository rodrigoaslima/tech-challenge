import React, {useState, useEffect}from 'react';
import {useMarket} from '../../context/MarketContext';
import { Typography } from "@mui/material";

import  LinkButton from '../../components/LinkButton';
import  TableComponent from '../../components/TableComponent';
import SearchComponent from '../../components/SearchComponent';

import { Container } from './styles';

function MarketTable() {
  const [searchText, setSearchText] = useState('');

  const {getMarkets, markets} = useMarket()

  const handleSearch = (event) =>{
    setSearchText(event.target.value)
  }

  const columns=[
    { field: 'account_name', headerName: 'Account Name', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 100 },
    { field: 'credit_card_cvv', headerName: 'CVV', width: 100 },
    { field: 'credit_card_issuer', headerName: 'Credit Card', width: 100 },
    { field: 'credit_card_number', headerName: 'Credit Card Number', width: 150 },
    { field: 'currency_name', headerName: 'Currency Name', width: 150 },
    { field: 'transaction_description', headerName: 'Description', width: 300 },
    { field: 'transaction_type', headerName: 'Transaction', width: 100 },
  ]

  const filteredRows = markets.filter((row) => {
    return (
      row.account_name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.credit_card_issuer.toLowerCase().includes(searchText.toLowerCase()) ||
      row.transaction_description.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  useEffect(() => {
    getMarkets()
  }, [getMarkets]);

  if (!markets) {
    return <Typography>There's no one market connected at moment</Typography>;
  }

  return(
    <Container>
      <SearchComponent 
        searchText={searchText}
        handleSearch={handleSearch}
        placeholder={'Search Account Name'}
      />
      <LinkButton 
        link='/user'
        name='Home'
      />

      <div style={{ height: 400, width: '100%'}}>
        <TableComponent 
          columns={columns}
          rows={filteredRows}
        />
        
      </div>
    </Container>
  );
}

export default MarketTable;