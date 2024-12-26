<template>
    <div class="home-page">
      <!-- 导航栏 -->
      <header class="navbar">
        <div class="logo">
          <h1>Book System</h1>
        </div>
        <nav>
          <ul class="nav-links">
            <li><router-link to="/profile">我的账户</router-link></li>
            <li><a @click="logout">退出登录</a></li>
          </ul>
        </nav>
      </header>
  
      <!-- 欢迎区域 -->
      <section class="welcome-section">
        <h2>欢迎来到图书管理系统</h2>
        <p>在这里你可以管理书籍、查看预约信息并管理账户。</p>
      </section>
  
      <!-- 主要功能块 -->
      <section class="features">
        <div class="feature-block">
          <h3>书籍管理</h3>
          <p>浏览、添加、编辑和删除书籍。</p>
          <router-link to="booklist" class="btn">查看书籍</router-link>
        </div>
        <div class="feature-block">
          <h3>预约管理</h3>
          <p>查看预约记录或进行预约操作。</p>
          <router-link to="reservationList" class="btn">查看预约</router-link>
        </div>
        <div class="feature-block">
          <h3>账户管理</h3>
          <p>管理你的个人账户信息。</p>
          <router-link to="profile" class="btn">管理账户</router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppHome",
    methods: {
      $router: undefined,
      logout() {
        // 模拟退出登录
        alert("您已退出登录");
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  /* 页面整体样式 */
  .home-page {
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  /* 导航栏样式 */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #42b983;
    color: white;
  }
  
  .navbar .logo h1 {
    margin: 0;
  }
  
  .navbar .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
  }
  
  .navbar .nav-links li {
    display: inline;
  }
  
  .navbar .nav-links a {
    text-decoration: none;
    color: white;
  }
  
  .navbar .nav-links a:hover {
    text-decoration: underline;
  }
  
  /* 欢迎区域样式 */
  .welcome-section {
    text-align: center;
    padding: 2rem;
    background-color: #f9f9f9;
    margin: 1rem 0;
  }
  
  .welcome-section h2 {
    margin-bottom: 0.5rem;
  }
  
  .welcome-section p {
    color: #555;
  }
  
  /* 主要功能块样式 */
  .features {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
  }
  
  .feature-block {
    text-align: center;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 30%;
  }
  
  .feature-block h3 {
    margin-bottom: 0.8rem;
    color: #42b983;
  }
  
  .feature-block p {
    margin-bottom: 1rem;
    color: #555;
  }
  
  .feature-block .btn {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background-color: #42b983;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
  }
  
  .feature-block .btn:hover {
    background-color: #0056b3;
  }
  </style>
  