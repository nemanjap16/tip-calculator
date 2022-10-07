import style from "./Display.module.css";
import { useCalcContext } from "../context/calcContext";

const Display = ({ handleReset }) => {
  const { bill, people, total, btnDisabled, tip_amount } = useCalcContext();

  return (
    <div className={style.display}>
      <div>
        <div className={style.row}>
          <div className={style.label}>
            <p className={style.header}>Tip Amount</p>
            <p className={style.unit}>/ person</p>
          </div>
          <div className={style.amount}>
            {people > 0 && bill > 0
              ? "$" + `${Number(tip_amount).toFixed(2)}`
              : "$0.00"}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.label}>
            <p className={style.header}>Total</p>
            <p className={style.unit}>/ person</p>
          </div>
          <div className={style.amount}>
            {people > 0 && bill > 0
              ? "$" + `${Number(total).toFixed(2)}`
              : "$0.00"}
          </div>
        </div>
      </div>
      <button
        className={style.resetBtn}
        disabled={btnDisabled}
        onClick={handleReset}
      >
        reset
      </button>
    </div>
  );
};

export default Display;
