<template>
	<b-form class="container">
		<b-modal id="modal" hide-header hide-footer>
			<createCharacters />
		</b-modal>
		<b-form-input
			v-model="project.name"
			placeholder="Namn *"
			required
			class="mb-3"
		></b-form-input>
		<b-textarea
			v-model="project.description"
			placeholder="Beskrivning..."
			col="5"
		></b-textarea>
		<b-button variant="primary" class="my-3" v-b-modal.modal>
			<i class="fad fa-user-plus fa-fw mr-2"></i>Skapa skådespelare
		</b-button>
		<b-checkbox-group
			class="my-3"
			v-model="project.actors"
			:options="characters"
			text-field="name"
			v-if="characters"
		></b-checkbox-group>
		<hr class="my-4" />
		<b-button
			:disabled="project.name === ''"
			block
			variant="success"
			@click="createProject(project)"
		>
			<i class="fad fa-theater-masks mr-2"></i> Lägg till
		</b-button>
	</b-form>
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
	components: {
		createCharacters: () => import('./character/create')
	},
	data: () => ({
		project: {
			name: '',
			description: '',
			actors: [],
			scenes: []
		}
	}),
	computed: {
		...mapState(['characters'])
	},
	methods: {
		...mapActions(['createProject'])
	}
}
</script>
