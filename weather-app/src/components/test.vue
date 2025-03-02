<script>
import {}
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  },
  computed () {

  }
}
</script>

<template>
  <template>
    <div @click="increment">{{ count  }}</div>
  </template>
</template>

<style>
</style>
