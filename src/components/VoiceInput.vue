<template>
  <form class="btn btn-square">
    <Icon icon="mingcute:mic-fill" class="h-6 w-6" />
    <input
      type="file"
      accept="audio/*"
      @change="handleUpload"
      capture
      class="absolute opacity-0 top-0 left-0"
    />
  </form>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import axios from "axios";

const emits = defineEmits<{
  (e: "voice", text: string): void;
  (e: "loading"): void;
}>();

const handleUpload = (e: Event) => {
  e.preventDefault();
  const formData = new FormData();
  const files = (e.target as HTMLInputElement).files;
  if (!files) return;
  formData.append("file", files[0]);
  axios
    .post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      emits("voice", res.data.text as string);
    });
};
</script>
