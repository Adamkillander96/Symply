<template>
	<b-container tag="form" id="lines" @submit.prevent>
		<b-row>
			<b-col lg="6">
				<h3 class="mb-3">Skapa replikerna</h3>
				<create />
			</b-col>
			<b-col lg="6">
				<h3 class="mb-3">Repliker</h3>
				<list />
			</b-col>
		</b-row>
		<b-row class="test-center">
			<b-col offset-lg="3" lg="6">
				<b-button variant="success" size="lg">
					<i class="fad fa-save"></i>
					Spara
				</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'Lines',
	components: {
		create: () => import(`./create`),
		list: () => import(`./list`)
	},
	data: () => ({
		character: {
			name: '',
			real: false
		}
	}),
	computed: {
		...mapState({
			lines: state => state.lines
		})
	},
	methods: {
		...mapActions(['createCharacter'])
	}
}
</script>
