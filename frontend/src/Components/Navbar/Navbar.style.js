import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: black;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 5px;
  width: 100%;
  color: white;
`;

export const NavbarOption = styled.a`
  background-color: transparent;
  text-decoration: none;
  font-family: Red/Black, sans-serif;
  font-feature-settings: 'smcp', 'zero';
  &:hover {
    cursor: pointer;
    color: yellow;
  }
`;

export const UserGreeting = styled.span``;
