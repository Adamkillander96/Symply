<template>
	<b-container tag="form" id="project" @submit.prevent>
		<create></create>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Projekt</h3>
				<list />
				<b-button v-b-modal.projectCreation variant="success" block>
					<i class="fad fa-theater-masks mr-2"></i>Skapa project
				</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Project',
	components: {
		create: () => import(`./create`),
		list: () => import(`./list`)
	}
}
</script>
