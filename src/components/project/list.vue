<template>
	<b-list-group class="mb-5" v-if="projects[0]">
		<b-list-group-item
			v-for="project in projects"
			:key="project.id"
			class="flex-column align-items-start"
		>
			<div class="d-flex w-100 justify-content-between">
				<h4 class="mb-1">{{ project.name }}</h4>
				<small>{{ project.actors.length }} actors</small>
			</div>
			<p class="my-2">{{ project.description }}</p>
			<b-button variant="primary ml-auto" @click="select_project(project)"
				>Välj</b-button
			>
		</b-list-group-item>
	</b-list-group>
	<b-alert v-else show variant="info">Det finns inga project!</b-alert>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'listProjects',
	computed: {
		...mapState({
			projects: state => state.projects
		})
	},
	methods: {
		...mapActions(['select_project'])
	}
}
</script>
