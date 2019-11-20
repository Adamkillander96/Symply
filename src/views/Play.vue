<template>
	<article class="play">
		<b-jumbotron>
			<b-container>
				<h1>Träna repliker</h1>
				<p class="lead">Välj projekt och träna!</p>
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
