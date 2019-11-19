<template>
	<b-list-group class="mb-5" v-if="characters[0]">
		<b-list-group-item
			class="d-flex align-items-center"
			v-for="character in characters"
			:key="character.id"
		>
			<i
				class="fa-fw mr-2 fad"
				:class="[character.real ? 'fa-user' : 'fa-robot']"
			></i>
			{{ character.name }} ({{ character.voice }})
			<b-button variant="outline-danger ml-auto">
				<i class="fad fa-trash-alt fa-fw"></i>
			</b-button>
		</b-list-group-item>
	</b-list-group>
	<b-alert v-else show variant="info">Det finns inga karaktärer!</b-alert>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'listCharacter',
	data: () => ({}),
	computed: {
		...mapState({
			characters: state => state.characters
		})
	},
	methods: {
		...mapActions([''])
	}
}
</script>
