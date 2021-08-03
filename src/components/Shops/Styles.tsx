import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 10%;
  background-color: #f2f2f2;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex-wrap: wrap;
  }
`;

export const Text = styled.h2`
  font-size: 16px;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
`;
