<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-square">
      <Icon icon="mingcute:color-filter-line" class="h-6 w-6" />
    </label>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 h-96 flex-nowrap overflow-auto"
      data-theme="light"
    >
      <li
        v-for="theme in themes"
        :data-set-theme="theme"
        data-act-class="theme-active"
      >
        <a class="rounded-md">{{ theme }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
</script>

<style scoped>
.theme-active a {
  @apply bg-neutral-focus text-neutral-content;
}
</style>
