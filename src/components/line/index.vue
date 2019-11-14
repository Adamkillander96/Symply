<template>
	<b-container tag="form" id="lines" @submit.prevent>
		<create></create>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Skapa replikerna</h3>
				<list />
				<b-button v-b-modal.lineCreation variant="success" block>
					<i class="fad fa-comments mr-2"></i>Skapa repliker
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
