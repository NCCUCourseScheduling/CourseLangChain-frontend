<template>
  <div class="h-full p-6 flex flex-col gap-4">
    <div
      class="grow bg-base-200 rounded-xl flex flex-col gap-4 p-6 overflow-auto"
    >
      <Chat :input="i" v-for="i in history" :key="i" />
      <!-- <BotOutput
        content="以下是您的經濟學的課程表：<br />| 日期 | 課程名稱 | 上課時間 |\n| ------------- | ------------------------------ | ------------------- |\n| 2021-09-27 | 計量經濟學（一） | 星期二 14:0-17:0 |\n| 2021-10-03 | 心理學專業的生涯規劃 | 星期二 13:0-15:0 |\n| 2021-10-18 | 經濟問題研討（六） | 星期二 14:0-16:0 |\n| 2021-1-09 | 經濟學 | 星期三 9:0-12:0 |\n| 2021-12-15 | 經濟問題研討（六） | 星期二 14:0-16:0 |\n| 202"
      /> -->
    </div>
    <form class="shrink flex gap-2" @submit="chat">
      <div class="form-control w-full">
        <input
          type="text"
          v-model="input"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </div>
      <button class="btn btn-square" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 14l11 -11"></path>
          <path
            d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
          ></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import Chat from "./components/Chat.vue";

const input = ref("");
const history = ref<string[]>([]);

const chat = (e: Event) => {
  e.preventDefault();
  history.value.push(input.value);
  input.value = "";
};
</script>
