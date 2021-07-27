import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #03ffa5;
  min-height: 560px;
  padding: 5rem 5rem;
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled(LeftSection)`
  align-items: center;
`;

export const Title = styled.h2`
width: 20%;
  color: #000;
`;

export const Text = styled.span``;

export const ProductCard = styled.div`
  width: 209px;
  height: 271px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
