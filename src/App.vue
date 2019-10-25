<template>
	<div id="symply">
		<navbar />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script>
export default {
	components: {
		navbar: () => import('./components/nav')
	}
}
</script>

<style lang="scss">
@import 'assets/variables.scss';

body {
	font-family: 'Open Sans', sans-serif !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Roboto Condensed', sans-serif !important;
}
</style>
