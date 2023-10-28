import s from './App.module.css'
import { Header } from './components/header/Header';
import { useContext } from 'react';
import { ThemeContext } from './providers/ThemeProviders';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

export function App() {
  const [theme ] = useContext(ThemeContext);
  return (
    <div className={`${s.App} ${theme === 'Light' ? s.AppLight : s.AppDark}`}>
      <Header />
      <RouterProvider router={router} />
    </div>
  );

}



