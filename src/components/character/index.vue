<template>
  <b-container tag="form" id="character" @submit.prevent>
    <create></create>
    <b-row class="justify-content-center">
      <b-col lg="6">
        <h3 class="mb-3">Karaktärer</h3>
        <list />
        <b-button v-b-modal.characterCreation variant="success" block>
          <i class="fad fa-user-plus mr-2"></i>Skapa karaktär
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Character",
  components: {
    create: () => import(`./create`),
    list: () => import(`./list`)
  }
};
</script>
