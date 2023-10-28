import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const getCountries = createAsyncThunk('country/getCountries', async (_, { rejectWithValue, dispatch }) => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  dispatch(setCountries(response.data));
});

export const getCountriesByRegion = createAsyncThunk('country/getCountries', async (region, {
  rejectWithValue,
  dispatch
}) => {
  const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
  dispatch(setCountries(response.data));
});

export const getCountriesByName = createAsyncThunk('country/getCountries', async (name, {
  rejectWithValue,
  dispatch
}) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  dispatch(setCountries(response.data));
});

const countrySlice = createSlice({
  name: 'country', initialState, reducers: {
    setCountries: (state, action) => {
      return action.payload;
    },
  }, extraReducers: {
    [getCountries.pending]: () => console.log(),
    [getCountries.fulfilled]: () => console.log(),
    [getCountries.rejected]: () => console.log(),
  }
});

export const { setCountries } = countrySlice.actions;

export default countrySlice.reducer;
