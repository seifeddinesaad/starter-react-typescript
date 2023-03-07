import React from 'react';
import WindowDimensions from '../../utils/windowDimenssions';
// import constants from '../../data/constants';
// import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDropdown from '../../components/MenuDropdown';
// const drawerWidth = constants.DRAWER_WIDTH;
import SearchBar from '../../components/SearchBar';
type Props = {
  handleDrawerToggle?: any;
};
const Header = ({ handleDrawerToggle }: Props) => {
  const { width }: any = WindowDimensions();
  return (
    <div className="header">
      {width < 900 && (
        <MenuIcon
          // color="inherit"
          // aria-label="open drawer"
          // edge="start"
          onClick={handleDrawerToggle}
        />
      )}
      {width > 900 && <SearchBar placeholder="what you are loking for?" />}
      <MenuDropdown />
    </div>
  );
};

export default Header;
