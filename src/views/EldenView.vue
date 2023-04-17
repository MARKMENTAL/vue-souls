<template>
    <main style="text-align:center;">
      <h1>{{ gameData.title }}</h1>
      <img :src="gameData.image" :alt="gameData.title + ' box art'" class="slide-in" width="200" />
      <p class="slide-in">{{ gameData.description }}</p>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const gameData = ref({
    title: '',
    image: '',
    description: ''
  });
  
  fetch('game-data.json')
    .then(response => response.json())
    .then(data => {
      const eldenRingData = data.games.find((game: { title: string; }) => game.title === 'Elden Ring');
      if (eldenRingData) {
        gameData.value = eldenRingData;
      }
    });
  </script>