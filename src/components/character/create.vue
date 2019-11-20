<template>
	<b-card class="p-0 border-0">
		<b-form-input
			v-model="character.name"
			placeholder="Namn"
			class="mb-3"
		></b-form-input>
		<b-form-checkbox v-model="character.real" size="lg" class="mb-3" switch>
			<span>Ska läsas upp av en person</span>
		</b-form-checkbox>
		<b-form-select v-model="character.voice" class="mb-3">
			<option value="Swedish Female" selected>Kvinnlig röst</option>
			<option value="Swedish Male">Manlig röst</option>
		</b-form-select>
		<b-button
			:disabled="character.name === '' && character.voice !== null"
			block
			variant="success"
			@click="sendCharacter()"
		>
			<i class="fad fa-user-plus mr-2"></i> Lägg till
		</b-button>
	</b-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'createCharacter',
	data: () => ({
		character: {
			name: '',
			real: false,
			voice: 'Swedish Female'
		}
	}),
	methods: {
		...mapActions(['createCharacter']),
		sendCharacter() {
			this.createCharacter(this.character)
			this.character = {
				name: '',
				real: false,
				voice: 'Swedish Female'
			}
		}
	}
}
</script>
