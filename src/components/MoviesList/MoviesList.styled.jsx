import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  margin-top: 10px;
`;

export const Item = styled.li`
  width: 250px;
  text-align: center;
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  color: black;
`;

export const Title = styled.h3`
  margin: 0;
`;
