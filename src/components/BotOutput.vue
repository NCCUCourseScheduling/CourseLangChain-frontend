<template>
  <div class="card bg-base-300 shadow-xl">
    <div class="card-body flex-row items-center gap-4">
      <div class="avatar placeholder">
        <div class="bg-success text-success-content rounded-full w-12">
          <span>B</span>
        </div>
      </div>
      <VueMarkdown :source="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import { computed } from "vue";

const props = defineProps<{
  content: string;
}>();
</script>
