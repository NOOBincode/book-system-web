import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
// 开启 Vue DevTools 支持
app.config.devtools = true;

app.use(router);
app.mount('#app');
