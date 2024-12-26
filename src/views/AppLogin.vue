<template>
  <div class="login-page">
    <div class="login-container">
      <h1>登录</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">用户名</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="请输入用户名"
            @blur="validateField('username')"
            required
          />
          <p v-if="errors.username" class="error">{{ errors.username }}</p>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="请输入密码"
            @blur="validateField('password')"
            required
          />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
        </div>
        <button type="submit" class="btn-login" :disabled="hasErrors">登录</button>
      </form>
      <p class="register-link">
        没有账号? <router-link to="/register">注册</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { login } from "@/services/userApi";
import { validateUsername, validatePassword } from "@/utils/validators";

export default {
  name: "AppLogin",
  data() {
    return {
      username: "",
      password: "",
      errors: {
        username: null,
        password: null,
      },
    };
  },
  computed: {
    hasErrors() {
      return !!this.errors.username || !!this.errors.password;
    },
  },
  methods: {
    validateField(field) {
      if (field === "username") {
        this.errors.username = validateUsername(this.username);
      } else if (field === "password") {
        this.errors.password = validatePassword(this.password);
      }
    },
    validateAllFields() {
      this.validateField("username");
      this.validateField("password");
    },
    async handleLogin() {
      this.validateAllFields();

      if (this.hasErrors) {
        alert("请修正表单错误后再提交");
        return;
      }

      try {
        const response = await login(this.username, this.password);
        if (response === "登录成功") { // 假设后端返回的 JSON 包含 success 字段
          localStorage.setItem("username", this.username); // 存储用户名
          alert(response.message || "登录成功");
          this.$router.push("/home"); // 跳转到首页或其他页面
        } else {
          alert(response.message || "登录失败");
        }
      } catch (error) {
        console.error("登录失败", error);
        alert("服务器错误，请稍后重试!");
      }
    }
  },
};
</script>
