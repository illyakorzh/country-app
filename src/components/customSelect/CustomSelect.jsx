import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getCountries, getCountriesByRegion } from '../../Store/countrySlice';

export const CustomSelect = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [checkedRegion, setCheckedRegion] = useState('');
  const region = [];
  countries.map(el => {
    if (!region.includes(el.region)) {
      region.push(el.region);
    }
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {

    if (checkedRegion === 'All') {
      dispatch(getCountries());
    } else {
      dispatch(getCountriesByRegion(checkedRegion));
    }

  }, [checkedRegion]);

  const handleChange = (event) => setCheckedRegion(event.target.value);

  return (<Select
    value={checkedRegion}
    onChange={handleChange}
  >
    <MenuItem value={'All'}>All</MenuItem>
    {region.map((el, index) => <MenuItem key={index} value={el}>{el}</MenuItem>)}
  </Select>);
};
