import React, { useState } from 'react';

const UserManagementTable = () => {
  const [users, setUsers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
    setShowAddForm(false);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setShowEditForm(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Tìm kiếm..." />
        <button onClick={() => setShowAddForm(true)}>Xuất file Excel</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Tên User</th>
            <th>Số điện thoại</th>
            <th>Gmail</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th>Tình năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td></td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.status}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setShowEditForm(true);
                  }}
                >
                  Sửa
                </button>
                <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAddForm && <AddUserForm onAddUser={handleAddUser} />}
      {showEditForm && <EditUserForm user={selectedUser} onEditUser={handleEditUser} />}
    </div>
  );
};

const AddUserForm = ({ onAddUser }) => {};

const EditUserForm = ({ user, onEditUser }) => {};

export default UserManagementTable;
