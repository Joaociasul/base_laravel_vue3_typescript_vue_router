<template>
    <h1 class="text-3xl">{{ hello }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        const hello = ref<String>("hello");
        const elemento = document.querySelector("#teste");
        if (elemento) {
            elemento.localName;
        }
        return {
            hello,
        };
    },
});
</script>

<style lang="scss"></style>
