<template>
  <div>
    <b-form-input
      v-model="character.name"
      placeholder="Namn"
      class="mb-3"
    ></b-form-input>
    <b-form-checkbox v-model="character.real" size="lg" class="mb-3" switch>
      <span>Människa</span>
    </b-form-checkbox>
    <b-form-select v-model="character.voice" class="mb-3">
      <option :value="null">Välj en Röst</option>
      <option value="Swedish Female">Kvinnlig röst</option>
      <option value="Swedish Male">Manlig röst</option>
    </b-form-select>
    <b-button
      :disabled="character.name === ''"
      block
      variant="info"
      @click="sendCharacter()"
    >
      <i class="fad fa-user-plus mr-2"></i>Lägg till
    </b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "createCharacter",
  data: () => ({
    character: {
      name: "",
      voice: null,
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
