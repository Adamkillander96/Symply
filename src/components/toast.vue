<template>
  <b-toast id="toast" title="BootstrapVue" static no-auto-hide
    >Hello, world! This is a toast message.</b-toast
  >
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Toast",
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
