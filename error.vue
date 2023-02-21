<template>
  <div class="flex h-[100vh] flex-col items-center justify-center p-10">
    <SvgError class="inline-block w-16"></SvgError>
    <h1 class="mt-6 text-4xl">错误</h1>
    <div class="mt-2">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgError from '@/assets/svg/error.svg';

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
});

const statusCode = computed(
  () => (props.error && props.error.statusCode) || 500,
);
const message = computed(() => props.error.message);

useHead({ title: message });
</script>
