import React,{useRef, useState, useEffect} from 'react';
import Api from '../../services/Api/api';

import { Typography } from "@mui/material";

import  LinkButton from '../../components/LinkButton';
import CardComponent from '../../components/CardComponent';

import {Container} from './styles';

function InfoCard() {
    const socketIo = useRef(null);
    const [client, setClient] = useState(null);

    useEffect(() => {
        socketIo.current = Api;
    
        socketIo.current.on(
          "client-connected",
          (client) => client && setClient(client)
        );
        //return () => socketIo.current.disconnect();
    }, [client]);
    
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