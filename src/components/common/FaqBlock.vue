<template>
  <div>
    <div>
      <h4 class="font-displayBold text-20px leading-normal mt-0 mb-16px text-center text-body outline-none">
        {{ $t('faq.title') }}
      </h4>
      <div v-for="(item, id) in items" :key="id">
        <div class="flex justify-between py-16px px-24px bg-[#f9f9f9] rounded-9px font-displayBold text-16px leading-normal text-body mb-16px" @click="selectId(id)">
          {{ $t(`faq.questions.${item.title}`) }}
          <img
          class="ml-16px"
              v-if="id === selectedId"
              src="@/assets/images/svg/icon_minus.svg"
              alt="">
          <img
              class="ml-16px"
              v-else
              src="@/assets/images/svg/icon_plus.svg"
              alt="">
        </div>
        <div class="px-24px" v-if="selectedId === id">
          <div v-for="(child, idx) in item.children" :key="idx">
            <span class="block font-400 text-16px leading-normal text-body mb-24px" :class="{ 'mb-16px': idx === item.children.length - 1 }">{{ $t(`faq.questions.${child}`) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqBlock",
  props: {
    items: Array
  },
  data() {
    return {
      selectedId: 0
    }
  },
  methods: {
    selectId(id) {
      if (this.selectedId === id) {
        this.selectedId = null
        return
      }
      this.selectedId = id
    }
  }
}
</script>
