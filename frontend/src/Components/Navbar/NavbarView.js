import React from 'react';
import shortid from 'shortid';
import { NavbarContainer, NavbarOption } from './Navbar.style';

const NavbarView = (props) => {
  const addOptions = () => {
    return (
      <>
        {props.options.map((option, index) => {
          return (
            <NavbarOption key={shortid.generate()} onClick={() => props.goTo(option)}>
              {option}
            </NavbarOption>
          );
        })}
      </>
    );
  };

  return <NavbarContainer>{addOptions()}</NavbarContainer>;
};

export default NavbarView;
