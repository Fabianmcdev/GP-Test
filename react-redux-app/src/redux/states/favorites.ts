import { createSlice, current } from '@reduxjs/toolkit';
import { setLocalStorage, getLocalStorage } from '@/utilities/localstorage.utilities';
import { LocalStorageTypes, Person } from '@/models';

const initialState:Person[] = [];

const getLocalStorageInitialData=() => {
    const localStorageData= getLocalStorage(LocalStorageTypes.FAVORITES) ? 
    JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES)as string) 
    : initialState;
    return localStorageData;
    
}

export const  favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorageInitialData(),
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
            return action.payload;
        },
        removeFavorite: (state, action) => {
         const filteredState= current(state).filter((p:Person)=>p.id !== action.payload.id);
            setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
            return filteredState;
        } 
        
    }
    
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;