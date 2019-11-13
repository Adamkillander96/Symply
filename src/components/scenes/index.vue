<template>
	<b-container tag="form" id="scenes" @submit.prevent>
		<create></create>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Scener</h3>
				<list />
				<b-button v-b-modal.sceneCreation variant="success" block>
					<i class="fad fa-theater-masks mr-2"></i>Skapa scen
				</b-button>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Scenes',
	components: {
		create: () => import(`./create`),
		list: () => import(`./list`)
	}
}
</script>
