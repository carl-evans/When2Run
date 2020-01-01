import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import StorySoFar from './components/StorySoFar.vue'
import HowItWorks from './components/HowItWorks.vue'
import Faqs from './components/Faqs.vue'
import TermsConditions from './components/TermsConditions.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'

import "@/assets/global.css"

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/story-so-far',
      component: StorySoFar
    },
    {
      path: '/how-it-works',
      component: HowItWorks
    },
    {
      path: '/faqs',
      component: Faqs
    },
    {
      path: '/terms-conditions',
      component: TermsConditions
    },
    {
      path: '/privacy-policy',
      component: PrivacyPolicy
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')