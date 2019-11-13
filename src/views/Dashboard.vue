<template>
	<article class="dashboard">
		<b-jumbotron>
			<b-container>
				<h1>Dashboard</h1>
				<p class="lead">Skapa ett projekt.</p>
			</b-container>
		</b-jumbotron>
		<b-container>
			<h2>Dina första steg</h2>
			<p>Skapa först dina karaktärer som ska vara med.</p>
		</b-container>
		<b-nav class="container px-3 mb-3" fill pills>
			<b-nav-item v-for="item in items" :key="item.key" :to="{ name: item.to }">
				<i :class="item.icon" class="fa-fw"></i>
				{{ item.name }}
			</b-nav-item>
		</b-nav>
		<router-view></router-view>
	</article>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Dashboard',
	data: () => ({
		items: [
			{ name: 'Steg 1', icon: 'fad fa-users', to: 'characters' },
			{ name: 'Steg 2', icon: 'fad fa-chart-network', to: 'projects' },
			{ name: 'Steg 3', icon: 'fad fa-presentation', to: 'scenes' },
			{ name: 'Steg 4', icon: 'fad fa-comments', to: 'lines' }
		]
	}),
	computed: {
		...mapState(['characters', 'projects', 'lines'])
	}
}
</script>
