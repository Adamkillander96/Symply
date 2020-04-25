<template>
	<b-container>
		{{ playing }}
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
						@click="say_line(line)"
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
import { mapState, mapGetters } from 'vuex'
export default {
	name: 'Play',
	data: () => ({
		playing: false
	}),
	computed: {
		...mapState(['project', 'characters']),
		...mapGetters(['get_character', 'get_all_characters'])
	},
	methods: {
		togglePlaying(isPlaying) {
			this.playing = isPlaying
		},
		say_line(line) {
			let actor = this.get_character(line.name)
			if (actor.real) {
				return
			}
			window.responsiveVoice.speak(line.text, actor.voice, {
				onstart: () => this.togglePlaying(true),
				onend: () => this.togglePlaying(false)
			})
		}
	}
}
</script>
