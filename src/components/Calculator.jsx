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
  return (
    <Body>
      <BackgroundBox>
        <BoxButton>
          <NumInitial> 0 </NumInitial>
          <Others>AC</Others>
          <Others>+/-</Others>
          <Others>%</Others>
          <OrangeSymbol>÷</OrangeSymbol>
          <GrayNumber>7</GrayNumber>
          <GrayNumber>8</GrayNumber>
          <GrayNumber>9</GrayNumber>
          <OrangeSymbol>x</OrangeSymbol>
          <GrayNumber>4</GrayNumber>
          <GrayNumber>5</GrayNumber>
          <GrayNumber>6</GrayNumber>
          <OrangeSymbol>-</OrangeSymbol>
          <GrayNumber>1</GrayNumber>
          <GrayNumber>2</GrayNumber>
          <GrayNumber>3</GrayNumber>
          <OrangeSymbol>+</OrangeSymbol>
          <NumZero style={{ borderRadius: "35px" }}>0</NumZero>
          <GrayNumber>,</GrayNumber>
          <OrangeSymbol>=</OrangeSymbol>
        </BoxButton>
      </BackgroundBox>
    </Body>
  );
}

export default Calculator;
