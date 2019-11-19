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
	mutations: {
		setProject(state, data) {
			state.project = data
		},
		setProjects(state, data) {
			state.projects.push(data)
		},
		setScene(state, data) {
			state.project.scenes
				? state.project.scenes.push(data)
				: (state.project.scenes = [data])
		},
		setSelectScene(state, data) {
			state.selectedScene = data
		},
		setCharacter(state, data) {
			state.characters.push(data)
		},
		setLine(state, data) {
			state.project.scenes[data.index].lines
				? state.project.scenes[data.index].lines.push(data.line)
				: (state.project.scenes[data.index].lines = [data.line])
		},
		setToast(state, data) {
			state.toast = data
		}
	},
	actions: {
		createProject({ commit }, data) {
			commit('setProject', data)
			router.push({ name: 'Scenes' })
		},
		saveProject({ commit, state }) {
			commit('setProjects', state.project)
			router.push({ name: 'Lines' })
		},
		createScene({ commit }, data) {
			commit('setScene', data)
		},
		selectScene({ state, commit }, data) {
			state.project.scenes.find(scene => {
				if (scene.name === data.name) {
					commit('setSelectScene', scene)
				}
			})
		},
		createCharacter({ commit, state }, data) {
			let characterExist = false
			state.characters.filter(character => {
				if (character.name === data.name) {
					characterExist = true
				}
			})
			if (!characterExist) {
				commit('setCharacter', data)
			} else {
				commit('setToast', {
					text: data.name + ' finns redan!',
					color: 'warning',
					icon: 'fad fa-warning'
				})
			}
		},
		createLine({ commit }, data) {
			commit('setLine', data)
		},
		createToast({ commit }, data) {
			commit('setToast', {
				text: data.text,
				color: data.color,
				icon: data.icon
			})
		}
	},

	plugins: [createPersistedState()]
})
