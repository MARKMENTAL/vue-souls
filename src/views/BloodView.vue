<template>
  <main style="text-align:center;">
    <h1>{{ gameData.title }}</h1>
    <img :src="gameData.image" :alt="gameData.title + ' box art'" class="slide-in" width="200" />
    <p class="slide-in">{{ gameData.description }}</p>
    <p class="slide-in">Healing Item: {{ gameData.healing_item.name }}</p>
    <img :src="gameData.healing_item.image" :alt="gameData.healing_item.name" class="slide-in" width="100" />
    <p class="slide-in">{{ gameData.healing_item.description }}</p>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const gameData = ref({
  title: '',
  image: '',
  description: '',
  healing_item: {
    name: '',
    image: '',
    description: ''
  }
});

fetch('game-data.json')
  .then(response => response.json())
  .then(data => {
    const eldenRingData = data.games.find((game: { title: string; }) => game.title === 'Bloodborne');
    if (eldenRingData) {
      gameData.value = eldenRingData;
    }
  });
</script>