<template>
	<b-form-group>
		<b-form-select
			class="mb-3"
			v-model="selectedScene"
			:options="scenes"
			value-field="name"
			text-field="name"
			id="select-scene"
		>
			<template v-slot:first>
				<option :value="null">Scene...</option>
			</template>
		</b-form-select>
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
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'createCharacter',
	data: () => ({
		selectedScene: null,
		selectedActor: null,
		text: ''
	}),
	computed: {
		...mapState(['lines', 'characters', 'scenes'])
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
