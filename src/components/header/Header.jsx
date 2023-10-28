import { useContext } from 'react';
import { FaMoon ,FaRegMoon} from 'react-icons/fa';
import s from './Header.module.css'
import { ThemeContext } from '../../providers/ThemeProviders';


export function Header() {
  const [theme, setTheme] = useContext(ThemeContext);


  const toggle = () => {
    setTheme((currentTheme) => (currentTheme === 'Light' ? 'Dark' : 'Light'));
  };

  return (<div className={`${s.wrapper} ${theme === 'Light' ? s.wrapperLight : s.wrapperDark}`}>
    <h1 className={s.title}>Where in the world ?</h1>
    <div className={s.rightSide} onClick={toggle}>
      {theme === 'Light' ?<FaRegMoon />:<FaMoon />}
      <span>  {`${theme} Theme`}</span>
    </div>

  </div>);
}
