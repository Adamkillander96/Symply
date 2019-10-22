<template>
	<article class="dashboard">
		<b-jumbotron>
			<b-container>
				<h1>Dashboard</h1>
				<p class="lead">Text text</p>
			</b-container>
		</b-jumbotron>
		<router-view></router-view>
	</article>
</template>

<script>
export default {
	name: 'Dashboard'
}
</script>
