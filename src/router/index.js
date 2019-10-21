import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		children: [
			{
				path: '/create-characters',
				name: 'createcharacters',
				component: () => import('../components/character/index'),
				meta: {
					type: 'character'
				}
			},
			{
				path: '/create-lines',
				name: 'createlines',
				component: () => import('../components/line/index'),
				meta: {
					type: 'line'
				}
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
