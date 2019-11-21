<template>
	<b-container>
		<b-row>
			<b-col
				v-for="scene in project.scenes"
				:key="scene.key"
				class="p-3 mb-5"
				lg="8"
				offset-lg="2"
				sm="10"
				offset-sm="1"
			>
				<h5>{{ scene.name }}</h5>
				{{ scene.description }}
				<b-list-group class="border-0">
					<b-list-group-item
						class="shadow-sm"
						@click="sayLine(line)"
						v-for="line in scene.lines"
						:key="line.key"
						button
					>
						{{ line.name }}:
						<p>{{ line.text }}</p>
					</b-list-group-item>
				</b-list-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Play',
	computed: {
		...mapState(['project', 'characters'])
	},
	methods: {
		getVoice(name) {
			return this.characters.find(character => {
				if (character.name === name) {
					return character.voice
				}
			})
		},
		sayLine(line) {
			let actor = this.getVoice(line.name)
			window.responsiveVoice.speak(line.text, actor.voice)
		}
	}
}
</script>
