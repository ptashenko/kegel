<template>
  <div class="footer-controls" :class="{'dark': dark}">
    <div>
      <button-field
        :text="buttonBack.text"
        :theme="buttonBack.theme"
        :icon="buttonBack.icon"
        @click="buttonBack.click()"
        class="footer-controls__button"
      />
    </div> 
    <div>
      <button-field
        :text="buttonNext.text"
        :disabled="buttonNext.disabled"
        :theme="buttonNext.theme"
        :icon="buttonNext.icon"
        @click="buttonNext.click()"
        class="footer-controls__button"
      />
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
.footer-controls {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  margin: 25px auto 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 30px;
  max-width: 540px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 29.7%);
  @media (max-width:480px) {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 29.7%);
  }
  & > * {
    position: relative;
    z-index: 3;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    @media (max-width:480px) {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 29.7%);
    }
  }

  @media (max-width: 480px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 30px;
    max-width: 540px;
  }

  &.dark {
    background: none;
    
    &:before {
      background: linear-gradient(180deg, rgba(17, 17, 19, 0) 0%, #111113 29.7%);
    }
    
  }

  @media (max-width: 480px) {
    &__button {
      width: 100%;
    }

    & > * {
      width: 50%;
      flex: 0 0 50%;
    }
  }

  & > * {
    padding: 0 8px;
    @media (max-width: 480px) {
      padding: 0 2.5px;
    }
  }
}

</style>
