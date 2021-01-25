import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 20px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5px;

  :focus {
    border: 1px solid #0047bb;
  }
`;

export const SearchButton = styled.input.attrs({ type: 'submit' })`
  margin-left: 20px;
  padding: 0px 30px;
  border-radius: 50px;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  outline: none;
  background-color: #0047bb;
`;
