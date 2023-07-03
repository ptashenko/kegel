<template>
  <steps v-if="content.id > 3 && content.id !== 35 && content.id !== 353 && content.id !== 61" :dark="dark" />

  <div v-if="content.title"
    class="text-center text-[#fff] font-displayBold font-600 text-20px leading-normal mb-32px sm:(text-24px leading-normal)">
    <h2 v-html="$t(`survey.id_${content.id}.${content.title}`)" />
  </div>

  <div v-if="content.video">
    <video-background :src="video($t(`survey.id_${content.id}.${content.video}`))"
      :poster="video($t(`survey.id_${content.id}.${content.poster}`))"
      class="h-209px rounded-14px max-w-520px w-full sm:(h-340px)" />
  </div>

  <div class="mb-32px text-center" v-if="content.thumbnail">
    <img class="w-full max-w-450px h-auto sm:max-w-520px" :src="image($t(`survey.id_${content.id}.${content.thumbnail}`))" :alt="content.title">
  </div>


  <div v-if="content.text"
    class="font-sans font-400 text-16px leading-normal mt-25px text-center text-[#fff] sm:(text-18px leading-normal)">
    <span v-html="$t(`survey.id_${content.id}.text`)" />
  </div>

  <div v-if="content.buttons" class="rounded-17px p-9px max-w-300px my-32px mx-auto bg-[#8080800C] mb-20px">
    <div v-for="(button, idx) in content.buttons" :key="button.id"
      class="font-500 text-14px leading-tight flex items-center" :class="{ 'mb-3': idx !== content.buttons.length - 1 }">
      <div v-if="button.logo" class="w-37px h-37px flex items-center justify-center rounded-full mr-12px">
        <img :src="`${buttonIcon(button.logo)}`" :alt="button.title">
      </div>
      <div class="text-[#fff]">
        <span>{{ $t(`survey.id_${content.id}.buttons.${button.text}`) }}</span>
        <div>{{ $t(`survey.id_${content.id}.buttons.${button.title}`) }}</div>
      </div>
    </div>
  </div>

  <footer-controls :dark="true" :buttonBack="{
    text: content.buttonsText ? this.$t(`survey.id_${content.id}.${content.buttonsText[0]}`) : 'Back',
    icon: 'prev',
    click: backURL,
    theme: 'bg-[#282828] hover:bg-[#373737FF]'
  }" :buttonNext="{
  icon: 'next',
  text: content.buttonsText ? this.$t(`survey.id_${content.id}.${content.buttonsText[1]}`) : 'I got it',
  click: nextURL,
  theme: 'bg-red hover:bg-[#F5423FFF]'
}" />
</template>

<script>
import Steps from '@/components/Steps.vue';
import nextContentUrl from '@/mixins/contollers';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Standart-layout',
  props: {
    content: {
      required: true,
      type: Object,
      default: () => ({})
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
  computed: {
    ...mapGetters(['track', 'myPrewContentId', 'nextContentId']),
  },
  methods: {
    ...mapMutations(['clearHistory', 'saveContent', 'saveTrack']),
    image(path) {
      return require(`@/assets/images/content/${path}`);
    },
    video(path) {
      return require(`@/assets/video/${path}`);
    },
    buttonIcon(name) {
      return require(`@/assets/images/icons/layout-buttons/${name}.svg`);
    },
    backURL() {
      this.back()
    },
    nextURL() {
      this.next()
    },
  },
};
</script>
