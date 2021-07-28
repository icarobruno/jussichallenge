import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #03ffa5;
  min-height: 560px;
  padding: 2rem 2rem;
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RightSection = styled(LeftSection)`
  align-items: center;
`;

export const Title = styled.h2`
  color: #000;
  white-space: pre-line;
  font-size: 64px;
  font-weight: 500;
  font-family: Barlow;
  text-transform: uppercase;
  margin-left: 20%;
  margin-top: 3rem;
`;

export const Text = styled(Title)`
  font-size: 16px;
  text-transform: none;
  margin-top: 0;
`;

export const Button = styled.button`
  width: 30%;
  height: 48px;
  outline: none;
  border: 1px solid #000;
  border-radius: 8px;
  margin-left: 20%;
  margin-top: 1.5rem;
  background-color: transparent;
`;

export const ProductCard = styled.div`
  width: 209px;
  height: 271px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: 78%;
  height: 150px;
  margin-top: 30px;
`;

export const ProductButton = styled.button`
  width: 80%;
  height: 48px;
  outline: none;
  border: 1px solid #ee0e7d;
  color: #ee0e7d;
  background-color: transparent;
  border-radius: 30px;
  padding: 0.5rem 0.5rem;
`;
