<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/books">图书管理</router-link></li>
        <li><router-link to="/users">用户管理</router-link></li>
        <li><router-link to="/login">登录</router-link></li> <!-- 登录入口 -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #42b983;
    padding: 1rem;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
  }
  
  .navbar li {
    margin-right: 1rem;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  