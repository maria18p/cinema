import React from 'react';
import shortid from 'shortid';
import { SidebarContainer, SidebarItem } from './Sidebar.Style';

const SidebarView = (props) => {
  const generateOptions = () => {
    return (
      <>
        {props.sidebarOptions.map((option, index) => {
          return (
            <SidebarItem key={shortid.generate()} onClick={() => props.optionClicked(option)}>
              {option}
            </SidebarItem>
          );
        })}
      </>
    );
  };

  return <SidebarContainer>{generateOptions()}</SidebarContainer>;
};

export default SidebarView;
