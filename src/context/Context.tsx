import React, { createContext, useState, useContext, ReactNode } from 'react';

const Context = createContext<ContextTypes | undefined>(undefined);

export const useContextState = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useContext must be used within a ContextProvider');
    }
    return context;
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<Planet[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const handlerFavoritePlanet = (planet: Planet) => {
        setState((prevState) => {
            const isExist = prevState.some(p => p.name === planet.name);
            if (!isExist) {
                return [...prevState, planet];
            } else {
                return prevState.filter(p => p.name !== planet.name);
            }
        });
    };

    return (
        <Context.Provider value={{ state, handlerFavoritePlanet, isLoading, setIsLoading }}>
            {children}
        </Context.Provider>
    );
};
