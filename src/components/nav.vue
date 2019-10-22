<template>
	<b-navbar toggleable="md" type="dark" variant="transparent" id="nav">
		<b-container>
			<b-navbar-brand href="#">Symply</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/about">About</b-nav-item>
					<b-nav-item-dropdown right>
						<template v-slot:button-content
							>Skapa</template
						>
						<b-dropdown-item variant :to="{ name: 'createprojects' }"
							>Projekt</b-dropdown-item
						>
						<b-dropdown-item variant :to="{ name: 'createcharacters' }"
							>Karaktär</b-dropdown-item
						>
						<b-dropdown-item variant :to="{ name: 'createlines' }"
							>Repliker</b-dropdown-item
						>
					</b-nav-item-dropdown>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown right>
						<template v-slot:button-content
							>User</template
						>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>
