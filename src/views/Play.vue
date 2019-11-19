<template>
	<article class="dashboard">
		<b-jumbotron>
			<b-container>
				<h1>Dashboard</h1>
				<p class="lead">Text text</p>
			</b-container>
		</b-jumbotron>
		<b-container>
			<b-row v-for="line in lines" :key="line.key">
				<b-col
					class="shadow-sm p-3 mb-5"
					lg="8"
					offset-lg="2"
					sm="10"
					offset-sm="1"
				>
					<h5>{{ line.name }}</h5>
					{{ line.text }}
				</b-col>
			</b-row>
		</b-container>
	</article>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Play',
	computed: {
		...mapState(['projects', 'characters', 'lines'])
	}
}
</script>
