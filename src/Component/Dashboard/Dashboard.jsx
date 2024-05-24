import React from 'react';
import AdminSideBar from './Components/Sidebars/AdminSideBar';
import contentPage from './Components/Pagecontent/contentPage';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div>
      {isLoggedIn ? (
        <div className="page-container">
          <div className="page-sidebar-wrapper">
            <AdminSideBar />
          </div>
          <div className="page-content-wrapper">
            <contentPage />
          </div>
        </div>
      ) : (
        <Navigate to={'/'} replace={true} />
      )}
    </div>
  );
}

export default Dashboard;
