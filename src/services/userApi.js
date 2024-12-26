import axios from 'axios';

const BASE_URL = 'http://localhost:8080/user';

// 预设的axios实例
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 删除用户
export const deleteUser = (userId) => {
  return api.delete(`/${userId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting user:', error);
      throw error;
    });
};

// 添加用户
export const insertUser = (user) => {
  return api.post('/add', user)
    .then(response => response.data)
    .catch(error => {
      console.error('Error adding user:', error);
      throw error;
    });
};

// 根据用户ID查询用户
export const selectUserById = (userId) => {
  return api.get(`/${userId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching user by ID:', error);
      throw error;
    });
};

// 根据用户名查询用户
export const selectUserByUsername = (username) => {
  return api.get(`/username/${username}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching user by username:', error);
      throw error;
    });
};

// 更新用户信息
export const updateUser = (user) => {
  return api.put('/update', user)
    .then(response => response.data)
    .catch(error => {
      console.error('Error updating user:', error);
      throw error;
    });
};

// 修改密码
export const changePassword = (username, password) => {
  return api.put('/changePassword', null, {
    params: { username, password }
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Error changing password:', error);
      throw error;
    });
};

// 登录
export const login = (username, password) => {
    return api.post('/login', { username, password })
        .then(response => response.data) // 处理返回数据
        .catch(error => {
            console.error('Error logging in:', error.response?.data || error.message);
            throw error;
        });
};



// 获取用户列表
export const checkUserList = () => {
  return api.get('/checkUserList')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching user list:', error);
      throw error;
    });
};

// 登出
export const logout = () => {
  return api.get('/logout')
    .then(response => response.data)
    .catch(error => {
      console.error('Error logging out:', error);
      throw error;
    });
};

export default {
  deleteUser,
  insertUser,
  selectUserById,
  selectUserByUsername,
  updateUser,
  changePassword,
  login,
  checkUserList,
  logout,
};
