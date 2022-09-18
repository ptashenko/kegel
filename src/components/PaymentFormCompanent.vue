<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center"
    id="paymentForm"
  >
    <span class="payment-info mb-32">You will only be charged $1 for your 7-day trial.</span>
    <div id="solid-payment-form-container">
      <button
        class="pay cursor"
        v-if="apple_pay"
        :class="{ active: paymentMethodType == 3 }"
        @click="applePaySelect"
      >
        <img src="@/assets/images/icons/apple_pay.png" alt="apple_pay" />
      </button>
    </div>
  </div>
  <div class="d-flex align-items-center justify-content-beetwen">
    <button
      class="pay small mr-2 cursor"
      :class="{ active: paymentMethodType == 2 }"
      @click="payPalSelect"
    >
      <img src="@/assets/images/icons/paypal.png" alt="apple_pay" />
    </button>
    <button
      class="pay small ml-2 cursor"
      :class="{ active: paymentMethodType == 1 }"
      @click="cardSelect"
    >
      <img src="@/assets/images/icons/card.png" alt="apple_pay" />
    </button>
  </div>
  <PayPalComponent
    class="d-flex align-items-center justify-content-beetwen"
    style="position: sticky; padding-top: 18px"
    v-if="paymentMethodType == 2"
    @error="error"
    @success="success"
    @clickButton="clickButton"
    :item="this.item"
  />
  <CardCompanent
    class="w-100 flex-column align-items-center justify-content-center"
    v-if="paymentMethodType == 1 && (ver == 1 || ver == 3)"
    @error="error"
    @success="success"
    @clickButton="clickButton"
    :item="this.item"
    :auth_price="this.auth_price"
  />
    <CardCompanentZip
    class="w-100 flex-column align-items-center justify-content-center"
    v-if="paymentMethodType == 1 && ver == 2"
    @error="error"
    @success="success"
    @clickButton="clickButton"
    :item="this.item"
    :auth_price="this.auth_price"
  />
  <div
    id="apple-pay-button"
    class="d-flex align-items-center justify-content-beetwen"
    style="width: 100%; display: inline; padding-top: 16px"
    v-if="paymentMethodType == 3"
  ></div>
</template>

<script>
import PayPalComponent from "../components/PayPalComponent.vue";
import CardCompanent from "@/components/CardCompanent.vue";
import CardCompanentZip from "./CardCompanentZip.vue";

export default {
  components: {
    PayPalComponent,
    CardCompanent,
    CardCompanentZip
  },
  inject: ["mixpanel"],
  emits: ["error", "success", "clickButton"],
  props: ["item", "auth_price"],
  data() {
    return {
      // item: "kegel_1-USD-Every-3-months",
      auth_price: 100,
      paymentMethodType: 1, //1- card, 2 - paypal
      blockSelect: false,
      apple_pay: true,
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
          amount: 100,
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
                  console.log(paymentIntent);
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
                      intent_id: paymentIntent.id,
                      item: this.item,
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
    if (window.ApplePaySession) {
      this.apple_pay = ApplePaySession.canMakePayments();
    }
  },
};
</script>
<style lang="scss" scoped>
.mb-32 {
  margin-bottom: 32px;
}
.payment-info {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #111113;
  opacity: 0.75;
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
    max-width: 300px;
    display: block;
    // &:focus, &:hover, &:active{
    //   background: rgba(87, 115, 214, 0.1);
    //   border: 2px solid #5773D6;
    // }
    img {
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
</style>
