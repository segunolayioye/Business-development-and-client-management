import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../views/new-dashboard.vue'
import retail from '../views/retail.vue'
import investment from '../views/investment.vue'
import campaigns from '../views/campaigns.vue'
import investor from '../views/investor.vue'
import support from '../views/support.vue'
import newapp from '../views/new-app.vue'
import client from '../views/client-overview.vue'
import campaignmanagement from '../views/campaignmanagement.vue'
import createproduct from '../views/create-product.vue'
import notifications from '../views/notifications.vue'
import calender from '../views/calender.vue'
import clientprofile from '../views/clientprofile.vue'
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard,
  },

  {
    path: '/retail',
    name: 'retail',
    component: retail,
  },

  {
    path: '/investment-product',
    name: 'investment',
    component: investment,
  },

  {
    path: '/campaigns',
    name: 'campaigns',
    component: campaigns,
  },

  {
    path: '/investor',
    name: 'investor',
    component: investor,
  },
  {
    path: '/help-center',
    name: 'support',
    component: support,
  },
  {
    path: '/new-app',
    name: 'newapp',
    component: newapp,
  },
  {
    path: '/client-overview',
    name: 'client',
    component: client,
  },
  {
    path: '/campaignmanagement',
    name: 'campaignmanagement',
    component: campaignmanagement,
  },
  {
    path: '/create-product',
    name: 'createproduct',
    component: createproduct,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: notifications,
  },
  { path: '/calender',
    name: 'calender',
    component: calender
    
  },
  {
  path: '/client/:id',
  name: 'clientprofile',
  component: () => import('../views/clientprofile.vue')
}


] 

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router