<template>
  <div
    class="h-100px text-center mx-auto mt-25px fixed bottom-0 left-0 right-0"
    :class="[dark ? 'dark-gradient' : 'light-gradient']"
  >
    <div class="flex items-center h-100px justify-between max-w-311px sm:max-w-322px mx-auto">
      <div class="max-w-153px basis-[49%]">
        <button-field
          :text="buttonBack.text"
          :style="buttonBack.style"
          :icon="buttonBack.icon"
          @click="buttonBack.click()"
        />
      </div>
      <div class="max-w-153px basis-[49%]">
        <button-field
          :text="buttonNext.text"
          :disabled="buttonNext.disabled"
          :style="buttonNext.style"
          :icon="buttonNext.icon"
          @click="buttonNext.click()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonField from '@/components/ui/Button.vue';

export default {
  name: 'Footer-controls',
  components: { ButtonField },
  props: {
    buttonBack: {
      type: Object,
      required: true,
      default: () => ({})
    },
    buttonNext: {
      type: Object,
      required: true,
      default: () => ({})
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  computed:{

  },
  watch: {
    buttonBack(val) {
      return val;
    },
    buttonNext(val) {
      return val
    }
  }
};
</script>

<style lang="scss" scoped>
.light-gradient {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 29.7%);
}

.dark-gradient {
  background: linear-gradient(180deg, rgba(17, 17, 19, 0.00) 0%, #111113 100%);
}
</style>
