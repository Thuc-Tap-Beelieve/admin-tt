import React from 'react';
import AdminSideBar from './Components/Sidebars/AdminSideBar';
import ContentPage from './Components/Pagecontent/contentPage';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div>
      {isLoggedIn ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
              <AdminSideBar />
            </div>
            <div className="col-md-10">
              <ContentPage />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={'/'} replace={true} />
      )}
    </div>
  );
}

export default Dashboard;
