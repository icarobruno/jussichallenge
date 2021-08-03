import styled from "styled-components";

export const ProductCard = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ProductName = styled.span`
  width: 50%;
  font-size: 16px;
  font-weight: 500;
  margin-right: 2rem;
`;

export const ProductDescription = styled.span`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 50%;
  height: 48px;
  outline: none;
  border: 1px solid #000;
  border-radius: 8px;
  margin-left: 20%;
  margin-top: 1.5rem;
  background-color: transparent;
`;

export const SpanText = styled.span`
  font-size: 20px;
  text-align: center;
`;
