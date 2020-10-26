import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { AuthStatus } from '../constants';

export default function useAuthenticate() {
  const history = useHistory();
  const status = useSelector(state => state.auth.status);
  useEffect(() => {
    if (status === AuthStatus.Notlogin) {
      history.replace('/login');
    }
  }, [status, history])
}
