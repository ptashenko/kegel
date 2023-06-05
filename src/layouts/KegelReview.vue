<template>
    <div class="block__steps" :data-step="content.steps">
      <steps v-if="content.steps" />
    </div>

    <div class="container-main is-page KegalReview">
      <div class="h2 text-center">
        <span class="red" v-if="content.tilteRed">{{content.tilteRed}}</span>
        <span v-else></span>
        {{ content.title }}

      </div>

      <div class="peoples">

        <lottie-animation
          v-if="content.thumbnail"
          class="animation"
          ref="anim"
          :animationData="require(`@/assets/images/json/${content.thumbnail}`)"
        />
      </div>

      <review
        v-for="id in content.reviews"
        :key="id"
        :id="id"
        :dark="content.dark"
      />

      <processing>
        Connecting to the database
      </processing>

      <div class="layout__buttons" v-if="content.buttons">
        <div class="layout__button" v-for="button in content.buttons" :key="button.id">
          <div class="layout__button-icon" v-if="button.logo">
            <img :src="`${buttonIcon(button.logo)}`" :alt="button.title" />
          </div>
          <div>
            <span>{{ button.text }}</span>
            <div>{{ button.title }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Steps from '@/components/Steps.vue';
import Review from '@/components/Review.vue';
import Processing from '@/components/Processing.vue';

export default {
  name: 'Kegel-review-layout',
  components: {
    Processing,
    Review,
    Steps,
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['review']),
  },
  methods: {
    buttonIcon(name) {
      return require(`@/assets/images/icons/layout-buttons/${name}.svg`);
    },
  }
};
</script>

<style scoped lang="scss">
.container-main.is-page {
  padding-bottom: 30px;
}
.h2{
  font-family: "SF-Pro-Display-Semibold";
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  @media (max-width:480px) {
    font-size: 20px;
  }
}
.peoples {
  text-align: center;
  margin: 30px auto;
  display: block;
  max-width: 400px;
  width: 100%;
  @media (min-width: 600px) {
    max-width: 520px;
  }
  svg {
    max-width: 400px;
    width: 100%;
  }
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
      padding: 0 10px;
    }
  }

  &__thumbnail {
    margin-bottom: 32px;
    text-align: center;

    img {
      width: 100%;
      max-width: 450px;
      height: auto;
      @media (min-width: 600px) {
        max-width: 520px;
      }
    }
  }

  &__thumbnail {
    margin-bottom: 32px;
    text-align: center;

    .video {
      max-width: 520px;
      width: 100%;
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
      max-width: 300px;
      margin: 32px auto 0;
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

.KegalReview {
  padding: 0;
}
</style>
