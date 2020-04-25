<template>
	<b-modal id="projectCreation" title="Skapa projekt" hide-footer>
		<b-form-input
			v-model="project.name"
			placeholder="Namn"
			class="mb-3"
		></b-form-input>
		<b-textarea v-model="project.description" col="5"></b-textarea>
		<b-checkbox-group
			class="my-3"
			v-model="project.actors"
			:options="characters"
			text-field="name"
		></b-checkbox-group>
		<b-button
			:disabled="project.name === ''"
			block
			variant="success"
			@click="sendProject()"
		>
			<i class="fad fa-theater-masks mr-2"></i> Lägg till
		</b-button>
	</b-modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
	name: 'create_project',
	data: () => ({
		project: {
			name: '',
			description: '',
			actors: [],
			scenes: []
		}
	}),
	computed: {
		...mapState(['characters', 'projects'])
	},
	methods: {
		...mapActions(['create_project']),
		sendProject() {
			this.create_project(this.project)
			this.project = {
				name: '',
				description: '',
				actors: [],
				lines: []
			}
			this.$router.push({ name: 'Scenes' })
		}
	}
}
</script>
