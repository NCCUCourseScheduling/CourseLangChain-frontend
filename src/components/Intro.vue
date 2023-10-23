<template>
  <div class="hero h-full">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Course LangChain</h1>
        <p class="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <button
            v-for="content in contents"
            @click="emits('click', content)"
            class="bg-neutral hover:bg-neutral-focus transition-colors rounded-md p-2 py-4"
          >
            <p class="text-sm text-neutral-content text-left truncate">
              {{ content }}
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: "click", content: string): void;
}>();

const contents = [
  "你好",
  "你可以做甚麼？",
  "我星期一不想排課，請幫我排課表！",
  "我想修經濟學，請幫我排課表！",
];
</script>
