import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Search from '@/components/Search.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;