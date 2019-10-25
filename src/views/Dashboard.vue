<template>
	<article class="dashboard">
		<b-jumbotron>
			<b-container>
				<h1>Dashboard</h1>
				<p class="lead">Text text</p>
			</b-container>
		</b-jumbotron>
		<b-nav class="container px-3 mb-3" fill pills>
			<b-nav-item v-for="item in items" :key="item.key" :to="{ name: item.to }">{{ item.name }}</b-nav-item>
		</b-nav>
		<router-view></router-view>
	</article>
</template>

<script>
export default {
	name: 'Dashboard',
	data: () => ({
		items: [
			{ name: 'Steg 1', to: 'characters' },
			{ name: 'Steg 2', to: 'projects' },
			{ name: 'Steg 3', to: 'lines' }
		]
	})
}
</script>
