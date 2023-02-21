<template>
  <ol>
    <li v-for="item in data" :key="item.path" class="group inline-block">
      <NuxtLink :to="item.path" class="hover:text-[#06f]">
        {{ item.name }}
      </NuxtLink>
      <span class="mx-1 group-last:hidden">|</span>
    </li>
  </ol>
</template>

<script lang="ts" setup>
type navigator = {
  path: string;
  name: string;
};

defineProps<{ data: navigator[] }>();
</script>
