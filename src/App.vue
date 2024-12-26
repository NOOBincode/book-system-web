<template>
  <div id="app">
    <!-- 路由内容展示 -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #42b983;
  padding: 10px 0;
  margin-bottom: 20px;
}

.nav-links {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin: 0 15px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
