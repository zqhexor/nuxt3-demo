<template>
  <div class="flex h-[100vh] flex-col overflow-auto">
    <header class="flex-none p-2 text-center">
      <Navigator :data="navigatorData" />
    </header>
    <hr />

    <main class="flex-auto overflow-auto">
      <slot />
    </main>

    <hr />
    <footer class="flex-none p-2 text-center">footer</footer>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  head() {
    return {
      titleTemplate: '%s-My site',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Real World',
        },
      ],
    };
  },
  data() {
    this.navigatorData = [
      { path: '/', name: '首页' },
      { path: '/detail', name: '详情' },
      { path: '/about-us', name: '关于我们' },
      { path: '/_test_/stop', name: '错误页' },
    ];
    return {};
  },
});
</script>
