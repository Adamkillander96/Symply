import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () =>
			import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
		children: [
			{
				path: 'projects',
				name: 'projects',
				component: () => import('../components/project/index'),
				meta: {
					type: 'project'
				}
			},
			{
				path: 'characters',
				name: 'characters',
				component: () => import('../components/character/index'),
				meta: {
					type: 'character'
				}
			},
			{
				path: 'scenes',
				name: 'scenes',
				component: () => import('../components/scenes/index'),
				meta: {
					type: 'scenes'
				}
			},
			{
				path: 'lines',
				name: 'lines',
				component: () => import('../components/line/index'),
				meta: {
					type: 'line'
				}
			}
		]
	},
	{
		path: '/play',
		name: 'Play',
		component: () => import(/* webpackChunkName: "play" */ '../views/Play.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'active',
	linkExactActiveClass: '',
	routes
})

export default router
