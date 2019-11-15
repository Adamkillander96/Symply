<template>
	<b-form-group id="lineCreation">
		<b-form-select
			class="mb-3"
			v-model="selectedActor"
			:options="scene.actors"
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
import { mapActions } from 'vuex'
export default {
	name: 'createLine',
	props: {
		scene: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	},
	data: () => ({
		selectedActor: null,
		text: ''
	}),
	methods: {
		...mapActions(['createLine']),
		sendLine() {
			let newLine = {
				name: this.selectedActor,
				text: this.text
			}

			this.createLine(newLine)
			this.text = ''
		}
	}
}
</script>
