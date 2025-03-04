<template>
  <div>
    <button @click="getCharacters">Get characteres of ricky and morty</button>
    <div v-for="(result, index) in response.results">
      <h1> {{ result.name  }} </h1>
      <h3> {{ result.species }} </h3>
      <h3> {{ result.status }} </h3>
      <img :src="getImage(index)" alt="Character image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const response = ref({})
const image = ref('')

function getImage(index) {
  return response.value.results[index].image
}

async function getCharacters() {
  try {
    response.value = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
      .then(response => response.json())
    console.warn(response.value)
  } catch (error) {
    console.log('Error')
  }
}
</script>
