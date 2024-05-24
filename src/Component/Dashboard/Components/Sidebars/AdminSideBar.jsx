import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import './AdminSideBar.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../store/actions';
const AdminSideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state
  const [openMenu, setOpenMenu] = useState('');

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/dashboard', { replace: true });
  };

  const handleMenuToggle = (menuName) => {
    setOpenMenu(openMenu === menuName ? '' : menuName);
  };

  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar__user">
        <img src="/user.png" alt="user" />
        <span>Admin</span>{' '}
        {/* <div className="screen-test">
          <button onClick={() => dispath(logOut())}>Đăng xuất</button>
        </div> */}
        <button className="button-logout-sidebars" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
      <div className="admin-sidebar__menu">
        <div className="admin-sidebar__menu__item">
          <Link to="/dashboard" className="admin-sidebar__menu__dashboard">
            Trang chủ
          </Link>
        </div>
        <div className="admin-sidebar__menu__item" onClick={() => handleMenuToggle('consultation')}>
          <span>Tư vấn ăn mặc</span>
          {openMenu === 'consultation' && (
            <div className="admin-sidebar__menu__sub">
              <Link to="/admin/manage-accounts" className="admin-sidebar__menu__sub__item">
                Quản lý tài khoản
              </Link>
              <Link to="/admin/manage-outfit" className="admin-sidebar__menu__sub__item">
                Quản lý outfit
              </Link>
              <Link to="/admin/manage-products" className="admin-sidebar__menu__sub__item">
                Quản lý sản phẩm
              </Link>
            </div>
          )}
        </div>
        <div className="admin-sidebar__menu__item" onClick={() => handleMenuToggle('invoice')}>
          <span>Quản lý hóa đơn</span>
          {openMenu === 'invoice' && (
            <div className="admin-sidebar__menu__sub">
              <Link to="/admin/manage-invoices" className="admin-sidebar__menu__sub__item">
                Quản lý hóa đơn
              </Link>
              <Link to="/admin/manage-invoice-details" className="admin-sidebar__menu__sub__item">
                Quản lý chi tiết hóa đơn
              </Link>
            </div>
          )}
        </div>
        <div className="admin-sidebar__menu__item" onClick={() => handleMenuToggle('employee')}>
          <span>Quản lý nhân viên</span>
          {openMenu === 'employee' && (
            <div className="admin-sidebar__menu__sub">
              <Link to="/admin/add-employee" className="admin-sidebar__menu__sub__item">
                Thêm nhân viên
              </Link>
              <Link to="/admin/edit-employee" className="admin-sidebar__menu__sub__item">
                Chỉnh sửa nhân viên
              </Link>
              <Link to="/admin/delete-employee" className="admin-sidebar__menu__sub__item">
                Xóa nhân viên
              </Link>
            </div>
          )}
        </div>
        <div className="admin-sidebar__menu__item" onClick={() => handleMenuToggle('supplier')}>
          <span>Quản lý nhà cung cấp</span>
          {openMenu === 'supplier' && (
            <div className="admin-sidebar__menu__sub">
              <Link to="/admin/add-supplier" className="admin-sidebar__menu__sub__item">
                Thêm nhà cung cấp
              </Link>
              <Link to="/admin/edit-supplier" className="admin-sidebar__menu__sub__item">
                Chỉnh sửa nhà cung cấp
              </Link>
              <Link to="/admin/delete-supplier" className="admin-sidebar__menu__sub__item">
                Xóa nhà cung cấp
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
