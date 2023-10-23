import { computed, ref, Ref } from "vue";
import { useEventSource } from "@vueuse/core";

export const useChat = () => {
  const _history = ref<Ref<string | null>[]>([]);
  let _status = ref<"OPEN" | "CONNECTING" | "CLOSED">("CLOSED")

  const chat = (input: string) => {
    const { eventSource, status, data, error, close } = useEventSource(
      "/api/ask?question=" + input
    );
    _history.value.push(data);
    _status = status
  };

  const history = computed(() => _history.value.map((item) => item.value));

  return { chat, history };
};
