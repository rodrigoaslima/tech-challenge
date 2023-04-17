import { createContext, useState, useContext } from 'react';
import Api from '../services/Api/api';

const ClientContext = createContext();

function ClientProvider({children}){
    const [client, setClient] = useState(null);

    const socketIo = Api;

    function getClient(){
        socketIo.on('client-connected', (data) => {
            setClient(data)
        })
    }

    return(
        <ClientContext.Provider value={{getClient, client}}>
            {children}
        </ClientContext.Provider>
    )
}

function useClient(){
    const context = useContext(ClientContext);
    return context
}

export {ClientProvider, useClient}