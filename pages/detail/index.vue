<template>
  <div>
    <h1>详情</h1>
    <button class="border p-1" @click="counter++">{{ counter }}</button>
    <Navigator :data="data" />
    <!-- 插件注入模板的用法 -->
    <span>{{ $hello('world') }}</span>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '详情' });

const data = [
  { path: '/detail/1', name: '详情1' },
  { path: '/detail/2', name: '详情2' },
];

const counter = useCounter();

// 插件注入JS用法
// const { $hello } = useNuxtApp();
// console.log($hello('world'));
</script>
