<template>
  <div>
    <select name="http status" @change="selected_number">
      <option v-for="status_code in statuses_code" :key="status_code" :value="status_code">
        {{ status_code }}
      </option>
    </select>
    <select name="gif_or_jpg" @change="selected_type">
      <option v-for="type in types" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
    <img class="image_code" :src="gif_url" alt="HTTP Status Code" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import random_http_code from '../tools/random_number'

const types = ['gif', 'jpg']
const binary = ref('')
const gif_url = ref('')
const code = ref({ status: 200 })
const type = ref('gif')

onMounted(() => {
  gif_url.value = `https://vadivelu.anoram.com/${type.value}/${code.value.status}`
})

function selected_number(event) {
  code.value.status = event.target.value
  gif_url.value = `https://vadivelu.anoram.com/${type.value}/${code.value.status}`
}

function selected_type(event) {
  type.value = event.target.value
  gif_url.value = `https://vadivelu.anoram.com/${type.value}/${code.value.status}`
}

const statuses_code = ref(random_http_code)
</script>
<style>
</style>
