import React, { createContext, useState } from 'react';

// Crear el contexto
export const GlobalContext = createContext();

// Crear el proveedor del contexto
export const GlobalProvider = ({ children }) => {
    const [currentAuction, setCurrentAuction] = useState(null);
    const [user, setUser] = useState(null);
    const [balance, setBalance] = useState(0);

    return (
        <GlobalContext.Provider value={{ currentAuction, setCurrentAuction, user, setUser, balance, setBalance }}>
            {children}
        </GlobalContext.Provider>
    );
};
