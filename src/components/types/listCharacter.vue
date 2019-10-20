<template>
  <b-list-group>
    <b-list-group-item v-for="character in characters" :key="character.id">
      {{
      character.name
      }}, {{ character.real }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "listCharacter",
  data: () => ({}),
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  },
  methods: {
    ...mapActions([""])
  }
};
</script>
