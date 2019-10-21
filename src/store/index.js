import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    lines: []
  },
  mutations: {
    setCharacter(state, data) {
      state.characters.push(data);
    },
    setLine(state, data) {
      state.lines.push(data);
    }
  },
  actions: {
    createCharacter({ commit, state }, data) {
      let characterExist = false;
      state.characters.filter(character => {
        if (character.name === data.name) {
          characterExist = true;
        }
      });
      if (!characterExist) {
        commit("setCharacter", data);
      } else {
        console.log("Nope");
      }
    },
    createLine({ commit }, data) {
      commit("setLine", data);
    }
  },

  plugins: [createPersistedState()]
});
