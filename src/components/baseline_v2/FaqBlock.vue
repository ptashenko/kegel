<template>
  <div>
    <div>
      <h4 class="font-display font-600 text-20px leading-normal mt-0 mb-12px text-center text-body outline-none">
        {{ $t('faq_v2.title') }}
      </h4>
      <div v-for="(item, id) in items" :key="id">
        <div
            class="flex justify-between p-16px bg-[#F1F3F9] rounded-9px cursor-pointer"
            @click="selectId(id)"
            :class="{ 'mb-16px': id !== items.length - 1 }"
        >
          <h2 class="font-display font-600 text-16px leading-normal">
            {{ $t(`faq_v2.questions.${item.title}`) }}
          </h2>
          <img
              class="ml-24px transform duration-250ms"
              :class="{'rotate-90': id === selectedId}"
              src="@/assets/images/svg/baseline_v2/icon_blue-arrow.svg"
              alt=""
          >
        </div>
        <transition
            name="accordion"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
        <div
            v-show="selectedId === id"
            class="px-24px pb-16px"
            :class="{'pt-16px': id === items.length -1}"
        >
          <div v-for="(child, idx) in item.children" :key="idx">
            <span
                class="block font-400 text-16px leading-normal opacity-75 text-body mb-24px"
                :class="{ 'mb-16px': idx === item.children.length - 1 }"
            >
              {{ $t(`faq_v2.questions.${child}`) }}
            </span>
          </div>
        </div>
        </transition>
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
    },
    beforeEnter (el) {
      el.style.height = '0';
    },
    enter (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave (el) {
      el.style.height = '0';
    }
  }
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s linear;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  height: 0px !important;
}
</style>
