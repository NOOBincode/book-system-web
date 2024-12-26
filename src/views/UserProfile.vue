<template>
    <div class="profile-page">
      <h1>我的账户</h1>
      <div v-if="user">
        <div class="profile-info">
          <p><strong>用户名:</strong> {{ user.username }}</p>
          <p><strong>邮箱:</strong> {{ user.email }}</p>
          <p><strong>角色:</strong> {{ user.role }}</p>
        </div>
        <div class="profile-actions">
          <button @click="startEditing" class="btn-edit">编辑信息</button>
          <button @click="logout" class="btn-logout">退出登录</button>
        </div>
      </div>
  
      <div v-else>
        <p>正在加载用户信息...</p>
      </div>
  
      <div v-if="isEditing" class="edit-form">
        <h2>编辑资料</h2>
        <form @submit.prevent="saveChanges">
          <div class="form-group">
            <label for="username">用户名:</label>
            <input type="text" id="username" v-model="editedUser.username" required />
          </div>
          <div class="form-group">
            <label for="email">邮箱:</label>
            <input type="email" id="email" v-model="editedUser.email" required />
          </div>
          <button type="submit" class="btn-save">保存</button>
          <button type="button" class="btn-cancel" @click="cancelEditing">取消</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { selectUserByUsername, updateUser, logout } from "@/services/userApi";
  
  export default {
    name: "UserProfile",
    data() {
      return {
        user: null,
        isEditing: false,
        editedUser: {
          username: "",
          email: "",
        },
      };
    },
    methods: {
      async fetchUserProfile() {
        try {
          const username = localStorage.getItem("username"); // 动态获取存储的用户名
          this.user = await selectUserByUsername(username);
          console.log("用户信息:", this.user);
        } catch (error) {
          console.error("加载用户信息失败:", error);
          alert("无法加载用户信息，请稍后重试！");
        }
      },
      startEditing() {
        this.isEditing = true;
        this.editedUser = { ...this.user };
      },
      async saveChanges() {
        try {
          await updateUser(this.editedUser);
          alert("用户信息更新成功！");
          this.isEditing = false;
          this.fetchUserProfile(); // 刷新用户信息
        } catch (error) {
          console.error("更新用户信息失败:", error);
          alert("无法更新用户信息，请稍后重试！");
        }
      },
      cancelEditing() {
        this.isEditing = false;
        this.editedUser = { ...this.user };
      },
      async logout() {
        try {
          await logout();
          alert("您已成功退出登录！");
          this.$router.push("/login");
        } catch (error) {
          console.error("退出登录失败:", error);
          alert("无法退出登录，请稍后重试！");
        }
      },
    },
    mounted() {
      this.fetchUserProfile();
    },
  };
  </script>
  
  <style scoped>
  .profile-page {
    padding: 2rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .profile-info {
    margin-bottom: 1.5rem;
  }
  
  .profile-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .edit-form {
    margin-top: 2rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-edit {
    background-color: #007bff;
    color: white;
  }
  
  .btn-logout {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-save {
    background-color: #28a745;
    color: white;
  }
  
  .btn-cancel {
    background-color: #6c757d;
    color: white;
  }
  </style>
  