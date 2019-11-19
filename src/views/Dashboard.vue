<template>
	<article class="dashboard">
		<b-jumbotron>
			<b-container>
				<h1>Dashboard</h1>
				<p class="lead">Skapa ett projekt.</p>
			</b-container>
		</b-jumbotron>
		<router-view></router-view>
	</article>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Dashboard',
	computed: {
		...mapState(['characters', 'projects', 'lines'])
	}
}
</script>
