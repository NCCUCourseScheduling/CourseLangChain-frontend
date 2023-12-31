<template>
  <div class="flex flex-col gap-4">
    <div class="chat chat-end">
      <div class="chat-bubble">{{ input }}</div>
    </div>
    <div class="chat chat-start">
      <div class="avatar placeholder self-end mr-1">
        <div class="bg-success text-success-content rounded-full w-10">
          <span class="text-sm">B</span>
        </div>
      </div>
      <div class="chat-bubble" :class="{ 'chat-bubble-error': outputError }">
        <span
          v-if="output.length === 0"
          class="loading loading-dots loading-md"
        ></span>
        <VueMarkdown v-else :source="output" class="overflow-auto" />
        <Teleport to="#StopGeneration">
          <button class="btn" @click="close" v-if="canStop">
            <Icon icon="mingcute:stop-line" class="w-4 h-4" />
            Stop Generate
          </button>
        </Teleport>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useEventSource } from "@vueuse/core";
import VueMarkdown from "vue-markdown-render";

const props = defineProps<{
  input: string;
}>();
const emits = defineEmits<{
  (e: "finish", message: ChatMessage): void;
  (e: "error"): void;
}>();

const output = ref("");
const canStop = ref(false);
const outputError = ref(false);

const { status, data, error, close } = useEventSource(
  "/api/ask?question=" + props.input
);

watch(data, (value) => {
  if (value) {
    const token = JSON.parse(value).data;
    if (token === "SPECIAL_END_TOKEN") close();
    else output.value += token;
  }
});

watch(error, (err) => {
  if (err) {
    outputError.value = true;
    output.value = "An error occurred while attempting to connect.";
    emits("error");
    close();
  }
});

watch(status, (value) => {
  if (value === "OPEN") {
    canStop.value = true;
  } else if (value === "CLOSED") {
    close();
    canStop.value = false;
    if (output.value.length > 0) {
      emits("finish", {
        input: props.input,
        output: output.value,
        time: new Date(),
      });
    }
  }
});
</script>
