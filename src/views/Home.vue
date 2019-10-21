<template>
  <article class="home">
    <b-jumbotron>
      <b-container>
        <h1>Symply</h1>
        <p class="lead">Hjälp för att läsa och lära sig repliker.</p>
      </b-container>
    </b-jumbotron>
    <router-view></router-view>
  </article>
</template>

<script>
export default {
  name: "home"
};
</script>
