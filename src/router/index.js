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
				path: 'project',
				name: 'createprojects',
				component: () => import('../components/project/index'),
				meta: {
					type: 'project'
				}
			},
			{
				path: 'characters',
				name: 'createcharacters',
				component: () => import('../components/character/index'),
				meta: {
					type: 'character'
				}
			},
			{
				path: 'lines',
				name: 'createlines',
				component: () => import('../components/line/index'),
				meta: {
					type: 'line'
				}
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
