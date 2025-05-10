import { create } from 'zustand';
import {persist} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface favoritesState{
    favorites:Movie[],
    addToFavoriteMovies:(data:Movie)=>void,
    removeFromFavoriteMovies:(id:number)=>void
}

export const favoriteMoviesStrore=create<favoritesState>()(
  
      (set)=>({
    favorites:[],
    addToFavoriteMovies:(data)=>set((state)=>({favorites:[...state.favorites,data]})),
    removeFromFavoriteMovies:(id)=>set((state)=>({
       favorites:state.favorites.filter((data)=>data.id!==id)
    }),

)
    })

);
