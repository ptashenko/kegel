<template>
  <div class="sm:min-h-90vh sm:flex sm:flex-col">
    <div class="container-mob pb-64px">
      <h2 class="font-displayBold text-24px leading-normal sm:text-36px sm:leading-normal text-center">
        {{ $t('whatsapp.title') }}</h2>
      <p class="font-sans font-400 text-16px leading-normal p-0 pt-24px text-center text-body">
        <span v-html="$t('whatsapp.instruction', {email: this.email})"></span>
      </p>

      <div class="flex flex-col mb-32px text-center">
        <div
          class="max-w-full p-16px bg-[#F1F3F9] rounded-9px flex flex-col items-center justify-center mt-32px max-w-390px mx-auto">
          <div
            class="text-14px leading-normal font-sansSemiBold sm:text-18px sm:leading-normal flex items-center justify-center">
            <img class="w-32px h-32px mr-16px" src="@/assets/images/svg/icon_attention-triangle.svg" alt="check">
            <p class="font-sans text-left" v-html="$t('whatsapp.spam')" />
          </div>
        </div>
      </div>
      <hr class="my-32px opacity-50" />
      <div class="font-sansSemiBold text-16px leading-normal mb-24px sm:text-18px sm:leading-normal text-center">
        <p class="font-displayBold font-600 text-18px leading-normal text-body mb-24px flex items-center justify-center">
          <img src="@/assets/images/svg/icon_help.svg" class="mr-12px" />
          {{ $t('whatsapp.questions') }}
        </p>
        <button @click="openWhatsapp"
          class="whatsapp-btn rounded-9px border-none text-[#fff] font-sans font-700 text-18px leading-none p-12px mx-auto flex justify-center cursor-pointer items-center w-full max-w-311px">
          <img src="@/assets/images/svg/icon_whatsapp.svg" class="w-36px h-36px mr-16px" />
          {{ $t('whatsapp.textUs') }}
        </button>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-16px leading-normal text-center text-body mb-32px" v-html="$t('whatsapp.email', {email: 'contact@kegel-plan.com'})">
        </p>
        <p class="text-16px leading-normal text-center p-0 text-[#111113BF]" v-html="$t('whatsapp.offer')">
        </p>
      </div>
    </div>
    <Footer :disclaimer="false" class="mb-0 flex-1" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from '@/components/Footer.vue';

export default {
  name: 'WhatsappPage',
  inject: ['mixpanel'],
  data() {
    return {
      popupVisible: false,
      active: true,
      url: "",
      email: ""
    }
  },
  computed: {
    ...mapGetters(['tracks', 'contentBy']),
    ...mapGetters(['EMAILUSER'])
  },
  components: {
    Footer
  },
  methods: {
    openWhatsapp() {
      window.location.href = `https://wa.me/15593547145/?text=I’d%20like%20help%20regarding%20the%20Dr.%20Kegel%20Plan%20that%20I%20purchased.%0AHere’s%20the%20email%20address%20from%20which%20the%20purchase%20was%20made%3A%20` + this.email;
    }
  },
  mounted() {
    setTimeout(() => {
      window.scrollTo(0, -100)
      document.body.style.overflow = 'unset'
      this.email = localStorage.getItem('email')?.replaceAll('\"', '');
    }, 100)
  },
  created() {
    this.mixpanel.track('Final Screen Shown')
  },
  beforeRouteLeave(to, from, next) {
    next(false)
  }
};
</script>

<style lang="scss" scoped>
.divider {
  margin: 32px 0;
  opacity: 0.1;
}

.fs-16-14 {
  text-align: left;
  font-family: "SF Pro Text Regular";
}

.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__questions {
    font-family: "SF-Pro-Display-Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 135%;
    color: #111113;
    margin-bottom: 24px;
  }

  &__email {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #111113;
    margin-bottom: 32px;

    a:link {
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }

    a:active {
      text-decoration: none;
    }
  }

  &__offer {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: rgba(17, 17, 19, 0.75);
    padding: 0;
  }
}

.whatsapp-btn {
  background: linear-gradient(0deg, #20CB42, #20CB42), #111113;
  box-shadow: 0px 15px 37px rgba(32, 203, 66, 0.64);
  //border-radius: 9px;
  //border: hidden;
  //color: #fff;
  //font-family: "SF Pro Text Regular";
  //font-style: normal;
  //font-weight: 700;
  //font-size: 18px;
  //line-height: 1;
  //padding: 12px;
  //margin: 0 auto;
  //display: flex;
  //justify-content: center;
  //cursor: pointer;
  //align-items: center;
  //box-sizing: border-box;
  //width: 100%;
  //max-width: 311px;

  & img {
    width: 36px;
    height: 36px;
    margin-right: 16px;
  }
}

.instructions {
  font-family: "SF Pro Text Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding: 24px 0 0;

  text-align: center;

  /* 111113 */

  color: #111113;
}

.Final {
  max-width: 311px;
  padding-bottom: 64px !important;

  @media (min-width: 600px) {
    max-width: 600px;
  }

  .h2 {
    font-family: "SF-Pro-Display-Bold";
    line-height: 135%;
    font-size: 36px;
    line-height: 135%;

    @media (max-width:480px) {
      font-size: 24px;
    }

    p {
      font-family: "SF Pro Text Semibold";
      font-size: 20px;
      line-height: 150%;
      margin-top: 24px;

      @media (max-width:480px) {
        font-size: 14px;
        margin-top: 16px;
      }
    }

  }

  .block-bg {
    max-width: 100%;
    padding: 16px;
    background: #F1F3F9;
    border-radius: 9px;

    .text {
      font-size: 18px;
      line-height: 150%;
      margin-top: 16px;

      .text-bold {
        font-family: "SF Pro Text Semibold";
      }

      @media (max-width:480px) {
        font-size: 14px;
      }
    }

    .item-li {
      line-height: 150%;
      font-size: 18px;
      font-family: "SF Pro Text Semibold";

      @media (max-width:480px) {
        font-size: 14px;
      }

      .check {
        margin-right: 16px;
        width: 32px;
        height: 32px;
      }
    }
  }

  .mw-450 {
    max-width: 450px;
    margin: 32px auto 32px;

    @media (max-width:480px) {
      margin: 32px auto 0;
    }

    .layout__thumbnail {
      display: block;
      // max-width: 310px;
      margin: 0 auto 32px;

      @media (max-width:480px) {
        // max-width: 210px;
        margin: 0 auto 0px;
      }

      img {
        width: 100%;
      }
    }

    .text-line {
      font-family: "SF Pro Text Medium";
      font-size: 18px;
      line-height: 140%;
      opacity: 0.5;
      width: 100%;
      margin-top: 32px;
      display: block;

      @media (max-width:480px) {
        font-size: 16px;
      }

      :before,
      :after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 44%;
        height: 1px;
        background-color: #EEEEEE;
        position: relative;
      }

      :before {
        margin-left: -44%;
        left: -8px;
      }

      :after {
        margin-right: -44%;
        right: -8px;
      }
    }

    .title_code {
      font-family: "SF Pro Text Bold";
      font-size: 18px;
      line-height: 140%;
      margin: 32px auto 16px;

      @media (max-width:480px) {
        font-size: 16px;
      }
    }

    .diskont {
      width: 100%;
      margin: 50px 0 0px;

      @media (max-width:480px) {
        margin: 28px 0 0px;
      }
    }
  }

  .block-bottom {
    font-family: "SF Pro Text Semibold";
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 24px;

    @media (max-width:480px) {
      font-size: 16px;
    }
  }

  .mw-520 {
    max-width: 520px;
    margin: 0 auto;
    display: block;
  }

  .footer-controls__button {
    max-width: 230px;
    margin: 48px auto 0;
    z-index: 0;
  }
}

.blue {
  color: #5773D6;
}

.bg-blue {
  background: #5773D6;
}

.qr-footer {
  background: #111113;
  width: 100%;
  display: block;
  width: 100%;
  font-family: "SF Pro Text Regular";
  font-size: 18px;
  line-height: 142.34%;
  padding: 0;

  @media (max-width:480px) {
    font-size: 16px;
  }

  &__text {
    color: #ffffff;
    text-align: center;
    padding: 24px 48px;

    @media (min-width: 600px) {
      padding: 32px 48px;
    }
  }
}

.v-popup__submit_btn,
.v-popup__btn {
  background-color: rgb(228, 66, 64);
  max-width: 230px;
  border: none;
  border-radius: 9px;
  padding: 16px 37px;
  font-family: "SF Pro Text Medium";
  font-size: 18px;
  line-height: 135%;
  color: #ffffff;
  margin-top: 32px;
}

@media (max-width: 480px) {
  .container-main {
    padding-bottom: 0px;
  }
}</style>
