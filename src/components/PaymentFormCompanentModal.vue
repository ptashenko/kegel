<template>
  <div
    id="paymentForm"
  >
    <div id="solid-payment-form-container" class="flex justify-between flex-wrap pb-32px">
      <button
        class="flex justify-center items-center basis-full bg-[#f9f9f9] h-49px border-none rounded-9px min-h-49px mb-5px box-border active:(border-2px border-[#5773D6] border-solid) focus:(border-2px border-[#5773D6] border-solid)"
        :class="{ 'border-2px border-[#5773D6 border-solid]': paymentMethodType == 3 }"
        v-if="apple_pay"
        @click="applePaySelect"
      >
        <img class="w-full" src="@/assets/images/svg/icon_apple-pay.svg" alt="apple_pay" />
      </button>
      <div class="flex">
        <button
            class="flex items-center flex-1 mr-5px bg-[#F9F9F9] rounded-9px border-2px border-[#fff]"
            :class="{ 'bg-[#5773D61A] !border-blue': paymentMethodType == 2 }"
            @click="payPalSelect"
        >
          <img class="w-full" src="@/assets/images/svg/icon_paypal.svg" alt="apple_pay" />
        </button>
        <button
            class="flex items-center flex-1 bg-[#F9F9F9] rounded-9px border-2px border-[#fff]"
            :class="{ 'bg-[#5773D61A] !border-blue': paymentMethodType == 1 }"
            @click="cardSelect"
        >
          <img class="w-full" src="@/assets/images/icons/card.png" alt="apple_pay" />
        </button>
      </div>
    </div>
    <div class="py-16px px-0 border-t-1px border-[#F1F3F9] border-b-1px grid grid-cols-[2fr,1fr] gap-y-10px">
        <p class="font-sans font-normal font-400 text-14px leading-normal text-[#11111380]">{{ subscription }}</p>
        <p class="font-sans font-normal font-400 text-14px leading-normal text-[#11111380] text-right tracking-0px">{{ fullPrice }}</p>
        <p class="font-sans font-normal font-400 text-14px leading-normal text-[#11111380]">{{ $t('paymentForm.discount', { discount }) }}</p>
        <p
            class="font-sans font-normal font-700 text-14px leading-normal text-[#11111380] text-right tracking-0px"
            :class="!theme ? 'text-red' : 'text-blue'">
          -{{ discountAmount }}
        </p>
    </div>
    <div class="py-16px px-0 border-t-1px border-[#F1F3F9] border-b-1px grid grid-cols-[0.7fr,2fr] gap-y-10px border-none">
      <p class="font-normal font-700 text-18px leading-normal text-[#000]">{{ $t('paymentForm.total') }}</p>
      <p class="font-normal font-700 text-18px leading-normal text-[#000] text-right">{{ discountPrice }}</p>
        <p class="font-sans font-normal font-400 text-12px leading-normal text-[#11111380]">{{ $t('paymentForm.perDate', { subscriptionDate }) }}</p>
        <p
            class="font-sans font-normal font-700 text-12px leading-normal text-[#11111380] text-right tracking-0px"
            :class="!theme ? 'text-red' : 'text-blue'">
            {{ $t('paymentForm.saved', { discountAmount }, { discount }) }}
        </p>
    </div>
  </div>
  <PayPalComponent
    class="sticky pt-18px"
    v-if="paymentMethodType == 2"
    @error="error"
    @success="success"
    @clickButton="clickButton"
    :item="this.item"
    :discountPrice="discountPrice"
    :fullPrice="fullPrice"
    :subscriptionDate="subscriptionDate"
  />
  <CardCompanentModal
    v-if="paymentMethodType == 1"
    @error="error"
    @success="success"
    @clickButton="clickButton"
    :item="this.item"
    :auth_price="this.auth_price"
    :discountPrice="discountPrice"
    :fullPrice="fullPrice"
    :subscriptionDate="subscriptionDate"
    :theme="theme"
  />
  <!-- <button @click="success">PAYMENT IS SUCCESSFUL</button> -->
  <div
    id="apple-pay-button"
    class="w-full inline pt-16px"
    v-if="paymentMethodType == 3"
  ></div>
</template>

<script>
import PayPalComponent from "../components/PayPalComponent.vue";
import CardCompanentModal from "@/components/CardCompanentModal.vue";

export default {
  components: {
    PayPalComponent,
    CardCompanentModal,
  },
  inject: ["mixpanel"],
  emits: ["error", "success", "clickButton"],
  props: ["item","theme","auth_price", "discount", "discountAmount", "discountPrice", "fullPrice", "subscription", "subscriptionDate"],
  data() {
    return {
      // item: "kegel_1-USD-Every-3-months",
      // auth_price: 100,
      paymentMethodType: 1, //1- card, 2 - paypal
      blockSelect: false,
      apple_pay: false,
    };
  },
  methods: {
    error(message) {
      this.blockSelect = false;
      this.$emit("error", message);
    },
    success() {
      this.blockSelect = false;
      document.body.style.overflow = 'auto'
      this.$emit("success");
    },
    clickButton() {
      this.blockSelect = true;
      this.$emit("clickButton");
    },
    applePaySelect() {
      if (this.paymentMethodType != 3) {
        this.paymentMethodType = 3;
        this.getApplePayIntent();
      }
    },
    payPalSelect() {
      if (this.paymentMethodType != 2 && !this.blockSelect) {
        this.paymentMethodType = 2;
      }
    },
    cardSelect() {
      if (this.paymentMethodType != 1 && !this.blockSelect) {
        this.paymentMethodType = 1;
      }
    },
    getApplePayIntent() {
      var intent = null;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test",
        },
        body: JSON.stringify({
          currency_code: "USD",
          amount: this.auth_price * 100,
          payment_method_type: "apple_pay",
        }),
      };
      fetch(
        "http://192.168.88.187:8000/api/web-payment/init/card-payment/",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) =>
          window.Chargebee.getInstance()
            .load("apple-pay")
            .then((applePayHandler) => {
              applePayHandler.setPaymentIntent(data.payment_intent);
              return applePayHandler
                .mountPaymentButton("#apple-pay-button")
                .then(() => {
                  // once button mounted
                  return applePayHandler.handlePayment();
                })
                .then((paymentIntent) => {
                  console.log(paymentIntent.paymentIntent);
                  const requestOptions = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer test",
                    },
                    body: JSON.stringify({
                      web_user_uuid: localStorage
                        .getItem("web_user_uuid")
                        .replaceAll('"', ""),
                      intent_id: paymentIntent.paymentIntent.id,
                      item: this.item,
                      apple_pay: true
                    }),
                  };
                  fetch(
                    "http://192.168.88.187:8000/api/web-payment/accept/card-payment/",
                    requestOptions
                  ).then((response) => {
                    this.loading = false;
                    this.success();
                    //this.nextUrl();
                  });
                })
                .catch((error) => {
                  this.error();
                  // handle error
                });
            })
        );
    },
  },
  mounted() {
    this.payPalSelect();
  },
};
</script>
<style lang="scss" scoped>

.total-container {
  display: flex;
  justify-content: space-between;
  margin: 16px 0 32px;


  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #000;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #11111380;

    &--false {
      font-weight: 600;
      color: #E44240;
    }
    &--true {
      font-weight: 600;
      color: #5773D6;
    }
  }
}
.paymentInfo-container {
  padding: 16px 0;
  border-top: 1px solid #F1F3F9;
  border-bottom: 1px solid #F1F3F9;
  display: grid;
  grid-template-columns: 2fr 1fr;
  row-gap: 10px;

  &.reverse {
    grid-template-columns: 0.7fr 2fr;
  }

  .amount {
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: end;
    letter-spacing: 0px;
  }

  &__text {
    font-family: "SF Pro Text Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #11111380;
  }
}
.buttons-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 32px;

  &__apple {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 100%
  }

  .payButton {
    background: #f9f9f9;
    border: none;
    border-radius: 9px;
    min-height: 49px;
    box-sizing: border-box;

    &:active, &:focus {
      border: 2px solid #5773D6;
    }

    &.active {
      border: 2px solid #5773D6;
    }

    @media (max-width: 430px) {
      height: 49px;
    }
  }

  &__notApple {
    display: flex;
    flex-basis: 48%;
    margin-top: 5px;
  }

  &__logo {
    width: 100%;
  }
}
.payment-info {
  margin-top: 16px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #111113;
  opacity: 0.75;
  @media (min-width: 600px) {
    width: 100%;
  }
}
.cursor {
  cursor: pointer;
}

.block-pay {
  width: 310px;

  .w-100 {
    width: 100%;
    margin-top: 48px;
  }
  .flex-wrap {
    flex-wrap: wrap;
    width: 380px;
    margin-top: 48px;
    @media (max-width: 480px) {
      max-width: 270px;
      justify-content: center;
    }
    p {
      font-family: "SF Pro Text Regular";
      font-size: 16px;
      .bold {
        font-family: "SF Pro Text Semibold";
      }
      @media (max-width: 480px) {
        font-size: 14px;
        margin-top: 11px;
      }
    }
  }
  button.pay {
    background: #f9f9f9;
    border: 2px solid #f9f9f9;
    border-radius: 9px;
    margin-bottom: 10px;
    width: 100%;
    display: block;
    // &:focus, &:hover, &:active{
    //   background: rgba(87, 115, 214, 0.1);
    //   border: 2px solid #5773D6;
    // }
    img {
      max-height: 49px;
      max-width: 100%;
    }
  }
  button.pay.active {
    background: rgba(87, 115, 214, 0.1);
    border: 2px solid #5773d6;
  }
  button.pay.small {
    max-width: 150px;
    height: 49px;
    img {
      width: 100%;
      @media (min-width: 600px) {
          width: 153px;
        }
    }
    @media (min-width: 600px) {
      max-width: 255px;
      width: 255px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .aple_pay {
    background: #111113;
    color: #ffffff;
    border: 3px solid #111113;
    border-radius: 100px;
    margin-bottom: 10px;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    padding: 15px 65px;
    font-family: "SF Pro Text Semibold";
    &:focus {
      background: #1b1b1e;
      border: 3px solid #c7c7c7;
    }
  }
  .error {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e44240;
    border: 3px solid #e44240;
    &:focus {
      background: #eb6967;
      border: 3px solid #e44240;
    }
  }
  .Pay_pay {
    background: #ffbb1b;
    color: #2d2f2f;
    border: 3px solid #ffbb1b;
    border-radius: 100px;
    margin-bottom: 10px;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    padding: 15px 55px;
    font-family: "SF Pro Text Regular";
    &:focus {
      background: #ffbb1b;
      border: 3px solid #f3f3f3;
    }
  }
}
.ml-2 {
  margin-left: 2px;
}
.mr-2 {
  margin-right: 2px;
}

.small::before {
  content: "";
  width: 1px;
  height: 14px;
  position: absolute;
  display: block;
  background: #11111350;
  top: -15px;
  left: 50%;
}

input,
textarea {
  outline: none;
}
input:active,
textarea:active {
  outline: none;
}
:focus {
  outline: none;
}
textarea {
  resize: none;
}
textarea {
  resize: vertical;
}
textarea {
  resize: horizontal;
}

.card-pay-button {
  display: block;
  color: #ffffff;
  border-radius: 100px;
  margin: 34px auto 10px;
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  padding: 15px 65px;
  font-family: "SF Pro Text Semibold";
  background: #e44240;
  border: 3px solid #e44240;
  max-width: 375px;
  &:focus {
    background: #eb6967;
    border: 3px solid #e44240;
  }
}

.card-pay-button.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
}
</style>
