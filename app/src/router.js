import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Counter from './components/Counter.vue';
import About from './components/About.vue';

Vue.config.debug = true
Vue.config.devtools = true;
Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true
});

router.map({
  '/home': {
    name: 'home',
    component: Home
  },
  
  '/counter': {
    name: 'counter',
    component: Counter
  },
  
  '/about': {
    name: 'about',
    component: About
  }
});

router.redirect({
  '*': '/home'
});

export default router;