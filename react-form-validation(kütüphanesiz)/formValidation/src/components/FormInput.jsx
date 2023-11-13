import { useState } from "react";
import "./formInput.css";

const FormInput = ({ id, name, label, onChange, errorMessage, ...inputProps }) => {
  const [focused, setFocused] = useState(false);


  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        name={name}
        type="text"
        {...inputProps}
        onChange={onChange}
        focused={focused.toString()}     
        onBlur={() => setFocused(true)}    //odaktan çıktığın zaman burası çalışacak focudes true olduğunda olacak işlemler css de 
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)   //confirm password inputuna tıkladığım anda altta yazı beliriyor
        }
      />

      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;