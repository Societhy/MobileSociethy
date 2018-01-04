export default [
  {
    path: '/userProfil/:userId',
    component: require('./assets/vue/pages/userProfil.vue')
  }, 
  {
    path: '/notification',
    component: require('./assets/vue/pages/notification.vue')
  },
  {
    path: '/allOrga',
    component: require('./assets/vue/pages/allOrganization.vue')
  },
  {
    path: '/search',
    component: require('./assets/vue/pages/search.vue')
  }, 
  {
    path: '/contact',
    component: require('./assets/vue/pages/contact.vue')
  },
  {
    path: '/chat/:chatId/:firstname',
    component: require('./assets/vue/pages/chat.vue')
  },
  {
    path: '/register',
    component: require('./assets/vue/pages/register.vue')
  },
  {
    path: '/',
    component: require('main.vue')
  }
]
