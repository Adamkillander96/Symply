<template>
	<b-modal id="sceneCreation" title="Skapa scener" hide-footer>
		<b-form-input
			v-model="newScene.name"
			placeholder="Namn"
			class="mb-3"
		></b-form-input>
		<b-textarea v-model="newScene.description" col="5"></b-textarea>
		<b-checkbox-group
			class="my-3"
			v-model="newScene.actors"
			:options="project.actors"
			text-field="name"
		></b-checkbox-group>
		<b-button
			:disabled="newScene.name === ''"
			block
			variant="success"
			@click="sendScene(newScene)"
		>
			<i class="fad fa-users-class mr-2"></i> Lägg till
		</b-button>
	</b-modal>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
	name: 'createScenes',
	data: () => ({
		newScene: {
			name: '',
			description: '',
			actors: [],
			lines: []
		}
	}),
	computed: {
		...mapState(['project', 'scenes'])
	},
	methods: {
		...mapActions(['createScene']),
		sendScene(scene) {
			this.createScene(scene)
			this.newScene = {
				name: '',
				description: '',
				actors: []
			}
		}
	}
}
</script>
