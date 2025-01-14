<template>
  <div class="mx-auto container my-5 px-9 py-5 justify-center">
    <div
      class="max-w-lg mx-auto rounded overflow-hidden shadow-sm px-3 py-5 my-16 bg-white"
    >
      <h2 class="font-semibold text-slate-900 text-lg">
        隨機密碼
      </h2>
      <p class="font-normal text-slate-900 text-sm">
        這是一個隨機密碼產生器，點擊下方按鈕即可產生一組隨機密碼。
      </p>
      <input
        class="w-full my-5 rounded-full bg-slate-100 px-2 py-1 text-md font-semibold text-slate-700"
        type="text"
        readonly
        :value="randomMessage"
      >
    </div>
    <div class="flex justify-center my-16">
      <button
        class="flex mx-3 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-100 bg-violet-700 hover:bg-violet-600 md:py-4 md:text-lg md:px-10"
        @click="onClickGenerate"
      >
        生成
      </button>
      <button
        class="flex mx-3 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10"
        @click="onClickCopy"
      >
        {{ copyMessage }}
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";

const isCopied = ref(false);
const randomMessage = ref("");
const copyMessage = computed(
  () => isCopied.value ? "已複製" : "複製",
);

const generateRandomString = () => {
  const randomNumberRaw = Math.random()**2;
  const randomNumber = randomNumberRaw * (5000**2);
  return randomNumber.toString(16);
};

const onClickGenerate = () => {
  randomMessage.value = generateRandomString();
};

const onClickCopy = async () => {
  if (!navigator.clipboard) {
    alert("您的瀏覽器不支援複製功能，請手動複製");
    return;
  }

  try {
    await navigator.clipboard.
      writeText(randomMessage.value);

    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 3000);
  } catch (e) {
    console.error(e);
    alert("複製失敗，請手動複製");
  }
};

onMounted(() => {
  onClickGenerate();
});
</script>
