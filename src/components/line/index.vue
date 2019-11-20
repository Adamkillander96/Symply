<template>
	<b-container tag="form" id="lines" @submit.prevent>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Skapa replikerna</h3>
			</b-col>
		</b-row>
		<list />
	</b-container>
</template>

<script>
export default {
	name: 'Lines',
	components: {
		list: () => import(`./list`)
	}
}
</script>
