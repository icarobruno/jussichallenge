import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 648px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const About = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 15%;
`;

export const AboutTitle = styled.h2`
  width: 32%;
  margin-top: 2rem;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
`;

export const AboutText = styled.span`
  width: 48%;
  margin-top: 2rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
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
`;

export const FigureAbout = styled.div`
  width: 50%;
  display: flex;
  background-color: #f2f2f2;
`;

export const FigureImage = styled.img`
  right: 10%;
  width: 676px;
  height: 520px;
  position: absolute;
  align-self: center;
`;
