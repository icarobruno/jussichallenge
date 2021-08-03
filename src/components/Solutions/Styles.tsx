import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 557px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem 13rem;

  @media only screen and (max-width: 768px) {
    padding: 0 0;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const TitleHash = styled.span`
  font-weight: bold;
  font-size: 32px;
  color: #03ffa5;
`;

export const TitleText = styled.span`
  font-weight: bold;
  font-size: 32px;
  margin-left: 0.5rem;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 25%;
  min-height: 381px;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  padding: 1rem 1rem;

  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const CardAvatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f2f2f2;
  border-radius: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 32px;
  text-transform: uppercase;
`;

export const CardName = styled.span`
  font-weight: bold;
  font-size: 16px;
  margin-top: 3.5rem;
`;

export const CardDescription = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #ee0e7d;
  margin-top: 1.3rem;
`;

export const CardList = styled.ul`
  padding-left: 1rem;
  margin-top: 0.8rem;
`;

export const CardListItem = styled.li`
  color: #5b5b5b;
  font-weight: 500;
  font-size: 12px;
`;

export const CardButton = styled.button`
  width: 90%;
  height: 48px;
  outline: none;
  background-color: #03ffa5;
  border-radius: 6px;
  border: none;
  font-size: 16px;
`;
