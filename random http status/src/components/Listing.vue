<template>
  <div>
    <select @change="set_selected">
      <option v-for="code in codes">
        {{ code }}
      </option>
    </select>
    <h1> {{ setted_code }} </h1>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import random_http_code from '../tools/random_number'

const codes = ref(random_http_code)
const setted_code = ref('')

onMounted(() => {
  setted_code.value = codes.value[0]
})

function set_selected() {
  setted_code.value = event.target.value
}
</script>
