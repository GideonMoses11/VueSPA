require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);


Vue.component('main-app', require('./components/App.vue').default);


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router
});