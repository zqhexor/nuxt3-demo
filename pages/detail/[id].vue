<template>
  <div>
    <h1>详情 #{{ id }}</h1>
    <button class="border p-1" @click="counter++">{{ counter }}</button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = computed(() => route.params.id);

useHead({ title: `详情${id.value}` });
const counter = useCounter();
</script>
