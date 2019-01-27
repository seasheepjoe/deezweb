import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import VueRouter from 'vue-router';
import store from '@/store/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faHeartbeat, faHeartBroken, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faHeartBroken, faHeartbeat, faSearch, faPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
