import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 648px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const About = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 15%;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  width: 32%;
  margin-top: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutText = styled.span`
  width: 48%;
  margin-top: 2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutButton = styled.button`
  width: 30%;
  height: 48px;
  margin-top: 2rem;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  outline: none;
  background: transparent;

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;

export const FigureAbout = styled.div`
  width: 50%;
  display: flex;
  background-color: #f2f2f2;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FigureImage = styled.img`
  right: 10%;
  width: 676px;
  height: 520px;
  position: absolute;
  align-self: center;

  @media only screen and (max-width: 768px) {
    right: 0%;
    position: unset;
    width: 100%;
    height: 315px;
  }
`;
