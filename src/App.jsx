import "./App.css";
import { useEffect } from "react";
import Display from "./components/Display";
import Input from "./components/Input";
import { uncheckRadioBtn } from "./utils/checked";
import { useCalcContext } from "./context/calcContext";

function App() {
  const { dispatch, bill, people, selected_tip, tip_amount } = useCalcContext();

  const handleSelectedTip = (e) => {
    dispatch({ type: "SELECTED_TIP", payload: Number(e.target.value) });
  };

  const handleCustomSelectedTip = (e) => {
    handleSelectedTip(e);
  };

  const handleInput = (e) => {
    if (e.target.name == "bill") {
      dispatch({ type: "SET_BILL", payload: Number(e.target.value) });
    }

    if (e.target.name == "people") {
      dispatch({ type: "SET_PEOPLE", payload: Number(e.target.value) });
    }
  };

  const handleReset = () => {
    document.querySelector("#custom-percent").value = "";
    uncheckRadioBtn();
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    if (people !== 0 && bill > 0) {
      dispatch({ type: "SELECTED_TIP", payload: Number(selected_tip) });
      dispatch({
        type: "SET_TIP_AMOUNT",
        payload: ((selected_tip / 100) * bill) / people,
      });
      dispatch({
        type: "SET_TOTAL",
        payload: (Number((bill / 100) * selected_tip) + Number(bill)) / people,
      });
      dispatch({ type: "SET_DISABLED", payload: false });
    }
    if (people == 0) {
      dispatch({ type: "SET_DISABLED", payload: true });
    }
  }, [bill, people, selected_tip, tip_amount]);

  return (
    <div className="app">
      <div className="app-name">
        <h1>spli</h1>
        <h1>tter</h1>
      </div>
      <div className="calculator">
        <div className="form-group">
          <Input
            labelName="Bill"
            errMsg={"Can't be zero"}
            dollar="true"
            bill="true"
            value={bill}
            handleInput={handleInput}
          />
          <div className="select-percent">
            <p className="select-tip">Select Tip %</p>
            <div className="percent">
              <label className="input-radio" htmlFor="tip-5">
                <input
                  type="radio"
                  name="tip"
                  id="tip-5"
                  value={5}
                  onInput={handleSelectedTip}
                />
                <div className="tip-value">
                  5<span>%</span>
                </div>
              </label>
              <label className="input-radio" htmlFor="tip-10">
                <input
                  type="radio"
                  name="tip"
                  id="tip-10"
                  value={10}
                  onInput={handleSelectedTip}
                />
                <div className="tip-value">
                  10<span>%</span>
                </div>
              </label>
              <label className="input-radio" htmlFor="tip-15">
                <input
                  type="radio"
                  name="tip"
                  id="tip-15"
                  value={15}
                  onInput={handleSelectedTip}
                />
                <div className="tip-value">
                  15<span>%</span>
                </div>
              </label>
              <label className="input-radio" htmlFor="tip-25">
                <input
                  type="radio"
                  name="tip"
                  id="tip-25"
                  value={25}
                  onInput={handleSelectedTip}
                />
                <div className="tip-value">
                  25<span>%</span>
                </div>
              </label>
              <label className="input-radio" htmlFor="tip-50">
                <input
                  type="radio"
                  name="tip"
                  id="tip-50"
                  value={50}
                  onInput={handleSelectedTip}
                />
                <div className="tip-value">
                  50<span>%</span>
                </div>
              </label>
              <div>
                <input
                  className="input-text"
                  type="number"
                  placeholder="Custom"
                  id="custom-percent"
                  onInput={handleCustomSelectedTip}
                  onFocus={() => uncheckRadioBtn()}
                />
              </div>
            </div>
          </div>
          <Input
            labelName={"Number of People"}
            errMsg={"Can't be zero people"}
            person="true"
            people="true"
            value={people}
            handleInput={handleInput}
          />
        </div>
        <Display handleReset={handleReset} />
      </div>
    </div>
  );
}

export default App;
