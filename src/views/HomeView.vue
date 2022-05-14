<template>
  <header-layout :fixed="true" :dark="false"/>

  <div class="jumbotron home">
    <div class="container-main">
      <div class="jumbotron__title">
        Stay hard & last long without pills
      </div>
      <div class="jumbotron__text">
        Select a goal to get step-by-step plan
      </div>
      <img src="@/assets/images/arrow-down.png" alt="arrow down" class="jumbotron__img">
    </div>
  </div>

  <div class="navigation__section home">
    <div class="container-main home">
      <div class="navigation__items">
        <button
          class="navigation__item"
          v-for="track in tracks"
          :key="track.id"
          @click="getData(track)"
        >
          <b>{{ track.title }}</b>
          <span>{{ track.text }}</span>
        </button>
      </div>

      <div class="navigation__text">
        *Results vary depending on your starting point, goals, and effort.
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="container-main">
      <div class="advantage" v-for="advantage in advantages" :key="advantage.title">
        <img 
        :src="advantage.img" 
        :alt="advantage.title"
        :style="{  width: advantage.width + 'px' }"
        >
        <div class="advantage__title">{{ advantage.title }}</div>
        <div class="advantage__text">{{ advantage.text }}</div>
        <a
          :href="`mailto:${advantage.email}`"
          class="advantage__email"
          v-if="advantage.email"
        >
          {{ advantage.email }}
        </a>
      </div>

      <div class="footer__info">
        <span>
          Appercut sp z o o <br>
          Warsaw, Twarda 18, 00-105
        </span>
        <div class="footer__terms">
          <a href="https://appercut.co/privacy-policy.html">Privacy Policy</a>
          <a href="https://appercut.co/terms.html">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import HeaderLayout from '@/components/Header.vue';

export default {
  data() {
    return {
      advantages: [
        {
          title: 'Dr. Kegel: For Men’s Health',
          text: 'is a complex approach to strengthen male intimate health',
          logo: 'logo',
          img: require(`../assets/images/logo_footer.png`),
          width: 44
        },
        {
          title: 'Need support?',
          text: 'Contact Customer Service if you have any questions. We\'ll be sure to help you.',
          email: 'support@kegel.men',
          logo: 'subtract',
          img: require(`../assets/images/Subtract.png`),
          width: 48
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
  },
  methods: {
    ...mapMutations(['clearHistory', 'saveContent', 'saveTrack']),
    advantageImage(name) {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/icons/${name}.svg`);
    },
    getData(track) {
      const content = this.contentBy({
        field: 'id',
        value: track.layouts[0].id,
      });
      this.saveContent(content);
      this.saveTrack(track);
      this.$router.push({
        name: 'survey',
        params: { survey: content.id },
      });
    },
  },
  components: {
    HeaderLayout,
  },
  mounted() {
    this.clearHistory();
  },
};
</script>

<style lang="scss">
body{
  margin: 0;
}
.jumbotron {
  background: transparent url('@/assets/images/header.png') no-repeat bottom center/cover;
  height: 500px;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;

  &__title {
    font-family: "SF-Pro-Display-Bold";
    font-weight: 700;
    font-size: 32px;
    line-height: 38.19px;
    text-align: center;
    text-shadow: 0 0 17px #FFFFFF;
  }

  &__img {
    width: 18px;
    height: auto;
    margin: 15px 0;
  }

  .container-main {
    background-color: transparent;
    position: relative;
    top: 120px;

    @media (max-width: 480px) {
      top: 230px;
    }
  }

  &__text {
    color: #111113;
    font-family: "SF-Pro-Display-Semibold";
    font-size: 18px;
    line-height: 150%;
    margin: 15px 0;
    opacity: 76%;
  }
}

.navigation {
  &__section {
    padding-bottom: 30px;
    padding-top: 15px;
    padding: 65px 32px 32px;
    background-color: #FFFFFF;
  }

  &__item {
    font-family: "SF Pro Text Bold";
    color: white;
    border-radius: 9px;
    text-align: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    font-weight: bold;
    font-weight: 700;
    position: relative;
    font-size: 16px;
    border: none;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.2;
    cursor: pointer;
    transition: .4s;

    &:hover {
      &:after {
        background-color: #1B1B1E;
      }
    }

    & > * {
      position: relative;
      z-index: 2;
    }

    &:before {
      content: '';
      transition: .2s;
      background: linear-gradient(rgb(255, 255, 255), #111113);
      position: absolute;
      left: -2px;
      top: -2px;
      bottom: -2px;
      right: -2px;
      border-radius: 9px;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      transition: .2s;
      background: #111113;
      border-radius: 9px;
    }

    span {
      font-family: "SF Pro Text Medium";
      font-size: 14px;
      margin-top: 4px;
      font-weight: 500;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__text {
    font-family: "SF Pro Text Light";
    color: #111113;
    opacity: .5;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 32px;
    line-height: 1.5;
    font-size: 14px;
    @media (max-width:480px) {
      font-size: 12px;
    }
  }
}

.footer {
  padding: 51px 0px 50px;
  background: rgba(196, 196, 196, 0.2);
  .container-main{
    padding-bottom: 32px;
  }

  &__info {
    margin-top: 65px;
    opacity: 0.5;
    text-align: center;
  }

  &__terms {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    a {
      text-decoration: underline;
      color: #111113;

      &:first-child {
        &:after {
          content: '|';
          margin-right: 16px;
          padding-left: 16px;
        }
      }
    }
  }
}

.advantage {
  text-align: center;

  &__title {
    font-family: "SF-Pro-Display-Bold";
    margin: 16px 0 8px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }

  &__text {
    font-family: "SF Pro Text Regular";
    font-size: 14px;
    font-weight: 400;
    opacity: .65;
    line-height: 21px;
    padding: 0px 32px;
  }

  &__email {
    margin-top: 8px;
    display: block;
    color: #E44240;
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-bottom: 50px;
  }
}
</style>
