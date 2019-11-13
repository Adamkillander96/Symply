import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		project: null,
		scenes: [],
		characters: [],
		lines: [],
		projects: [],
		toast: undefined
	},
	mutations: {
		setProject(state, data) {
			state.project = data
		},
		setScene(state, data) {
			state.scenes.push(data)
		},
		setCharacter(state, data) {
			state.characters.push(data)
		},
		setLine(state, data) {
			state.lines.push(data)
		},
		setToast(state, data) {
			state.toast = data
		}
	},
	actions: {
		createProject({ commit }, data) {
			commit('setProject', data)
		},
		createScene({ commit }, data) {
			commit('setScene', data)
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
			commit('setLine', {
				text: data.text,
				color: data.color,
				icon: data.icon
			})
		}
	},

	plugins: [createPersistedState()]
})
