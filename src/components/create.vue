<template>
	<b-form class="container">
		<b-modal
			id="modal"
			title-html="<i class='fad fa-user-plus fa-fw fa-lg mr-2'></i>Skapa skådespelare"
			hide-footer
		>
			<createCharacters />
		</b-modal>
		<label for="name">
			<i class="fad fa-signature fa-fw fa-lg mr-2"></i>Projektets namn
		</label>
		<b-form-input
			v-model="project.name"
			id="name"
			placeholder="Namn *"
			required
			class="mb-3"
		></b-form-input>
		<label for="description">
			<i class="fad fa-file-signature fa-fw fa-lg mr-2"></i>Beskrivning av
			projektet
		</label>

		<b-textarea
			v-model="project.description"
			id="description"
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
