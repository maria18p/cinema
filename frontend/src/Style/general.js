import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  font-size: 25px;
  font-family: Red/Black, sans-serif;
  font-feature-settings: 'smcp', 'zero';
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ContainerGrid2 = styled.div`
  display: grid;
  gap: 15px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
`;

export const InputLabel = styled.label`
  color: white;
  font-size: 20px;
  font-family: Red/Black, sans-serif;
  font-feature-settings: 'smcp', 'zero';
`;

export const FormInput = styled.input`
  color: white;
  border: 1px solid white;
  font-size: 15px;
  font-family: Red/Black, sans-serif;
  font-feature-settings: 'smcp', 'zero';
  background: transparent;
  text-align: center;
  border-radius: 15px;
`;

export const FormSubmit = styled.button`
  color: white;
  border: 0.5px solid white;
  border-radius: 15px;
  width: 50%;
  padding: 5px;
  &:hover {
    background-color: yellow;
    cursor: pointer;
    color: black;
  }
`;

export const PageWithSidebarContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

export const FormSelect = styled.select`
  color: white;
  font-size: 15px;
  font-family: Red/Black, sans-serif;
  font-feature-settings: 'smcp', 'zero';
`;

export const SelectOption = styled.option`
  background-color: black;
  padding: 10px;
`;
