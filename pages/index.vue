<template>
  <div>
    <h1 class="text-[54px]">首页</h1>
    <ol class="mt-2 grid grid-cols-4 gap-1">
      <li v-for="item in heroList" :key="item.id" class="border p-2">
        <h3>{{ item.name_loc }}</h3>
        <h3>{{ item.name_english_loc }}</h3>
      </li>
    </ol>
  </div>
</template>

<script setup>
// const { data } = await useFetch('/api/datafeed/heroList', {
//   params: {
//     task: 'herolist',
//   },
//   server: false,
// });
// const heroList = computed(() => data.value?.result.heroes ?? []);

const { $CMSService } = useNuxtApp();

const { data } = await useAsyncData(
  'herolist',
  () =>
    $CMSService('datafeed/heroList', {
      params: {
        task: 'herolist',
      },
    }),
  // { server: false },
);
// 服务端是同步的可以不用computed，客户端是异步的
const heroList = computed(() => data.value?.result.heroes ?? []);
</script>
