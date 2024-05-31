<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    /> -->

    <div class="wrapper">
      <HelloWorld msg="Did it!" msg2="lol" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/template">Template Grammer</RouterLink>
        <RouterLink to="/reactivity">Reactivity</RouterLink>
        <RouterLink to="/computed">Computed</RouterLink>
        <RouterLink to="/conditionalRender">Conditional Render</RouterLink>
        <RouterLink to="/listRender">List Render</RouterLink>
        <RouterLink to="/event">Event</RouterLink>
        <RouterLink to="/form">Form Input Bind</RouterLink>
        <RouterLink to="/lifecycle">Lifecycle Hooks</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.layout {
  padding: 20px;
  margin-top: 40px;
  border-top: 2px solid grey;
}
</style>
