<template>
	<b-card no-body class="mb-1">
		<b-card-header header-tag="header" class="p-1" role="tab">
			<b-button block href="#" v-b-toggle="`scene-${index}`" variant="info">
				{{ scene.name }}
				<small>{{ scene.actors.length }} skådespelare</small>
			</b-button>
		</b-card-header>
		<b-collapse :id="`scene-${index}`" visible accordion="my-accordion" role="tabpanel">
			<b-card-body>
				<b-list-group v-if="scene.lines">
					<b-list-group-item v-for="line in scene.lines" :key="line.id">
						<b-badge v-if="line.scene">{{ line.scene }}</b-badge>
						<h5>{{ line.name }}</h5>
						<p>{{ line.text }}</p>
					</b-list-group-item>
				</b-list-group>
				<create></create>
			</b-card-body>
			<b-card-footer>
				<b-button v-b-modal.lineCreation variant="success" class="my-3" block>
					<i class="fad fa-comments mr-2"></i>Skapa repliker
				</b-button>
			</b-card-footer>
		</b-collapse>
	</b-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'listLines',
	components: {
		create: () => import(`./create`)
	},
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
	methods: {
		...mapActions([''])
	}
}
</script>
