<template>
	<b-container tag="form" id="scenes" @submit.prevent>
		<create></create>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Scener</h3>
				<b-button v-b-modal.sceneCreation variant="success" class="my-3" block>
					<i class="fad fa-theater-masks mr-2"></i>Skapa scen
				</b-button>
				<list />
			</b-col>
			<b-col lg="6" offset-lg="3" class="text-center">
				<b-button variant="success" size="lg" @click="save_project()">
					<i class="fad fa-save fa-fw mr-2"></i>Spara projekt
				</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Scenes',
	components: {
		create: () => import(`./create`),
		list: () => import(`./list`)
	},
	methods: {
		...mapActions(['save_project'])
	}
}
</script>
