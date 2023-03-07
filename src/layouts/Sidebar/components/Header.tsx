import React from 'react';
import Logo from '../../../components/Logo';

type Props = {
  handleDrawerToggle?: any;
  mobileOpen?: any;
};

const Header = ({ handleDrawerToggle, mobileOpen }: Props) => {
  return (
    <div className="sidebar__header">
      <Logo />
    </div>
  );
};

export default Header;
