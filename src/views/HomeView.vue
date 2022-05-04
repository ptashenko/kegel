<template>
  <header-layout :fixed="true" :dark="false"/>

  <div class="jumbotron">
    <div class="container-main">
      <div class="jumbotron__title">
        Stay hard & last long without pills
      </div>
      <div class="jumbotron__text">
        Select a goal to get step-by-step plan
      </div>

      <svg class="icon" width="18" height="32">
        <use xlink:href="@/assets/images/arrow-down.png"></use>
      </svg>
    </div>
  </div>

  <div class="navigation__section">
    <div class="container-main">
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
        <img src="@/assets/images/logo.png" :alt="advantage.title">
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
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
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
        },
        {
          title: 'Need support?',
          text: 'Contact Customer Service if you have any questions. We\'ll be sure to help you.',
          email: 'support@kegel.men',
          logo: 'subtract',
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
    font-weight: 600;
    font-size: 32px;
    line-height: 1.2;
    text-align: center;
    text-shadow: 0 0 17px #FFFFFF;
  }

  .container-main {
    background-color: transparent;
  }

  &__text {
    font-size: 18px;
    line-height: 150%;
    margin: 15px 0;
  }
}

.navigation {
  &__section {
    padding-bottom: 30px;
    background-color: white;
    padding-top: 15px;
  }

  &__item {
    color: white;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    font-weight: bold;
    position: relative;
    font-size: 16px;
    border: none;
    width: 100%;
    line-height: 1.2;
    cursor: pointer;

    &:hover {
      &:after {
        background-color: red;
      }
    }

    & > * {
      position: relative;
      z-index: 2;
    }

    &:before {
      content: '';
      background: linear-gradient(rgb(217, 217, 217), #111113);
      position: absolute;
      left: -1px;
      top: -1px;
      bottom: -1px;
      right: -1px;
      border-radius: 20px;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      transition: #cecece;
      background: #111113;
      border-radius: 20px;
    }

    span {
      font-size: 14px;
      margin-top: 4px;
      font-weight: 500;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__text {
    color: #111113;
    opacity: .5;
    text-align: center;
    margin-top: 30px;
    line-height: 1.5;
  }
}

.footer {
  padding: 50px 0;
  background: rgba(196, 196, 196, 0.2);

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
    margin: 16px 0 8px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  &__text {
    opacity: .65;
    line-height: 1.5;
  }

  &__email {
    margin-top: 8px;
    display: block;
    color: color(red);
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-bottom: 50px;
  }
}
</style>
