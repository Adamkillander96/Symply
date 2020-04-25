<template>
	<b-row>
		<b-col
			lg="6"
			offset-lg="3"
			v-for="(scene, index) in project.scenes"
			:key="scene.key"
		>
			<b-card no-body class="shadow border-0 mb-1">
				<b-card-header header-tag="header" class="p-0" role="tab">
					<b-button
						block
						href="#"
						v-b-toggle="`scene-${index}`"
						class="d-flex"
						variant="info"
					>
						{{ scene.name }}
						<b-badge class="align-self-end ml-auto" variant="light"
							>{{ get_all_characters.length }} skådespelare</b-badge
						>
					</b-button>
				</b-card-header>
				<b-collapse
					:id="`scene-${index}`"
					visible
					accordion="my-accordion"
					role="tabpanel"
				>
					<b-card-body>
						<b-list-group v-if="scene.lines">
							<b-list-group-item
								class="mb-3"
								v-for="line in scene.lines"
								:key="line.id"
							>
								<b-badge v-if="line.scene">{{ line.scene }}</b-badge>
								<h5>{{ line.name }}</h5>
								<p>{{ line.text }}</p>
							</b-list-group-item>
						</b-list-group>
						<create :scene="scene" :index="index"></create>
					</b-card-body>
				</b-collapse>
			</b-card>
		</b-col>
	</b-row>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
	name: 'listLines',
	components: {
		create: () => import(`./create`)
	},
	computed: {
		...mapState(['lines', 'project']),
		...mapGetters(['get_all_characters'])
	},
	methods: {
		...mapActions([''])
	}
}
</script>
