import React from 'react'
import { LANGUAGES } from '../constants.js/constants'
import {useTranslation} from 'react-i18next';
const Dropdown = () => {
   const {i18n , t }=useTranslation();
   const onChangeLang=e=>{
    console.log("yes");
       const lang_code= e.target.value;
       
       i18n.changeLanguage(lang_code);
       
   } 

  return (
    <div>
     <select defaultValue="en" onChange={onChangeLang}>
{LANGUAGES.map(({code,label})=>(
    <option key={code } value={code}>{label}</option>
))}
     </select>  
    </div>
  )
}

export default Dropdown
