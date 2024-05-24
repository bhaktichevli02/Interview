import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '@/views/student/StudentView.vue';
import UserListView from '@/views/user/UserListView.vue';
import FormView from '@/views/form/FormView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StudentView',
      component: StudentView
    },
    {
      path: '/users',
      name: 'UserListView',
      component: UserListView
    },
    {
      path: '/form',
      name: 'FormView',
      component: FormView
    }
  ]
})

export default router
