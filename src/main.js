import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
