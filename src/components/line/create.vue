<template>
	<b-modal id="lineCreation" title="Skapa repliker" hide-footer>
		<b-form-group>
			<b-form-select
				class="mb-3"
				v-model="selectedActor"
				:options="characters"
				value-field="name"
				text-field="name"
				id="select-actor"
			>
				<template v-slot:first>
					<option :value="null">Karaktär...</option>
				</template>
			</b-form-select>

			<b-form-textarea
				class="mb-3"
				id="textarea"
				v-model="text"
				placeholder="..."
				rows="3"
				max-rows="6"
			></b-form-textarea>
			<b-btn variant="warning" @click="sendLine">
				<i class="fad fa-layer-plus mr-2"></i>Skapa replik
			</b-btn>
		</b-form-group>
	</b-modal>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'createLine',
	data: () => ({
		selectedScene: null,
		selectedActor: null,
		text: ''
	}),
	computed: {
		...mapState(['lines', 'characters', 'scenes', 'project'])
	},
	methods: {
		...mapActions(['createLine']),
		sendLine() {
			let newLine = {
				scene: this.selectedScene,
				name: this.selectedActor,
				text: this.text
			}

			this.createLine(newLine)
			this.text = ''
		}
	}
}
</script>
