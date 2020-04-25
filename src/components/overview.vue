<template>
	<b-container>
		<b-row>
			<b-col class="mt-n5 mb-3" lg="6">
				<b-card class="bg-primary shadow border-0 text-light">
					<b-card-title>
						<i class="fad fa-theater-masks fa-fw fa-lg mr-2"></i>Projekt
					</b-card-title>
					<b-card-sub-title sub-title-text-variant="light mb-3"
						>Alla mina projekt</b-card-sub-title
					>
					<b-card-text
						class="border-left bg-primary-darken shadow p-3"
						v-for="project in projects"
						:key="project.key"
					>
						{{ project.name }}
						<b-button variant="outline-light" @click="select_project(project)">
							<i class="fad fa-pencil fa-fw fa-lg mr-2"></i>Välj
						</b-button>
					</b-card-text>
				</b-card>
			</b-col>
			<b-col class="mt-lg-n5 mb-3" lg="6">
				<b-card class="bg-info shadow border-0 text-light">
					<b-card-title>
						<i class="fad fa-users fa-fw fa-lg mr-2"></i>Skådespelare
					</b-card-title>
					<b-card-sub-title sub-title-text-variant="light mb-3"
						>Alla mina skådespelare</b-card-sub-title
					>
					<b-card-text
						class="border-left bg-info-darken shadow p-3"
						v-for="character in characters"
						:key="character.key"
						>{{ character.name }}</b-card-text
					>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	data: () => ({
		items: [{}]
	}),
	computed: {
		...mapState(['characters', 'projects'])
	},
	methods: {
		...mapActions(['select_project'])
	}
}
</script>
