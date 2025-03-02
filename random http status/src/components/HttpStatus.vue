<template>
  <div>
    <select name="http status" @change="selected_number">
      <option v-for="status_code in statuses_code" :key="status_code" :value="status_code">
        {{ status_code }}
      </option>
    </select>
    <img :src="gif_url" alt="HTTP Status Code" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import random_http_code from '../tools/random_number'

const binary = ref('')
const code = ref(200)
const gif_url = ref('')

onMounted(() => {
  gif_url.value = `https://vadivelu.anoram.com/gif/${code.value}`
})

function selected_number(event) {
  code.value = event.target.value
  gif_url.value = `https://vadivelu.anoram.com/gif/${code.value}`
}

const statuses_code = ref(random_http_code)
</script>
<style>
</style>
