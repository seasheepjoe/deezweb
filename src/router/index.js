import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Search from '@/components/Search.vue';
import Favorites from '@/components/Favorites.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/favorites', component: Favorites },
];

const router = new VueRouter({
    // mode: 'history',
    routes
});

export default router;