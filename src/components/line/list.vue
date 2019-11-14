<template>
	<b-list-group>
		<b-list-group-item v-for="character in lines" :key="character.id">
			<b-badge v-if="character.scene">{{ character.scene }}</b-badge>
			<h5>{{ character.name }}</h5>
			<p>{{ character.text }}</p>
		</b-list-group-item>
	</b-list-group>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'listLines',
	data: () => ({}),
	computed: {
		...mapState({
			lines: state => state.lines
		})
	},
	methods: {
		...mapActions([''])
	}
}
</script>
