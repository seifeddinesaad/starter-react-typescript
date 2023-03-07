import React from 'react';
import constants from '../../data/constants';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { Divider, Drawer, Paper } from '@mui/material';
const drawerWidth = constants.DRAWER_WIDTH;
type Props = {
  handleDrawerToggle?: any;
  mobileOpen?: any;
  window?: any;
  className?: string;
};

const Sidebar = ({ handleDrawerToggle, mobileOpen, window, className }: Props) => {
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={`sidebar ${className}`}>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default Sidebar;
