import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  created() {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  },
  render: (h) => h(App),
}).$mount('#app');
