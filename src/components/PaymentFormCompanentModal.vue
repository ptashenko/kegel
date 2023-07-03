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
      if (this.paymentMethodType !== 3) {
        this.paymentMethodType = 3;
        this.getApplePayIntent();
      }
    },
    payPalSelect() {
      if (this.paymentMethodType !== 2 && !this.blockSelect) {
        this.paymentMethodType = 2;
      }
    },
    cardSelect() {
      if (this.paymentMethodType !== 1 && !this.blockSelect) {
        this.paymentMethodType = 1;
      }
    },
    async getApplePayIntent() {
      try {
        const initPayload = {
          currency_code: "USD",
          amount: this.auth_price * 100,
          payment_method_type: "apple_pay",
        }

        const { data } = await this.$store.dispatch('appleInitPayment', initPayload)
        const applePayHandler = await window.Chargebee.getInstance().load("apple-pay");
        applePayHandler.setPaymentIntent(data.payment_intent);
        await applePayHandler.mountPaymentButton("#apple-pay-button")
        const paymentIntent = await applePayHandler.handlePayment()
        console.log(paymentIntent.paymentIntent);
        const acceptPayload = {
          web_user_uuid: localStorage
              .getItem("web_user_uuid")
              .replaceAll('"', ""),
          intent_id: paymentIntent.paymentIntent.id,
          item: this.item,
          apple_pay: true
        }

        await this.$store.dispatch('appleAcceptPayment', acceptPayload)
        this.success();

      } catch (error) {
        console.error(error)
        this.error();
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.payPalSelect();
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


.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
}
</style>
