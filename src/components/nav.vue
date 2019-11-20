<template>
	<b-navbar class="shadow" toggleable="md" id="nav">
		<b-container>
			<b-navbar-brand to="/">Symply</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item
						v-for="item in items"
						:key="item.key"
						:to="{ name: item.to }"
						>{{ item.name }}</b-nav-item
					>
					<b-nav-item-dropdown right>
						<template v-slot:button-content>Dashboard</template>
						<b-dropdown-item exact :to="{ name: 'Dashboard' }"
							>Översikt</b-dropdown-item
						>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-item
							v-for="item in dropdown"
							:key="item.key"
							:to="{ name: item.to }"
							exact
							>{{ item.name }}</b-dropdown-item
						>
					</b-nav-item-dropdown>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right>
						<template v-slot:button-content>User</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {
	data: () => ({
		items: [
			{
				name: 'Hem',
				to: 'Home',
				icon: 'fad fa-home'
			},
			{
				name: 'Träna',
				to: 'Play',
				icon: 'fad'
			}
		],
		dropdown: [
			{ name: 'Skapa', icon: 'fad fa-tools', to: 'Create' },
			{ name: 'Projekt', icon: 'fad fa-chart-network', to: 'Projects' },
			{ name: 'Skådespelare', icon: 'fad fa-users', to: 'Characters' }
		]
	})
}
</script>
