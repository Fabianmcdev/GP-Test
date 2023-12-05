import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage, getLocalStorage } from '@/utilities/localstorage.utilities';
import { LocalStorageTypes } from '@/models';

const initialState = [
    {
        id: '',
        name: '',
        category: '',
        company: '',
        levelOfHappiness: 0,
      },
];

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? 
    JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE)as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
           setLocalStorage(LocalStorageTypes.PEOPLE, state);
           return action.payload;
        },        
    }
    
});
export const { addPeople } = peopleSlice.actions;