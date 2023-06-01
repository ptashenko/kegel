<template>
  <div class="popup_wraper">
    <div class="v-popup">
      <img v-if="closeButton" class="v-popup__close" @click="closePopup" src="@/assets/images/svg/icon_btn-close-window.svg" />
      <div class="v-popup__header h2">
        {{textTitle}}
      </div>
      <div class="v-popup__content">
          <slot></slot>
      </div>
      <div class="v-popup__footer">

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
    }
  },
  data(){
    return{

    }
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  }

}
</script>
<style lang="scss" scoped>
.popup_wraper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(17, 17, 19, 0.35);
  }
  .v-popup {
    position: fixed;
    z-index: 9999999;
    width: 100%;
    max-width: 452px;

    padding: 32px 24px 24px;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 9px;
    overflow-y: auto;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    &__close {
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
    }

    @media (max-width:480px) {
      max-width: 375px;
      min-height: 75vh;
      bottom: -10px;
    }
    &__content, &__footer{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 0px;
    }
    .h2{
      margin-bottom: 18px;
    }
  }
  .popup_wraper{
    .v-popup{
      padding: 24px;
      .h2{
        font-size: 24px;
        line-height: 135%;
        @media (max-width:480px) {
          font-size: 20px;
        }
      }
    }
  }
  .analize{
    .h2{
      font-family: "SF-Pro-Display-Semibold";
    }
  }
.windowError{
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  z-index: 9;
  top: 32px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  .v-popup{
    pointer-events: auto;
    box-shadow:(6px 6px 13px rgba(0, 0, 0, 0.25));
    max-width: 452px;
    font-family: "SF Pro Text Medium";
    font-size: 18px;
    line-height: 150%;
    background: #FFE4E4;
    color: #E44240;
    border: 2px solid #E44240;
    border-radius: 9px;
    padding: 16px;
    @media (max-width:480px) {
      max-width: 280px;
      font-size: 14px;
      line-height: 150%;
      min-height: unset;
      bottom: unset;
    }
    .h2{
      margin-bottom: 0px;
    }
    &__content{
      flex-direction: row;

    }

  }
}

.sure {
  .v-popup {
    max-width: 311px;
    @media (min-width: 600px) {
      max-width: 452px;
    }
  }
}
</style>
