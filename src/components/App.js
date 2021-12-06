import React, { useReducer } from "react";
import reducer, { initialState } from "./../reducers";
import "./App.css";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryRecall,
  memoryClear,
} from "../actions";
import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddOne = () => {
  //   displatch(addOne(1));
  // };
  const handleApply = (num) => {
    dispatch(applyNumber(num));
  };
  const handleOperator = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };
  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };
  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  };
  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleMemoryAdd()} value={"M+"} />
              <CalcButton onClick={() => handleMemoryRecall()} value={"MR"} />
              <CalcButton onClick={() => handleMemoryClear()} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                // onClick={handleAddOne}
                onClick={() => handleApply(1)}
                value={1}
              />
              <CalcButton onClick={() => handleApply(2)} value={2} />
              <CalcButton onClick={() => handleApply(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApply(4)} value={4} />
              <CalcButton onClick={() => handleApply(5)} value={5} />
              <CalcButton onClick={() => handleApply(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApply(7)} value={7} />
              <CalcButton onClick={() => handleApply(8)} value={8} />
              <CalcButton onClick={() => handleApply(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperator("+")} value={"+"} />
              <CalcButton onClick={() => handleOperator("*")} value={"*"} />
              <CalcButton onClick={() => handleOperator("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClear()} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
