<template>
    <div class="user-list-page">
      <h1>用户列表</h1>
      <button class="btn-add" @click="navigateToAddUser">添加用户</button>
      <table class="user-table">
        <thead>
          <tr>
            <th>用户ID</th>
            <th>用户名</th>
            <th>邮箱</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.user_id">
            <td>{{ user.user_id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.created_at }}</td>
            <td>
              <button class="btn-edit" @click="editUser(user.user_id)">编辑</button>
              <button class="btn-delete" @click="deleteUser(user.user_id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { deleteUser, checkUserList } from "@/services/userApi";
  
  export default {
    name: "UserList",
    data() {
      return {
        users: [],
      };
    },
    methods: {
      async fetchUsers() {
        this.users = await checkUserList();
      },
      async deleteUser(userId) {
        if (confirm("确认删除此用户吗？")) {
          await deleteUser(userId);
          alert("用户删除成功");
          this.fetchUsers();
        }
      },
      navigateToAddUser() {
        this.$router.push("/addUser");
      },
      editUser(userId) {
        this.$router.push(`/editUser/${userId}`);
      },
    },
    mounted() {
      this.fetchUsers();
    },
  };
  </script>
  
  <style scoped>
  .user-list-page {
    padding: 2rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .btn-add {
    display: block;
    margin: 1rem auto;
    background-color: #42b983;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-add:hover {
    background-color: #0056b3;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  
  .user-table th,
  .user-table td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: center;
  }
  
  .user-table th {
    background-color: #f4f4f4;
  }
  
  .btn-edit,
  .btn-delete {
    margin: 0 0.2rem;
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-edit {
    background-color: #007bff;
    color: white;
  }
  
  .btn-edit:hover {
    background-color: #0056b3;
  }
  
  .btn-delete {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-delete:hover {
    background-color: #c82333;
  }
  </style>
  