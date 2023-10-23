<template>
  <div class="card bg-base-300 shadow-xl">
    <div class="card-body flex-row items-center gap-4">
      <div class="avatar placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
          <span>U</span>
        </div>
      </div>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>
