import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { avatarByGender } from '../../utils/methods';
import useAuth from '../../hooks/useAuth';
//import { fetchUser } from '../../data/slices/userSlice';

import imAvatar from '../../assets/img/icons/avatar.png';
import ActionLink from '../ActionLink';
import {
  Avatar,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useAppDispatch } from '../../hooks/redux';
type Props = {
  name?: string;
};
const MenuDropdown = ({ name }: Props) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();
  const { user, status, error } = useSelector((state: any) => state.user);

  /* useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);*/

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.TouchEvent<HTMLAnchorElement>
  ) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef<boolean>(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch({ type: 'LOGOUT' });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar
          alt={user?.name}
          src={avatarByGender({ avatar: null, gender: 'male' })}
          id="img-preview"
        />
        <div className="user__info">
          <span className="title">
            {/* {`${user?.name} ${user?.last_name}`} */}
            user
          </span>
          <span className="subtitle">student</span>
        </div>
        <div className="icon-holder">
          <KeyboardArrowDown />
        </div>
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              marginTop: '12px',
            }}
          >
            <Paper style={{ marginRight: '0.2rem' }}>
              <ClickAwayListener onClickAway={() => handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose} component={Link} to="/mon-profile">
                    <ActionLink
                      label="Mon profil"
                      // icon="AccountBox"
                      className="text-muted full-width"
                      url="/mon-profil"
                    />
                  </MenuItem>
                  <MenuItem onClick={() => handleLogout()} component={Link} to="#">
                    <ActionLink
                      label="Déconnecter"
                      // icon="ExitToApp"
                      className="text-muted full-width"
                      url="#"
                    />
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

MenuDropdown.propTypes = {};

export default MenuDropdown;
