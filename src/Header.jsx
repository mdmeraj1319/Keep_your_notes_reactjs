import React from 'react';
import logo from './Images/mj.jpg';
const Header = () =>{
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" height="60px" />
        <h1> Keep your Notes 👨‍⚖️ </h1>
      </div>
    </>
  );
};

export default Header;