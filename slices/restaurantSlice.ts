import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface RestaurantState {
  restaurant: any;
}

const initialState: RestaurantState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<any>) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
