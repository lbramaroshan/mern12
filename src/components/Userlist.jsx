import React, { useState, useEffect } from 'react';
import { FaSearch, FaUserEdit, FaTrash, FaPlus, FaSort, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockUsers = [
          { id: 1, name: 'Lalit Tamatta', email: 'lalit@gmail.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15' },
          { id: 2, name: 'Bijaya Tamang', email: 'bijaya@gmail.com', role: 'User', status: 'Active', joinDate: '2023-02-20' },
          { id: 3, name: 'Sashank khadgi', email: 'sashank@gmail.com', role: 'Editor', status: 'Inactive', joinDate: '2023-03-10' },
          { id: 4, name: 'Diom Lamichhane', email: 'diom@gmail.com', role: 'User', status: 'Active', joinDate: '2023-04-05' },
          { id: 5, name: 'Arjun Tamatta', email: 'arjun@gmail.com', role: 'User', status: 'Pending', joinDate: '2023-05-12' },
          { id: 6, name: 'Tapendra Tamatta', email: 'tapendra@gmail.com', role: 'Manager', status: 'Active', joinDate: '2023-06-18' },
          { id: 7, name: 'Saeaswati bk', email: 'saeaswati@gmail.com', role: 'User', status: 'Inactive', joinDate: '2023-07-22' },
          { id: 8, name: 'lbtramaroshani', email: 'lbtramaroshani@gmail.com', role: 'Editor', status: 'Active', joinDate: '2023-08-30' },
        ];
        
        setUsers(mockUsers);
        setIsLoading(false);
      } catch (error) {
        toast.error('Failed to load users');
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm) ||
    user.role.toLowerCase().includes(searchTerm) ||
    user.status.toLowerCase().includes(searchTerm)
  );

  const deleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
      toast.success('User deleted successfully');
    }
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'status-active';
      case 'inactive': return 'status-inactive';
      case 'pending': return 'status-pending';
      default: return '';
    }
  };

  return (
    <div className="user-management">
      <div className="user-header">
        <h2>User Management</h2>
        <div className="user-actions">
          <Link to="/users/add" className="btn-add">
            <FaPlus className="icon" /> Add New User
          </Link>
        </div>
      </div>

      <div className="user-controls">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-options">
          <button className="btn-filter">
            <FaFilter className="icon" /> Filter
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading users...</p>
        </div>
      ) : (
        <div className="user-table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  <div className="th-content">
                    Name <FaSort className={`sort-icon ${sortConfig.key === 'name' ? 'active' : ''}`} />
                  </div>
                </th>
                <th onClick={() => handleSort('email')}>
                  <div className="th-content">
                    Email <FaSort className={`sort-icon ${sortConfig.key === 'email' ? 'active' : ''}`} />
                  </div>
                </th>
                <th onClick={() => handleSort('role')}>
                  <div className="th-content">
                    Role <FaSort className={`sort-icon ${sortConfig.key === 'role' ? 'active' : ''}`} />
                  </div>
                </th>
                <th onClick={() => handleSort('status')}>
                  <div className="th-content">
                    Status <FaSort className={`sort-icon ${sortConfig.key === 'status' ? 'active' : ''}`} />
                  </div>
                </th>
                <th onClick={() => handleSort('joinDate')}>
                  <div className="th-content">
                    Join Date <FaSort className={`sort-icon ${sortConfig.key === 'joinDate' ? 'active' : ''}`} />
                  </div>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">{user.name.charAt(0)}</div>
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                    <td>
                      <div className="action-buttons">
                        <Link to={`/users/edit/${user.id}`} className="btn-edit">
                          <FaUserEdit />
                        </Link>
                        <button 
                          onClick={() => deleteUser(user.id)} 
                          className="btn-delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="no-results">
                  <td colSpan="6">No users found matching your search criteria</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <style jsx>{`
        .user-management {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .user-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .user-header h2 {
          color: #2c3e50;
          font-size: 1.8rem;
          font-weight: 600;
        }

        .btn-add {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .btn-add:hover {
          background-color: #2980b9;
          transform: translateY(-1px);
        }

        .user-controls {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .search-box {
          position: relative;
          flex-grow: 1;
          max-width: 400px;
        }

        .search-box input {
          width: 100%;
          padding: 0.6rem 1rem 0.6rem 2.5rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .search-box input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #7f8c8d;
        }

        .btn-filter {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background-color: #f8f9fa;
          color: #2c3e50;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-filter:hover {
          background-color: #e9ecef;
        }

        .loading-spinner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: #7f8c8d;
        }

        .spinner {
          width: 3rem;
          height: 3rem;
          border: 4px solid rgba(52, 152, 219, 0.2);
          border-top: 4px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .user-table-container {
          overflow-x: auto;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          background-color: white;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        .user-table th {
          background-color: #f8f9fa;
          color: #2c3e50;
          font-weight: 600;
          text-align: left;
          padding: 1rem;
          cursor: pointer;
          user-select: none;
          position: sticky;
          top: 0;
        }

        .th-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .sort-icon {
          color: #bdc3c7;
          transition: all 0.2s ease;
        }

        .sort-icon.active {
          color: #3498db;
        }

        .user-table td {
          padding: 1rem;
          border-bottom: 1px solid #eee;
          vertical-align: middle;
        }

        .user-table tr:last-child td {
          border-bottom: none;
        }

        .user-table tr:hover td {
          background-color: #f8fafc;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .status-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .status-active {
          background-color: #e3f7e8;
          color: #27ae60;
        }

        .status-inactive {
          background-color: #feeaea;
          color: #e74c3c;
        }

        .status-pending {
          background-color: #fff8e6;
          color: #f39c12;
        }

        .action-buttons {
          display: flex;
          gap: 0.8rem;
        }

        .btn-edit, .btn-delete {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-edit {
          background-color: #e3f2fd;
          color: #1976d2;
        }

        .btn-edit:hover {
          background-color: #bbdefb;
        }

        .btn-delete {
          background-color: #ffebee;
          color: #d32f2f;
        }

        .btn-delete:hover {
          background-color: #ffcdd2;
        }

        .no-results td {
          text-align: center;
          padding: 2rem;
          color: #7f8c8d;
        }

        @media (max-width: 768px) {
          .user-controls {
            flex-direction: column;
          }
          
          .search-box {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default UserList;