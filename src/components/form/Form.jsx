import { InputForm } from './InputForm/InputForm';
import { CustomSelect } from '../customSelect/CustomSelect';
import s from './Form.module.css'

export const Form = () => {
  return(
    <div className={s.wrapper}><InputForm/>
    <CustomSelect/>
    </div>
  )
}
