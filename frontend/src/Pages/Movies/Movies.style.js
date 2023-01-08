import styled from 'styled-components';

export const MoviesGrid = styled.div`
  display: grid;
  margin: 6px;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  /* align-items: center; */
  /* gap: 100px; */
  width: 100%;
`;

export const MoviesGridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const MoviesGridItemTitle = styled.span`
  margin: 1em;
  padding-top: 10px;
  text-align: center;
  font-size: 1em;
  font-weight: lighter;
  text-align: center;
  color: #777da7;
  width: 100%;
  padding: 0.25em 1em;
  background: #d8d8f6;
  border-radius: 4px;
`;

export const MoviesGridImage = styled.img`
  width: 70%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
  object-fit: cover;
  padding: 5px;
  background-color: #1f2041;
  box-shadow: 0 4px 6px 0 #d8d8f6, 0 6px 20px 0 #2c2c34;
`;
