<template>
	<article class="dashboard">
		<b-jumbotron tag="header">
			<b-container>
				<h1>{{ $route.name }}</h1>
				<p class="lead" v-if="$route.meta && $route.meta.text">
					Skapa ett projekt.
				</p>
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
