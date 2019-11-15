<template>
	<b-container tag="form" id="project" @submit.prevent>
		<create></create>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Projekt</h3>
				<b-button v-b-modal.projectCreation variant="success" class="my-3" block>
					<i class="fad fa-theater-masks mr-2"></i>Skapa project
				</b-button>
				<list />
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
