<template>
  <div class="flex h-[100vh] flex-col overflow-auto">
    <header class="flex-none p-2 text-center">custom</header>
    <hr />

    <main class="flex-auto overflow-auto">
      <slot />
    </main>

    <hr />
    <footer class="flex-none p-2 text-center">footer</footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s-My site',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'A Real World',
    },
  ],
});
</script>
