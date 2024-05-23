import React from 'react';
import AdminSideBar from './Components/Sidebars/AdminSideBar';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div>
      {isLoggedIn ? (
        <div className="Sidebars">
          <AdminSideBar />
        </div>
      ) : (
        <Navigate to={'/'} replace={true} />
      )}
    </div>
  );
}

export default Dashboard;
