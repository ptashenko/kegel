<template>
  <button
    class="w-full py-15px pr-60px pl-20px text-14px leading-normal text-left bg-[#F1F3F9] border-none rounded-9px cursor-pointer relative text-[#111113] before:(content-[''] w-23px h-23px bg-white absolute right-20px top-1/2 rounded-1/2 -translate-y-1/2) sm:text-18px sm:leading-normal"
    @click="clickBtn"
  >
    {{ answer }}
  </button>
</template>

<script>

export default {
  name: 'btnComponent',
  data() {
    return {
      active: 'false',
    };
  },
  props: {
    answer: {
      type: String,
      default: "name"
    },
  },
  methods:{
    clickBtn(){
      this.$emit('clickBtn')
    }
  }
};
</script>

<style scoped lang="scss">
.answer {
  font-family: "SF Pro Text Medium";
  width: 100%;
  padding: 15px 60px 15px 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  background-color: #F1F3F9;
  border: none;
  border-radius: 9px;
  // transition: 0.2s;
  cursor: pointer;
  position: relative;
  color: #111113;

  @media (max-width: 480px) {
    font-size: 14px;
  }

  &:before {
    content: '';
    width: 23px;
    height: 23px;
    background-color: white;
    position: absolute;
    right: 20px;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &.active {
    font-family: "SF Pro Text Semibold";
    background-color: #111113;
    color: white;
    font-weight: bold;

    &:before {
      background-color: transparent;
      background-image: url("@/assets/images/svg/icon_check.svg");
    }
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
