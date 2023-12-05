import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "./states/people";
import { favoritesSlice } from "./states/favorites";

export interface PeopleState {
    people: Person[];
    favorites: Person[];
}
export default configureStore<PeopleState>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer
    }
});