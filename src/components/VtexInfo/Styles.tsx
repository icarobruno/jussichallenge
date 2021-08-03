import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 480px;
  background-color: #ee0e7d;
`;

export const Title = styled.h2`
  width: 50%;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%; 
    font-size: 28px;
  }
`;

export const Span = styled.span`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
