import { useEffect, useState } from "react";
import style from "./Input.module.css";
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

const Input = ({ labelName, errMsg, dollar, people, handleInput, value }) => {
  const [state, setState] = useState(1);
  const [error, setError] = useState(false);
  let msg = errMsg;

  const handleInputError = (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    if (state != 0 && state != "") {
      setError(false);
    } else {
      setError(true);
    }
  });
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <p className={style.text}>{labelName}</p>
        {error && (
          <span className={style.error}>
            {state != "" ? `${msg}` : `Can't be empty`}
          </span>
        )}
      </div>
      <div className={style.label}>
        {dollar ? (
          <img className={style.icon} src={dollarIcon} alt="dollar" />
        ) : (
          <img className={style.icon} src={personIcon} alt="person" />
        )}

        <input
          className={!error ? style.input : style.inputError}
          type="number"
          name={people ? "people" : "bill"}
          placeholder="0"
          min="0.00"
          value={value}
          id="input"
          onChange={(e) => {
            handleInput(e), handleInputError(e);
          }}
          onBlur={handleInputError}
        />
      </div>
    </div>
  );
};

export default Input;
