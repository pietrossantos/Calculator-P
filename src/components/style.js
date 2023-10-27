import styled from "styled-components";

export const Body = styled.body`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://img.freepik.com/vetores-premium/quadro-de-matematica_23-2148175036.jpg?w=2000);
  background-repeat: no-repeat;
  background-size: cover;
`;
export const BackgroundBox = styled.main`
  border-radius: 1em;
  height: 400px;
  width: 245px;
  background-color: #000000;
  padding-top: 50px;
  border: 3px solid #929292;

  button {
    width: 40px;
    height: 40px;
    margin: 7px 5px 0 5px;
    border: none;
    border-radius: 50%;
    font-size: 17px;
    font-weight: 400;

    &:hover {
      cursor: pointer;
    }
  }
`;
export const BoxButton = styled.div`
  margin: 17px 17px;
`;
export const NumInitial = styled.h1`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 45px;
  color: white;
  font-weight: 200;
`;

export const OrangeSymbol = styled.button`
  background-color: #ff9601;
  color: #fff;
`;

export const GrayNumber = styled.button`
  background-color: #343434;
  color: #fff;
`;
export const Others = styled.button`
  background-color: #a5a5a5;
`;
export const NumZero = styled.button`
  min-width: 90px;
  background-color: #343434;
  color: #fff;
  padding-right: 48px;
`;
