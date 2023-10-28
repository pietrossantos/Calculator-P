import { useState } from "react";

import {
  BackgroundBox,
  Body,
  BoxButton,
  NumInitial,
  OrangeSymbol,
  GrayNumber,
  Others,
  NumZero,
} from "./style";

function Calculator() {
  const [result, setResult] = useState(0);
  const [former, setFormer] = useState(0);
  const [calculate, setCalculate] = useState();

  function inputNum(e) {
    const input = e.target.value;
    if (result === 0) {
      setResult(input);
    } else {
      setResult(result + input);
    }
  }

  function clear() {
    setResult(0);
    setFormer(0);
    setCalculate(undefined);
  }

  function positiveOrNegative() {
    setResult(parseFloat(result) * -1);
  }

  function percentage() {
    setResult(parseFloat(result) / 100);
  }

  function operator(e) {
    setCalculate(e.target.value);
    setFormer(parseFloat(result));
    setResult(0);
  }

  function account() {
    if (calculate === "÷") {
      setResult(former / parseFloat(result));
    } else if (calculate === "x") {
      setResult(former * parseFloat(result));
    } else if (calculate === "-") {
      setResult(former - parseFloat(result));
    } else if (calculate === "+") {
      setResult(former + parseFloat(result));
    }
  }

  function buttonSymbol(e) {
    setResult(result + e.target.value);
  }
  return (
    <Body>
      <BackgroundBox>
        <BoxButton>
          <NumInitial> {result} </NumInitial>
          <Others onClick={clear}>AC</Others>
          <Others onClick={positiveOrNegative}>+/-</Others>
          <Others onClick={percentage}>%</Others>
          <OrangeSymbol onClick={operator} value={"÷"}>
            ÷
          </OrangeSymbol>
          <GrayNumber onClick={inputNum} value={7}>
            7
          </GrayNumber>
          <GrayNumber onClick={inputNum} value={8}>
            8
          </GrayNumber>
          <GrayNumber onClick={inputNum} value={9}>
            9
          </GrayNumber>
          <OrangeSymbol onClick={operator} value={"x"}>
            x
          </OrangeSymbol>
          <GrayNumber onClick={inputNum} value={4}>
            4
          </GrayNumber>
          <GrayNumber onClick={inputNum} value={5}>
            5
          </GrayNumber>
          <GrayNumber onClick={inputNum} value={6}>
            6
          </GrayNumber>
          <OrangeSymbol onClick={operator} value={"-"}>
            -
          </OrangeSymbol>
          <GrayNumber onClick={inputNum} value={1}>
            1
          </GrayNumber>
          <GrayNumber onClick={inputNum} value={2}>
            2
          </GrayNumber>
          <GrayNumber onClick={inputNum} value={3}>
            3
          </GrayNumber>
          <OrangeSymbol onClick={operator} value={"+"}>
            +
          </OrangeSymbol>
          <NumZero
            style={{ borderRadius: "35px" }}
            onClick={inputNum}
            value={0}
          >
            0
          </NumZero>
          <GrayNumber onClick={buttonSymbol} value={"."}>
            .
          </GrayNumber>
          <OrangeSymbol onClick={account}>=</OrangeSymbol>
        </BoxButton>
      </BackgroundBox>
    </Body>
  );
}

export default Calculator;
