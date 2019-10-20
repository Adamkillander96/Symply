<template>
  <article class="home">
    <b-jumbotron>
      <b-container>
        <h1>Symply</h1>
        <p class="lead">Hjälp för att läsa och lära sig repliker.</p>
      </b-container>
    </b-jumbotron>
    <lines />
  </article>
</template>

<script>
export default {
  name: "home",
  components: {
    lines: () => import("@/components/lines.vue")
  }
};
</script>
