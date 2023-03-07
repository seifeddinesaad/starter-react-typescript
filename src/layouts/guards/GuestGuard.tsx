import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const GuestGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      return navigate('/');
    }
  }, []);

  return <>{children}</>;
};

export default GuestGuard;
