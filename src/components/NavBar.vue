<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <button class="btn btn-square" @click="emits('delete')">
        <Icon icon="mingcute:delete-2-line" class="h-6 w-6" />
      </button>
    </div>
    <div class="navbar-center">
      <span class="text-xl font-bold">CourseLangChain</span>
    </div>
    <div class="navbar-end">
      <Theme />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Theme from "./Theme.vue";

const emits = defineEmits<{
  (e: "delete"): void
}>()
</script>
