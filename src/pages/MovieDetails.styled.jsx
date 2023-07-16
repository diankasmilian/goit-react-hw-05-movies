import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  background-color: #911116;
  color: white;
  cursor: pointer;
  text-decoration: none;
  padding: 5px 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Container = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

export const Title = styled.h1`
  margin-bottom: 5px;
  margin-top: 0;
  color: #911116;
`;

export const Text = styled.p`
  font-size: 17px;
  margin: 0;
`;

export const SecondTitle = styled.h2`
  margin-bottom: 5px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

export const Info = styled(Link)`
  display: flex;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid #911116;
  background-color: #911116;
  color: white;
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 80px;
  justify-content: center;

  &:hover {
    background-color: white;
    color: #911116;
  }
`;
