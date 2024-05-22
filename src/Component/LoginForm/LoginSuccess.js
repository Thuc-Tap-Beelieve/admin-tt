import React, { useEffect } from 'react';
import { loginSuccess } from '../store/actions/authAction';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function LoginSuccess() {
  const { userID } = useParams();
  const dispath = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispath(loginSuccess(userID));
  }, []);

  return <div>{isLoggedIn && <Navigate to={'/dashboard'} replace={true} />}</div>;
}

export default LoginSuccess;
