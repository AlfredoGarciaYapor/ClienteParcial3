import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateService from '../views/CreateService.vue'
import Schedule from '../views/Schedule.vue'
import Login from '../views/Login.vue'
import Agenda from '../views/Agenda.vue'
import Services from '../views/Services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/createService',
    name: 'CreateService',
    component: CreateService
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services
  }
]

const router = new VueRouter({
  routes
})

export default router
