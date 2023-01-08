import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarItem = styled.span`
  color: white;
  padding: 5px;
  margin-left: 10px;
  &:hover {
    width: 8em;
    height: 5ex;
    background-color: yellow;
    border: 1px hidden firebrick;
    border-radius: 5px;
    font-weight: bold;
    color: yellow;
    cursor: pointer;
  }
`;
