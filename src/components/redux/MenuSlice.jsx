import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isMenuOpen: false,
  bladesMenu: false,
  bladesMenuHover: false,
  rubbersMenu: false,
  rubbersMenuHover: false,
  tableMenu:false,
  tableMenuHover: false,
  clothingsMenu: false,
  clothingsMenuHover: false,
}

const menuSlice = createSlice({
  name:'itemsMenu',
  initialState,
  reducers:{
    toggleMenu: (state) => {state.isMenuOpen = !state.isMenuOpen},
    clickAction: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
  },
})

export const {toggleMenu, clickAction,hoverAction} = menuSlice.actions
export default menuSlice.reducer