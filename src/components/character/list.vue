<template>
  <b-list-group v-if="characters[0]">
    <b-list-group-item v-for="character in characters" :key="character.id">
      <i class="fa-fw fad" :class="[ character.real ? 'fa-user' : 'fa-robot' ]"></i>
      {{ character.name }} ({{ character.voice }})
    </b-list-group-item>
  </b-list-group>
  <b-alert v-else show variant="info">Det finns inga karaktärer!</b-alert>
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
