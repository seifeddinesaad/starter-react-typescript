import React from 'react';
import { Link } from 'react-router-dom';
import ImLogo from '../../assets/img/logo.svg';

type Props = {
  handleDrawerToggle?: any;
  mobileOpen?: any;
};
const Index = ({ handleDrawerToggle, mobileOpen }: Props) => {
  return (
    <Link to="/" className="logo">
      <img alt="logo" src={ImLogo} />
      <span>WebSchool</span>
    </Link>
  );
};

export default Index;
