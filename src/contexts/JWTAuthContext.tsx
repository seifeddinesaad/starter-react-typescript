import React, { createContext, useEffect, useReducer, ReactNode } from 'react';
import jwtDecode from 'jwt-decode';
import { PayloadAction } from '@reduxjs/toolkit';

import { JWTState, User, DecodedToken, LoginPromise } from '../types/contexts';
import axios from '../utils/axios';
import Loading from '../components/Loading';

const initialAuthState: JWTState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const isValidToken = (token: string): boolean => {
  if (!token) {
    return false;
  }

  const decoded: DecodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (token: string | null) => {
  if (token) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state: JWTState, action: PayloadAction<JWTState>) => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
      };
    }
    case 'LOGIN': {
      const { user } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case 'REGISTER': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  login: (email: string, password: string) => Promise.resolve(),
  register: (
    name: string,
    lastName: string,
    email: string,
    tel: string,
    work: string,
    password: string,
    passwordConfirm: string
  ) => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (email: string, password: string) => {
    const response = await axios.post('/login', {
      email,
      password,
    });
    const user = response.data.data.filtredUser;
    const token = response.data.data.tokens.accessToken;
    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const register = async (
    name: string,
    lastName: string,
    email: string,
    tel: string,
    work: string,
    password: string,
    passwordConfirm: string
  ) => {
    const response = await axios.post('/register', {
      name,
      lastName,
      email,
      password,
      passwordConfirm,
      tel,
      work,
    });
    const { token, user } = response.data.data;
    setSession(token);
    dispatch({
      type: 'REGISTER',
      payload: { user },
    });
  };

  const logout = () => {
    setSession(null);

    // TODO: useReducer with typescript !!!
    // dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    const initialise = async () => {
      try {
        const token = window.localStorage.getItem('token');

        if (token && isValidToken(token)) {
          setSession(token);
          const response = await axios.get('/profile/my');
          const user = response.data.data;

          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALISE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialise();
  }, []);

  if (!state.isInitialised) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        logout,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
