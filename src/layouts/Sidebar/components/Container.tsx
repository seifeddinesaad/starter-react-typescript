import React from 'react';
import { useDispatch } from 'react-redux';
import ContainerItems from './ContainerItems';
import constants from '../../../data/constants';

const list = constants.SIDEBAR_LIST;
// type Props = {
//   handleDrawerToggle?: any;
//   mobileOpen?: any;
// };
const Container = () => {
  // const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item, index) => {
            if (item.permission === true) return null;
            return <ContainerItems key={index} item={item} />;
          })}
      </ul>
    </div>
  );
};

Container.propTypes = {};

export default Container;
