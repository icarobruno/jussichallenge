import styled from "styled-components";

export const Image = styled.img`
  width: 160px;
  height: 40px;
`;

export const SearchInput = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  background: ##ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 24px;
  padding-left: 1rem;
  align-items: center;
`;

export const Input = styled.input`
  width: 85%;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ee0e7d !important;
    font-size: 16px;
  }
`;
