import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #911116;
    color: #911116;
  }

  input::placeholder {
    color: #bdcab1;
  }

  button {
    padding: 5px 10px;
    border-radius: 50px;
    border: 1px solid #911116;
    background-color: #911116;
    color: white;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background-color: white;
    color: #911116;
    border: 1px solid #911116;
  }
`;
