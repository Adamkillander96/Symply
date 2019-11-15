<template>
	<b-container tag="form" id="lines" @submit.prevent>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Skapa replikerna</h3>
				<list v-for="(scene, index) in project.scenes" :key="scene.key" :scene="scene" :index="index" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'Lines',
	components: {
		list: () => import(`./list`)
	},
	computed: {
		...mapState(['lines', 'project'])
	},
	methods: {
		...mapActions(['createCharacter'])
	}
}
</script>
