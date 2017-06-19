// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Router from 'vue-router'
import IndexPage from './pages/index'
import VResource from 'vue-resource'

Vue.use(Router)
Vue.use(VResource)
let router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
