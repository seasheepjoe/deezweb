import VueRouter from 'vue-router';
import App from '../App.vue';

const routes = [
    { path: '/foo', component: App }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;