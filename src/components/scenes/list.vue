<template>
	<b-list-group class="mb-5" v-if="project.scenes[0]">
		<b-list-group-item
			v-for="scene in project.scenes"
			:key="scene.id"
			class="flex-column align-items-start"
		>
			<div class="d-flex w-100 justify-content-between">
				<h4 class="mb-1">{{ scene.name }}</h4>
				<small>{{ scene.actors.length }} actors</small>
			</div>
			<p class="my-2">{{ scene.description }}</p>
		</b-list-group-item>
	</b-list-group>
	<b-alert v-else show variant="info">Det finns inga scener!</b-alert>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'listScenes',
	data: () => ({}),
	computed: {
		...mapState(['project'])
	},
	methods: {
		...mapActions([''])
	}
}
</script>
