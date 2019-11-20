<template>
	<div id="symply">
		<Navbar />
		<main>
			<router-view />
		</main>
		<Toast />
		<Footer />
	</div>
</template>

<script>
export default {
	components: {
		Navbar: () => import('./components/nav'),
		Toast: () => import('./components/toast'),
		Footer: () => import('./components/footer')
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
