<template>
  <div class="dark-layout">
    <div class="container-main is-page standart">

      <steps
        v-if="content.id > 3 && content.id !== 35 && content.id !== 353 && content.id !== 61"
        :dark="dark"
      />

      <div v-if="content.title"
           class="text-center text-[#fff] font-displayBold font-600 text-20px leading-normal mb-32px sm:text-24px sm:leading-normal">
        <h2 v-html="$t(`survey.id_${content.id}.${content.title}`)" />
      </div>

      <div v-if="content.video">
        <video-background
            :src="video($t(`survey.id_${content.id}.${content.video}`))"
            :poster="video($t(`survey.id_${content.id}.${content.poster}`))"
            class="h-209px rounded-14px max-w-520px w-full sm:h-340px" />
      </div>


      <div class="mb-32px text-center" v-if="content.thumbnail">
        <img class="w-full max-w-450px h-auto sm:max-w-520px" :src="image($t(`survey.id_${content.id}.${content.thumbnail}`))" :alt="content.title">
      </div>


      <div v-if="content.text"
           class="font-sans font-400 text-16px leading-normal mt-25px text-center text-[#fff] sm:text-18px sm:leading-normal">
        <span v-html="$t(`survey.id_${content.id}.text`)" />
      </div>

      <div v-if="content.buttons" class="rounded-17px p-9px max-w-300px my-32px mx-auto bg-[#8080800C] mb-20px">
        <div v-for="(button, idx) in content.buttons" :key="button.id"
             class="font-500 text-14px leading-tight flex items-center" :class="{ 'mb-3': idx !== content.buttons.length - 1 }">
          <div v-if="button.logo" class="w-37px h-37px flex items-center justify-center rounded-full mr-12px">
            <img :src="`${buttonIcon(button.logo)}`" :alt="button.title">
          </div>
          <div class="text-[#fff]">
            <p class="text-12px leading-tight opacity-70">{{ $t(`survey.id_${content.id}.buttons.text`) }}</p>
            <p class="text-14px leading-normal font-displaySemiBold">{{ $t(`survey.id_${content.id}.buttons.title`) }}</p>
          </div>
        </div>
      </div>

      <footer-controls
        :dark="true"
        :buttonBack="{
        text: content.buttonsText ? this.$t(`survey.id_${content.id}.${content.buttonsText[0]}`) : 'Back',
        icon: 'prev',
        click: backURL,
        theme: 'bg-[#282828] hover:bg-[#373737FF]'
      }"
        :buttonNext="{
        icon: 'next',
        text: content.buttonsText ? this.$t(`survey.id_${content.id}.${content.buttonsText[1]}`) : 'I got it',
        click: nextURL,
        theme: 'bg-red hover:bg-[#F5423FFF]'
      }"
      />
    </div>
  </div>
</template>

<script>
import Steps from '@/components/Steps.vue';
import nextContentUrl from '@/mixins/contollers';

export default {
  name: 'StandartTwo-layout',
  data(){
    return{
      yourMethod: true,
      show:true,
    }
  },
  props: {
    content: {
      required: true,
      type: Object,
    },
    dark: {
      type: Boolean,
      default: false
    }
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
    video(path) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/video/${path}`);
    },
    buttonIcon(name) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/icons/layout-buttons/${name}.svg`);
    },
    backURL(){
      this.back()
    },
    nextURL(){
      this.next()
    },
  },
  computed:{
  },
  mounted(){

  }
};
</script>

<style scoped lang="scss">
.h2 {
  text-align: center;
  color: #FFFFFF;
  font-family: "SF-Pro-Display-Semibold";
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
      max-width: 100%;
      height: auto;
    }
  }
  &__thumbnail{
    margin-bottom: 32px;
    text-align: center;
    .video{
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
.video{
      max-width: 520px;
      width: 100%;
    }
.bold-text{
    font-family: "SF Pro Text Semibold";
  }
  .video {
    max-height: 340px;
    height: 100vh;
    max-width: 100%;
    border-radius: 14px;
    @media (max-width: 480px) {
        max-height: 240px;
    }
    @media (max-width:440px) {
        max-height: 220px;
    }
    @media (max-width:400px) {
        max-height: 200px;
    }
}
</style>
