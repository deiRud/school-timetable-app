import { createRouter, createWebHistory } from 'vue-router';
import Timetable from '../components/Timetable.vue'; 
import DayDetail from '../components/DayDetail.vue'; 

const routes = [
  {
    path: '/',
    name: 'Timetable',
    component: Timetable
  },
  {
    path: '/day/:day',
    name: 'dayDetail',
    component: DayDetail,
    props: true // This allows you to pass route params as props to the component
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;