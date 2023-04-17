import React,{useEffect} from 'react';
import {useClient } from '../../context/ClientContext';

import { Typography } from "@mui/material";

import  LinkButton from '../../components/LinkButton';
import CardComponent from '../../components/CardComponent';

import {Container} from './styles';

function InfoCard() {
    const {getClient, client} = useClient();

    useEffect(() => {
        getClient();
    }, [getClient]);
    
    if (!client) {
        return <Typography>There's no one client connected at moment</Typography>;
    }

    return( 
        <Container>
            <CardComponent 
                client={client}
            />
            <LinkButton
                link="/table"
                name="Table" 
            />
        </Container>
    );
}

export default InfoCard;