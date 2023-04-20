<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="sidebar">
      <img alt="Estus Flask" class="logo flask-image" src="https://static.wikia.nocookie.net/darksouls/images/0/08/Estus_Flask_%28DSIII%29_-_01.png" />
      <nav>
        <RouterLink to="/" class="navitem">Home</RouterLink>
        <RouterLink to="/about" class="navitem">About</RouterLink>
        <RouterLink to="/des" class="navitem">Demon's Souls</RouterLink>
        <RouterLink to="/ds" class="navitem">Dark Souls</RouterLink>
        <RouterLink to="/bb" class="navitem">Bloodborne</RouterLink>
        <RouterLink to="/er" class="navitem">Elden Ring</RouterLink>
      </nav>
    </div>
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>

  .navitem{
    color: rgb(224, 204, 172);
  }

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

  .flask-image {
    animation: flask-animation 2s infinite;
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
    border-left-color: rgb(224, 204, 172);
  }

  .main {
    margin-left: 200px;
    padding: 1rem;
  }

  @media (max-width: 468px) {
    .sidebar {
      width: 30%;
    }

    .logo{
      width: 100px;
      margin-bottom: -20px;
    }

    .main {
      margin-left: 80px;
      font-size: 12px;
    }
  }

  @keyframes flask-animation {
    0% {
      transform: rotate(0deg) translateY(0px);
    }
    50% {
      transform: rotate(5deg) translateY(-3px);
    }
    100% {
      transform: rotate(0deg) translateY(0);
    }
  }
</style>
