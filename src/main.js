import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';
import VueRouter from 'vue-router'

//components
import CompanySearchBar from "./components/CompanySearchBar";
import CompanyList from "./components/CompanyList";


Vue.config.productionTip = false
Vue.use(Toasted)
Vue.use(VueRouter)


const routes = [
  { path: '/', component: CompanySearchBar },
  { path: '/all', component: CompanyList },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
