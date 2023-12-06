<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const default_layout = "Default";

const route = useRoute();

const layout = computed(() => {
  console.log("route", route?.meta?.layout as string);
  return (route?.meta?.layout as string || default_layout) + "Layout";
});

watch(layout, (newLayout) => {
  console.log("layout", newLayout);
}, { immediate: true });

</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>