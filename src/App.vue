<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="sidebar">
      <img alt="Estus Flask" class="logo" src="https://static.wikia.nocookie.net/darksouls/images/0/08/Estus_Flask_%28DSIII%29_-_01.png" />
      <nav>
        <RouterLink to="/" style="color: gold;">Home</RouterLink>
        <RouterLink to="/about" style="color: gold;">About</RouterLink>
        <RouterLink to="/ds" style="color: gold;">Dark Souls</RouterLink>
        <RouterLink to="/er" style="color: gold;">Elden Ring</RouterLink>
      </nav>
    </div>
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
  header {
    display: contents;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #444;
    color: #fff;
    padding: 0 1rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #333;
    color: #fff;
  }

  .logo {
    display: block;
    margin: 1rem auto;
    width: 100px;
  }

  nav {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  nav a {
    display: block;
    padding: 0.5rem 1rem;
    border-left: 3px solid transparent;
    color: #fff;
  }

  nav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-left-color: #ffd700;
  }

  .main {
    margin-left: 200px;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: static;
      padding-bottom: 1rem;
    }

    .logo {
      display: none;
    }

    .main {
      margin-left: 0;
    }
  }
</style>
