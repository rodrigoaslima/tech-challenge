import React from 'react';
import { Divider } from "@mui/material";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

import {Card, InfoWrapper, Info } from './styles';

function CardComponent({client}) {
  return(
        <Card>
            <InfoWrapper>
                <Info style={{fontSize: 20, justifyContent: 'center'}}><b>{client.first_name}</b></Info>
                <Info style={{justifyContent: 'center'}}>{client.job}</Info>
            </InfoWrapper>
            <Divider 
                orientation="vertical" 
                variant="middle" 
                flexItem
                sx={{
                    borderWidth:2,
                    borderColor: '#483285',
                    borderRadius: 2
                }} 
            />
            <InfoWrapper>
                <Info>
                    <BadgeOutlinedIcon style={{paddingRight: 5}}/>
                    {client.client_id}
                </Info>
                <Info>
                    <WorkOutlineOutlinedIcon style={{paddingRight: 5}}/>
                    {client.job_descriptor}
                </Info>
            </InfoWrapper>
        </Card>
  );
}

export default CardComponent;