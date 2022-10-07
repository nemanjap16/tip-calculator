import { createContext, useContext, useReducer } from "react";

export const CalcContext = createContext();

const initialState = {
  selected_tip: "",
  bill: "",
  people: "",
  total: 0,
  tip_amount: 0,
  btnDisabled: true,
};

export const calcReducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_TIP":
      return { ...state, selected_tip: action.payload };
    case "SET_BILL":
      return { ...state, bill: action.payload };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    case "SET_DISABLED":
      return {
        ...state,
        btnDisabled: action.payload,
      };
    case "SET_PEOPLE":
      return {
        ...state,
        people: action.payload,
      };
    case "SET_TIP_AMOUNT":
      return {
        ...state,
        tip_amount: action.payload,
      };
    case "RESET":
      return {
        selected_tip: "",
        bill: "",
        people: "",
        total: 0,
        tip_amount: 0,
        btnDisabled: false,
      };

    default:
      return state;
  }
};

export const CalcReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, initialState);
  return (
    <CalcContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CalcContext.Provider>
  );
};

// custom hook for calc context
export const useCalcContext = () => {
  const context = useContext(CalcContext);
  return context;
};
