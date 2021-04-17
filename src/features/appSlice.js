import {  createSlice } from '@reduxjs/toolkit';


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName2: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName2 = action.payload.channelName2;
    },
   
      
  },   

  
  
});

export const { setChannelInfo } = appSlice.actions;


export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName2 = (state) => state.app.channelName2;

export default appSlice.reducer;
