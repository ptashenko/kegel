<template>
  <div
    class="flex w-full flex-col items-center justify-center"
    id="paymentForm"
  >
    <div id="solid-payment-form-container" class="w-full">
      <button
        :class="{ 'bg-[#5773d61a] border-2px border-blue': paymentMethodType == 3 }"
        v-if="apple_pay"
        @click="applePaySelect"
      >
        <img src="@/assets/images/svg/icon_apple-pay.svg" alt="apple_pay" />
      </button>
    </div>
  </div>
  <div class="flex w-full items-center justify-beetwen">
    <button
      class="h-49px border-2px sm:flex sm:items-center sm:justify-center flex-1 mr-5px cursor-pointer bg-[#F9F9F9] rounded-9px border-[#fff] flex items-center"
      :class="{ 'bg-[#5773d61a] border-2px !border-blue': paymentMethodType == 2 }"
      @click="payPalSelect"
    >
      <img src="@/assets/images/svg/icon_paypal.svg" alt="apple_pay" class="w-full sm:w-153px"/>
    </button>
    <button
      class="h-49px border-2px sm:flex sm:items-center sm:justify-center flex-1 cursor-pointer bg-[#F9F9F9] rounded-9px border-[#fff] flex items-center"
      :class="{ 'bg-[#5773d61a] border-2px !border-blue': paymentMethodType == 1 }"
      @click="cardSelect"
    >
      <img src="@/assets/images/icons/card.png" alt="apple_pay" class="w-full sm:w-153px"/>
    </button>
  </div>
  <PayPalComponent
    class="flex items-center justify-beetwen sticky mt-32px sm:mt-18px"
    v-if="paymentMethodType == 2"
    @error="error"
    @success="success"
    @clickButton="clickButton"
    :item="this.item"
    :subscriptionDate="period"
    :discountPrice="discPrice"
    :fullPrice="fullPrice"
  />
  <CardCompanentModal
    class="w-full mt-48px flex flex-col items-center justify-center"
    v-if="paymentMethodType == 1 && (ver == 1 || ver == 3)"
    @error="error"
    @success="success"
    @clickButton="clickButton"
    :item="this.item"
    :subscriptionDate="period"
    :discountPrice="discPrice"
    :fullPrice="fullPrice"
    :auth_price="this.auth_price"
  />
  <div
    id="apple-pay-button"
    class="flex items-center justify-beetwen w-full inline pt-16px"
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
  props: {
    item: {
      type: Array,
    },
    period: {
      type: String,
    },
    fullPrice: {
      type: String,
      default: '9.99 USD'
    },
    discPrice: {
      type: String,
      default: '6.69 USD'
    }
  },
  data() {
    return {
      // item: "kegel_1-USD-Every-3-months",
      //auth_price: 100,
      paymentMethodType: 1, //1- card, 2 - paypal
      blockSelect: false,
      apple_pay: false,
      ver: localStorage.getItem('ver') == null ? 1 : localStorage.getItem('ver')
    };
  },
  methods: {
    error(message) {
      this.blockSelect = false;
      this.$emit("error", message);
    },
    success() {
      this.blockSelect = false;
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
        // this.getPayPalIntent();
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
        "https://int2.kegel.men/api/web-payment/init/card-payment/",
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
                    "https://int2.kegel.men/api/web-payment/accept/card-payment/",
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
    // if (window.ApplePaySession) {
    //   this.apple_pay = ApplePaySession.canMakePayments();
    // }
  },
};
</script>
<style lang="scss" scoped>
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
</style>
