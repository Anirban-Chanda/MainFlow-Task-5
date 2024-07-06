import React, { useState } from "react";

import Display from "./components/Display";
import Button from "./components/Button";

import "./App.css";

const buttons = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "×"],
  [0, "C", "=", "÷"],
];

const calculate = (a, b, operator) =>
  operator
    ?
    operator === "+"
      ? a + b
      : operator === "-"
        ? a - b
        : operator === "×"
          ? a * b
          : a / b
    : Number(a) ? a : Number(b);

const App = () => {
  let [calc, setState] = useState({
    operator: "",
    num0: 0,
    num: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    setState({
      ...calc,
      num: Number(calc.num.toString() + e.target.innerHTML),
    });
  };

  const equalClickHandler = (e) => {
    e.preventDefault();
    setState({
      ...calc,
      operator: "",
      num0: 0,
      num: calc.operator ? calculate(calc.num0, calc.num, calc.operator) : calc.num,
    });
  };

  const operatorClickHandler = (e) => {
    e.preventDefault();
    setState({
      ...calc,
      operator: e.target.innerHTML,
      num0: calc.num,
      num: 0,
    });
  };

  const clearClickHandler = (e) => {
    e.preventDefault();
    setState({
      operator: "",
      num0: 0,
      num: 0,
    });
  }

  return (
    <div className="calculator bg-secondary">
      <Display num0={calc.num0} operator={calc.operator} num={calc.num} res={calc.res} />
      <div className="buttons">
        {buttons.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              value={btn}
              onClick={
                btn === "C"
                  ? clearClickHandler
                  : btn === "÷" || btn === "×" || btn === "-" || btn === "+" || btn === "^" || btn === "√"
                    ? operatorClickHandler
                    : btn === "="
                      ? equalClickHandler
                      : numClickHandler
              }
              className={
                btn === "C"
                  ? "button bg-danger"
                  : btn == "÷" || btn === "×" || btn === "-" || btn === "+"
                    ? "button bg-warning"
                    : btn == "="
                      ? "button bg-success"
                      : "button bg-primary"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
