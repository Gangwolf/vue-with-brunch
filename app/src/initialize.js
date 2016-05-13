import { sync } from 'vuex-router-sync';
import store from './state/store.js';
import router from './router.js';
import App from './App.vue';

sync(store, router);
router.start(App, '#app');
