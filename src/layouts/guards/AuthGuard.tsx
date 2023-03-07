import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/login');
    }
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
