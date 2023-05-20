import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log('can`t remove the iten that is not added to cart');
      }
      state.items = newCart;
    },
    emptyCart: state => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, emptyCart} = CartSlice.actions;

export const selectCartItems = (state: any) => state.cart.items;

export const selectCartItemsById = (state: any, id: number) =>
  state.cart.items.filter((item: any) => item.id === id);

export const selectCartTotal = (state: any) =>
  state.cart.items.reduce(
    (total: number, item: any) => (total = total + item.price),
    0,
  );

export default CartSlice.reducer;
