<template>
  <b-container tag="form" id="lines" @submit.prevent>
    <b-row>
      <b-col>
        <h3 class="mb-3">Skapa karaktär</h3>
        <createCharacter />
        <h3 class="mb-3">Skapa replikerna</h3>
        <createLines />
      </b-col>
      <b-col>
        <h3 class="mb-3">Karaktärer</h3>
        <listCharacter />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Lines",
  components: {
    createCharacter: () => import("./types/createCharacter"),
    listCharacter: () => import("./types/listCharacter"),
    createLines: () => import("./types/createLines")
  },
  data: () => ({
    character: {
      name: "",
      real: false
    }
  }),
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  },
  methods: {
    ...mapActions(["createCharacter"])
  }
};
</script>
