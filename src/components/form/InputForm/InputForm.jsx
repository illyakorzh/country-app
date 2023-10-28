import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { getCountriesByName, getCountries, setCountries } from '../../../Store/countrySlice';
import { useDispatch } from 'react-redux';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from '../../../providers/ThemeProviders';
import s from './InputForm.module.css';

export const InputForm = () => {
  const dispatch = useDispatch();
  const [theme] = useContext(ThemeContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(getCountriesByName(data.name));
  };

  const handleBlur = () => {
    const inputValue = document.querySelector("input[name='name']").value;
    if (!inputValue) {
      dispatch(getCountries());
    }
  };

  return (
    <form onChange={handleSubmit(onSubmit)} onBlur={handleBlur}>
      <TextField
        className={`${s.wrapper} ${theme === 'Light' ? s.wrapperLight : s.wrapperDark}`}
        placeholder="Search for a country"
        autoComplete="off"
        variant="outlined"
        {...register("name", { required: true })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};
