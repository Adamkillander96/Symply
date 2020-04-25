import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		project: null,
		projects: [],
		scenes: [],
		selectedScene: null,
		characters: [],
		lines: [],
		toast: undefined
	},
	getters: {
		get_character: state => {
			return character_name => {
				return state.characters.find(({ name }) => {
					return name === character_name
				})
			}
		},
		get_all_characters: state => state.characters
	},
	mutations: {
		set_project(state, data) {
			state.project = data
		},
		set_projects(state, data) {
			state.projects.push(data)
		},
		set_scene(state, data) {
			state.project.scenes
				? state.project.scenes.push(data)
				: (state.project.scenes = [data])
		},
		set_select_scene(state, data) {
			state.selectedScene = data
		},
		set_character(state, data) {
			state.characters.push(data)
		},
		set_line(state, data) {
			state.project.scenes[data.index].lines.push(data.line)
		},
		set_lines(state, data) {
			state.project.scenes[data.index].lines = []
		},
		set_toast(state, data) {
			state.toast = data
		}
	},
	actions: {
		create_project({ commit }, data) {
			commit('set_project', data)
			router.push({ name: 'Scenes' })
		},
		select_project({ commit }, data) {
			commit('set_project', data)
			router.push({ name: 'Lines' })
		},
		save_project({ commit, state }) {
			commit('set_projects', state.project)
			router.push({ name: 'Lines' })
		},
		create_scene({ commit }, data) {
			commit('set_scene', data)
		},
		select_scene({ state, commit }, data) {
			state.project.scenes.find(scene => {
				if (scene.name === data.name) {
					commit('set_select_scene', scene)
				}
			})
		},
		create_character({ commit, state }, data) {
			let characterExist = false
			state.characters.filter(character => {
				if (character.name === data.name) {
					characterExist = true
				}
			})
			if (!characterExist) {
				commit('set_character', data)
			} else {
				commit('set_toast', {
					text: data.name + ' finns redan!',
					color: 'warning',
					icon: 'fad fa-warning'
				})
			}
		},
		create_line({ commit, state }, data) {
			if (
				state.project.scenes[data.index] &&
				state.project.scenes[data.index].lines
			) {
				commit('set_line', data)
			} else {
				commit('set_lines', {
					index: data.index
				})
				commit('set_line', data)
			}
		},
		create_toast({ commit }, data) {
			commit('set_toast', {
				text: data.text,
				color: data.color,
				icon: data.icon
			})
		}
	},

	plugins: [createPersistedState()]
})
