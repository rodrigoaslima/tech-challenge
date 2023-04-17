import {styled} from '@mui/material/styles';

export const Card = styled('div')({
    border: '10px',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: '#e7a61a',
    minWidth: '300px',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f0ee',
    borderRadius: '15px',
    marginBottom: '15px',
})

export const InfoWrapper = styled('ul')({
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 10,
    listStyleType: 'none',
})

export const Info = styled('li')({
    display: 'flex',
    alignItems: 'center',
    color: '#483285',
    fontWeight: 500,
    
})