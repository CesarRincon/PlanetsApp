import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'favoritePlanets';

const Context = createContext<ContextTypes | undefined>(undefined);

export const useContextState = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useContextState must be used within a ContextProvider');
    }
    return context;
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<Planet[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem(STORAGE_KEY);
                if (storedFavorites) {
                    setState(JSON.parse(storedFavorites));
                }
            } catch (error) {
                console.error("Error loading favorites:", error);
            }
        };
        loadFavorites();
    }, []);

    useEffect(() => {
        const saveFavorites = async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (error) {
                console.error("Error saving favorites:", error);
            }
        };
        saveFavorites();
    }, [state]);

    const handlerFavoritePlanet = (planet: Planet) => {
        setState((prevState) => {
            const isExist = prevState.some(p => p.name === planet.name);
            return isExist
                ? prevState.filter(p => p.name !== planet.name)
                : [...prevState, planet];
        });
    };

    return (
        <Context.Provider value={{ state, handlerFavoritePlanet, isLoading, setIsLoading }}>
            {children}
        </Context.Provider>
    );
};
