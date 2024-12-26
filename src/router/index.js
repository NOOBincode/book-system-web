import { createRouter, createWebHistory } from 'vue-router';
import AppLogin from '@/views/AppLogin.vue';
import AppHome from '@/views/AppHome.vue';
import BookList from '@/views/BookList.vue';
import ReservationList from '@/views/ReservationList.vue';
import UserList from '@/views/UserList.vue';
import AddBooks from '@/views/AddBooks.vue';
import EditBooks from '@/views/EditBooks.vue';
import UserProfile from '@/views/UserProfile.vue';
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin,
  },
  {
    path: '/home',
    name: 'AppHome',
    component: AppHome,
  },
  {
    path: '/bookList',
    name: 'BookList',
    component: BookList,
  },
  {
    path: '/reservationList',
    name: 'ReservationList',
    component: ReservationList,
  },
  {
    path: '/userList',
    name: 'UserList',
    component: UserList,
  },

  {
    path: '/addBooks',
    name: 'AddBooks',
    component: AddBooks,
  },
  {
    path: '/editBook/:bookId(\\d+)',
    name: 'EditBooks',
    component: EditBooks,
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
