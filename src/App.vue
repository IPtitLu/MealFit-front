<script setup lang="ts">
import {computed} from 'vue';
import { useRoute } from 'vue-router';

const default_layout = "default";

const route = useRoute();

const layout = computed(() => {
  return (route?.meta?.layout || default_layout);
});

console.log(layout);

</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>