<template>
  <b-input-group prepend="Namn" class="my-3">
    <b-form-input v-model="character.name"></b-form-input>
    <b-input-group-append is-text>
      <b-form-checkbox v-model="character.real" switch>
        <span>Människa</span>
      </b-form-checkbox>
    </b-input-group-append>
    <b-input-group-append>
      <b-button :disabled="character.name === ''" variant="info" @click="sendCharacter()">
        <i class="fad fa-user-plus mr-2"></i>Lägg till
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "createCharacter",
  data: () => ({
    character: {
      name: "",
      real: false
    }
  }),
  computed: {
    ...mapState(["characters"])
  },
  methods: {
    ...mapActions(["createCharacter"]),
    sendCharacter() {
      let newCharacter = {
        name: this.character.name,
        real: this.character.real
      };

      this.createCharacter(newCharacter);
      this.character = {
        name: "",
        real: false
      };
    }
  }
};
</script>
