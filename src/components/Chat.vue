<template>
  <div class="flex flex-col gap-4">
    <UserInput :content="input" />
    <div class="card bg-base-300 shadow-xl">
      <div class="card-body flex-row items-center gap-4">
        <div class="avatar placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>U</span>
          </div>
        </div>
        <p>{{ input }}</p>
      </div>
    </div>
    <div class="card bg-base-300 shadow-xl">
      <div class="card-body flex-row items-center gap-4">
        <div class="avatar placeholder">
          <div class="bg-success text-success-content rounded-full w-12">
            <span>B</span>
          </div>
        </div>
        <VueMarkdown :source="output" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Ref, watch } from "vue";
import { useEventSource } from "@vueuse/core";
import VueMarkdown from "vue-markdown-render";

const props = defineProps<{
  input: string;
}>();
const emits = defineEmits<{
  (e: "chat", message: ChatMessage): void;
}>();

const output = ref("");

const { status, data, error, close } = useEventSource(
  "/api/ask?question=" + props.input
);

watch(data, (value) => {
  if (value) {
    console.log('"' + value + '"');
    output.value += JSON.parse(value).data;
  }
});

watch(error, (err) => {
  if (err) {
    close();
    output.value = "An error occurred while attempting to connect.";
  }
});

watch(status, (value) => {
  if (value === "CLOSED") {
    close();
    emits("chat", {
      input: props.input,
      output: output.value,
      time: new Date(),
    });
  }
});
</script>
