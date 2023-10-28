import s from './CountryCard.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProviders';
import { Link } from 'react-router-dom';

export const CountryCard = ({ country }) => {
  const [theme,] = useContext(ThemeContext);
  const { name, flags, population, region, capital ,cca2} = country;

  return (<Link
    to={`/${cca2}`}
    className={`${s.wrapper} ${theme === 'Light' ? s.wrapperLight : s.wrapperDark}`}>
    <img src={flags.png} alt={flags.alt} />
    <div className={s.wrapperInfo}>
      <h2>{name.common}</h2>
      <div><strong>Population: </strong><span>{population}</span></div>
      <div><strong>Region: </strong><span>{region}</span></div>
      {capital ? <div><strong>Capital: </strong><span>{capital}</span></div> : null}
    </div>
  </Link>);
};


