<template>
	<b-navbar toggleable="md" id="nav">
		<b-container>
			<b-navbar-brand to="/">Symply</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/dashboard">Dashboard</b-nav-item>
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
