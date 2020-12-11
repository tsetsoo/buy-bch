import React, {  useContext, useState  }  from "react";
import "./header.styles.scss";
import logo from '../../assets/assets_images_poype-logo-light.png'; 
import { Context } from "../intl-wrapper/intl-wrapper.component";

const options = {
  bg: { value: "bg-BG", label: "БГ" },
  en: { value: "en", label: "EN" }
}

const Header = () => {
  const setInitialState = () => {
   return /^bg\b/.test(context.locale) ? options["bg"] : options["en"];
  }
  const context = useContext(Context);
  const [currentLanguage, setCurrentLanguage] = useState(setInitialState());


  const toggleLanguage = () => {
    if(currentLanguage.label === options["bg"].label){
      setCurrentLanguage(options["en"])
      context.selectLanguage(options["en"].value)
    }
    else{
      setCurrentLanguage(options["bg"])
      context.selectLanguage(options["bg"].value)
    }
  }

    return (<div className="header-container">
       <a href="https://www.poype.io/" >
       <img className="brand-logo"  src={logo}/>
       </a>
       <div className="language"  onClick={() => toggleLanguage()} >
       {currentLanguage.label}
       </div>
    </div>)
  };

export default Header;
