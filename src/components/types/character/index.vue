<template>
  <b-container tag="form" id="character" @submit.prevent>
    <b-row>
      <b-col lg="6">
        <h3 class="mb-3">Skapa karaktär</h3>
        <create />
      </b-col>
      <b-col lg="6">
        <h3 class="mb-3">Karaktärer</h3>
        <list />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Character",
  components: {
    create: () => import(`./create`),
    list: () => import(`./list`)
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
