<template>
  <div class="h-full flex flex-col">
    <NavBar />
    <div class="grow flex flex-col p-2 gap-4 overflow-hidden">
      <div
        class="h-full rounded-xl flex flex-col gap-4 py-6 px-2 overflow-auto"
        ref="scrollContainer"
      >
        <Chat
          :input="i"
          v-for="i in history"
          :key="i"
          @finish="finishChat"
          @error="finishErrorChat"
        />
        <div ref="scrollTarget" />
      </div>
      <form class="shrink flex gap-2 p-2 relative" @submit="chat">
        <div class="form-control w-full">
          <input
            :disabled="chatting"
            type="text"
            v-model="input"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button class="btn btn-square" type="submit" :disabled="chatting">
          <Icon icon="mingcute:send-fill" class="h-6 w-6" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { themeChange } from "theme-change";
import { onMounted, ref, nextTick } from "vue";
import Chat from "./components/Chat.vue";
import NavBar from "./components/NavBar.vue";
import { Icon } from "@iconify/vue";

const scrollContainer = ref<HTMLDivElement | null>(null);
const scrollTarget = ref<HTMLDivElement | null>(null);
const chatting = ref(false);
const input = ref("");
const history = ref<string[]>([]);
const timer = ref(0);

const chat = (e: Event) => {
  e.preventDefault();
  if (input.value.replace(" ", "") === "") return;
  history.value.push(input.value);
  input.value = "";
  chatting.value = true;
  if (scrollTarget.value) {
    timer.value = setInterval(() => {
      scrollTarget.value!.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
};

const finishChat = (message: ChatMessage) => {
  console.log(message);
  clearInterval(timer.value);
  chatting.value = false;
};

const finishErrorChat = () => {
  clearInterval(timer.value);
  chatting.value = false;
};

onMounted(() => {
  themeChange(false);
});
</script>
