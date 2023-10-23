<template>
  <div class="flex flex-col gap-4">
    <UserInput :content="input" />
    <BotOutput :content="output" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Ref, watch } from "vue";
import { useEventSource } from "@vueuse/core";
import UserInput from "./UserInput.vue";
import BotOutput from "./BotOutput.vue";

const props = defineProps<{
  input: string;
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

watch(status, (value) => {
  if (value === "CLOSED") {
    close();
  }
});
</script>
