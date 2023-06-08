<template>
  <div class="flex justify-center items-center fixed z-9 top-0 left-0 right-0 bottom-0 bg-[#11111359]">
    <div
      class="fixed z-9999999 w-full max-w-452px p-24px pt-32px pb-64px bg-[#fff] mx-auto rounded-9px overflow-y-auto max-h-90vh flex flex-col bottom-[-10px]"
      :class="{'!bottom-unset !p-16px !top-32px !max-w-311px !h-fit bg-[#FFE4E4] border-2px border-red': error}"
    >
      <img v-if="closeButton" class="absolute top-5px right-5px cursor-pointer" @click="closePopup" src="@/assets/images/svg/icon_btn-close-window.svg" />
      <div v-if="textTitle" class="font-displayBold text-20px text-center mb-24px">
        {{textTitle}}
      </div>
      <div class="flex flex-col items-center justify-center mt-0">
          <slot></slot>
      </div>
      <div class="flex-row items-center justify-center mt-0">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'v-popup',
  props:{
    textTitle:{
      type: String,
      default: ''
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  }

}
</script>
