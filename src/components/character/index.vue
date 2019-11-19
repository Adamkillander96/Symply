<template>
	<b-container tag="form" id="character" @submit.prevent>
		<b-row class="justify-content-center">
			<b-col lg="6">
				<h3 class="mb-3">Karaktärer</h3>
				<list />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'Character',
	components: {
		list: () => import(`./list`)
	}
}
</script>
