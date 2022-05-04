<template>
  <div class="bg-zinc-900">
    <h1 class="text-zinc-100">{{ about }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const about = ref<String>("about");
    return {
      about,
    };
  },
});
</script>

<style></style>
