import { Link, useNavigate, useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import s from './DescriptionPage.module.css';
import { ThemeContext } from '../../providers/ThemeProviders';

export const DescriptionPage = () => {
  const navigate = useNavigate();
  const httpInfo = useParams();
  const [country, setCountry] = useState({});
  const [theme,] = useContext(ThemeContext);
  const { name, flags, population, region, subregion, capital, tld, currencies, languages, borders } = country;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${httpInfo.name}`);
        setCountry(...response.data);

      } catch (error) {
        console.error(error);
      }
    })();
  }, [httpInfo]);

  return (<div className={`${s.wrapper} ${theme === 'Light' ? s.wrapperLight : s.wrapperDark}`}>

    <button
      className={`${s.back} ${theme === 'Light' ? s.backLight : s.backDark}`}
      onClick={() => navigate("/")}
    >
      <KeyboardBackspaceIcon />
      <span> Back</span>
    </button>
    {Object.keys(country).length ? <div className={s.infoWrapper}>
      <div className={s.imgWrapper}>
        <img src={flags.png} alt="prapor" />
      </div>

      <div className={s.description}>
        <h2>{name.common}</h2>

        <div className={`${s.leftColumn} ${s.column}`}>
          <span><strong>Native Name: </strong> {name?.nativeName[Object.keys(name?.nativeName)[0]].common}</span>
          <span><strong>Population: </strong> {population}</span>
          <span><strong>Region: </strong> {region}</span>
          <span><strong>Sub region: </strong> {subregion}</span>
          <span><strong>Capital: </strong> {capital[0]}</span>
        </div>

        <div className={`${s.rightColumn} ${s.column}`}>
          <span><strong>Top Level Domain: </strong> {tld[0]}</span>
          <span><strong>Currencies: </strong> {currencies[Object.keys(currencies)[0]].name}</span>
          <span><strong>Languages: </strong> {languages?.[Object.keys(languages)[0]]}</span>
        </div>
        {borders ? (<div className={s.borderCountryWrapper}>
            <span><strong>Border Countries: </strong></span>
            {borders.map((country, id) =>

              <Link
                key={id}
                to={`/${country}`}
                className={`${s.borderCountry} ${theme === 'Light' ? s.backLight : s.backDark}`}
              >
                {country}

              </Link>)}
          </div>) : null}
      </div>

    </div> : <div className={s.progress}>
      <CircularProgress />
    </div>

    }

  </div>);
};


