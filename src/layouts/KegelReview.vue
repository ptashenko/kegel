<template>
    <div
      v-if="content.steps"
      :data-step="content.steps"
    >
      <steps />
    </div>

    <div class="container-mob pb-30px">
      <div class="font-sansSemiBold text-20px leading-normal text-center text-[#fff] sm:(text-24px leading-normal)">
        <span v-if="content.tilteRed" class="text-red">{{content.tilteRed}}</span>
        {{ content.title }}
      </div>

      <div class="text-center my-30px mx-auto block max-w-400px w-full sm:max-w-520px">

        <lottie-animation
          v-if="content.thumbnail"
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

      <div v-if="content.buttons" class="rounded-17px p-9px max-w-300px my-32px mx-auto bg-[#8080800C] mb-20px">
        <div
          v-for="button in content.buttons"
          :key="button.id"
          class="font-500 text-14px leading-tight flex items-center"
        >
          <div
            v-if="button.logo"
            class="w-37px h-37px flex items-center justify-center rounded-full bg-[#fff] bg-opacity-70 mr-12px"
          >
            <img :src="`${buttonIcon(button.logo)}`" :alt="button.title" />
          </div>
          <div class="text-[#fff]">
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
  color: rgba(128, 128, 128, 0.05)
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
