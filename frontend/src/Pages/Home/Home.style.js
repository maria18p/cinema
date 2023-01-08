import styled from 'styled-components';

export const VerticalContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const SeatContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;

export const EmptySeat = styled.button`
  background-color: #78bc61;
  width: 75%;
  padding: 15px;
  width: 75%;
  align-items: center;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
    rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  cursor: pointer;
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
  align-items: center;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
    rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  cursor: pointer;
  border-radius: 15px;
`;

export const Submit = styled.button`
  align-items: center;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
    rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  cursor: pointer;
  /* width: 40%; */
  height: 33px;
  border-radius: 15px;
  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
  }
`;
