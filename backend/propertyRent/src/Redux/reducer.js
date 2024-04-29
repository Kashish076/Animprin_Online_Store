// myReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedImages : [],
};

const mySlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    setSelectedImages : (state ,action) => {
     state.selectedImages = action.payload;
    }
  },
});

export const {setSelectedImages} = mySlice.actions;
export default mySlice.reducer;




