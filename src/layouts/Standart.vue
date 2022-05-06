<template>
  <header-layout :fixed="true" :dark="false"/>

  <div class="dark-layout">
    <div class="container-main is-page standart">


      <steps
        :light="false"
        v-if="content.id > 3 && content.id !== 35 && content.id !== 48"
      />

      <div class="h2 layout__title">
        {{ content.title }}
      </div>

      <div class="layout__thumbnail full" v-if="content.thumbnail">
        <img
          :src="image(content.thumbnail)"
          :alt="content.title"
          width="400"
          height="200"
        >
      </div>

      <div class="layout__bottom-text" v-if="content.text">
        {{ content.text }}
      </div>

      <div class="layout__buttons" v-if="content.buttons">
        <div class="layout__button" v-for="button in content.buttons" :key="button.id">
          <div class="layout__button-icon" v-if="button.logo">
            <img :src="`${buttonIcon(button.logo)}`" :alt="button.title">
          </div>
          <div>
            <span>{{ button.text }}</span>
            <div>{{ button.title }}</div>
          </div>
        </div>
      </div>

      <footer-controls
        :dark="true"
        :buttonBack="{
        text: content.buttonsText ? content.buttonsText[0] : 'Back',
        icon: 'prev',
        click: back,
        theme: 'grey'
      }"
        :buttonNext="{
        icon: 'next',
        text: content.buttonsText ? content.buttonsText[1] : 'I got it',
        click: next,
        theme: 'red'
      }"
      />
    </div>
  </div>
</template>

<script>
import Steps from '@/components/Steps.vue';
import nextContentUrl from '@/mixins/contollers';

export default {
  name: 'Standart-layout',
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
  components: {
    Steps,
  },
  mixins: [nextContentUrl],
  methods: {
    image(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/content/${path}`);
    },
    buttonIcon(name) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/icons/layout-buttons/${name}.svg`);
    },
  },
};
</script>

<style scoped lang="scss">
.h2 {
  text-align: center;
  color: #FFFFFF;
  font-family: "SF-Pro-Display-Bold";
}

.layout {
  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 135%;
    text-align: center;
    margin-bottom: 32px;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  &__thumbnail {
    margin-bottom: 32px;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &-icon {
      width: 37px;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(#FFFFFF, .07);
      margin-right: 12px;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
      opacity: .7;
    }

    &s {
      border-radius: 17px;
      padding: 9px;
      background: rgba(grey, 0.05);
      max-width: 270px;
      margin: 0 auto;
    }
  }

  &__bottom-text {
    font-family: "SF Pro Text Regular";
    font-weight: 400;
    font-size: 18px;
    margin-top: 32px;
    line-height: 150%;
    text-align: center;
    color: #FFFFFF;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
