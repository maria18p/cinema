import styled from 'styled-components';

export const VerticalContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const SeatContainer = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;

export const EmptySeat = styled.button`
  width: 75%;
  background-color: #78bc61;
  border: 1px solid grey;
  border-radius: 15px;

  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;

export const OccupiedSeat = styled.button`
  padding: 10px;
  width: 75%;
  background-color: #f0544f;
  border: 1px solid grey;
  border-radius: 15px;

  /* &:hover {
		background-color: black;
		cursor: pointer;
		color: white;
	} */
`;

export const Submit = styled.button`
  font-size: 20px;
  border: 1px solid grey;
  border-radius: 15px;
  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;
