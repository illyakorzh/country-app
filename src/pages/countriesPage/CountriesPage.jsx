import React, {  useEffect } from 'react';

import s from './CountriesPage.module.css';

import { CountryCard } from '../../components/contryCard/CountryCard';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../components/form/Form';
import { getCountries } from '../../Store/countrySlice';

export function CountriesPage() {

  const dispatch = useDispatch();
  const countries = useSelector(state1 => state1.country);

  useEffect(() => { dispatch(getCountries()) }, []);

  return (<div>
      <Form />
      <div className={s.wrapperCards}>
        {(countries.map((country) => (<CountryCard key={country.cca2} country={country} />)))}
      </div>
    </div>);
}

export default CountriesPage;
