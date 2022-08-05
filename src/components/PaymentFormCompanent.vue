<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <!-- <div id="solid-payment-form-container">
          <button class="pay cursor active" v-if="apple_pay">
            <img src="@/assets/images/icons/apple_pay.svg" alt="apple_pay">
          </button>
          <button class="pay cursor " v-else>
            <img src="@/assets/images/icons/google_pay.svg" alt="google_pay">
          </button>
        </div> -->
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
    style="position: sticky"
    v-if="paymentMethodType == 2"
  />
  <CardCompanent
    class="w-100 flex-column align-items-center justify-content-center"
    v-if="paymentMethodType == 1"
    @error="error"
    @success="success"
    :item="this.item"
  />
  <div
    id="apple-pay-button"
    class="d-flex align-items-center justify-content-beetwen"
    style="width: 100%; display: inline"
    v-if="paymentMethodType == 3"
  ></div>
</template>

<script>
import PayPalComponent from "../components/PayPalComponent.vue";
import CardCompanent from "@/components/CardCompanent.vue";

export default {
  components: {
    PayPalComponent,
    CardCompanent,
  },
  inject: ["mixpanel"],
  emits: ["error", "success"],
  props: ["item"],
  data() {
    return {
      item: "kegel_1-USD-Every-3-months",
      paymentMethodType: 1, //1- card, 2 - paypal
    };
  },
  methods: {
    error() {
        this.$emit("error");
    },
    success() {
        this.$emit("success");
    },
    applePaySelect() {
      if (this.paymentMethodType != 3) {
        this.paymentMethodType = 3;
        this.getApplePayIntent();
      }
    },
    payPalSelect() {
      if (this.paymentMethodType != 2) {
        this.paymentMethodType = 2;
       // this.getPayPalIntent();
      }
    },
    cardSelect() {
      if (this.paymentMethodType != 1) {
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
                  this.nextUrl();
                  //paymentIntent contains authorized payment intent
                })
                .catch((error) => {
                   this.paymentError();
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

.cursor{
  cursor: pointer;
}

.block-pay{
  width: 310px;
  .w-100{
    width: 100%;
    margin-top: 48px;
  }
  .flex-wrap{
    flex-wrap: wrap;
    width: 380px;
    margin-top: 48px;
    @media (max-width:480px) {
      max-width: 270px;
      justify-content: center;
    }
    p{
      font-family: "SF Pro Text Regular";
      font-size: 16px;
      .bold{
        font-family: "SF Pro Text Semibold";
      }
      @media (max-width:480px) {
        font-size: 14px;
        margin-top: 11px;
      }
    }
  }
  button.pay{
    background: #F9F9F9;
    border: 2px solid #F9F9F9;
    border-radius: 9px;
    margin-bottom:10px ;
    max-width: 300px;
    display: block;
    &:focus, &:hover, &:active{
      background: rgba(87, 115, 214, 0.1);
      border: 2px solid #5773D6;
    }
    img{
      max-width: 100%;
    }
  }
  button.pay.active {
    background: rgba(87, 115, 214, 0.1);
    border: 2px solid #5773D6;
  }
  button.pay.small{
    max-width: 150px;
    height: 49px;
    img{
      width: 100%;
    }
  }
  .aple_pay{
    background: #111113;
    color: #FFFFFF;
    border: 3px solid #111113;
    border-radius: 100px;
    margin-bottom:10px ;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    padding: 15px 65px;
    font-family: "SF Pro Text Semibold";
    &:focus{
      background: #1B1B1E;
      border: 3px solid #C7C7C7;
    }
  }
  .error{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E44240;
    border: 3px solid #E44240;
    &:focus{
      background: #eb6967;
      border: 3px solid #E44240;
    }
  }
  .Pay_pay{
    background: #FFBB1B;
    color: #2D2F2F;
    border: 3px solid #FFBB1B;
    border-radius: 100px;
    margin-bottom:10px ;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    padding: 15px 55px;
    font-family: "SF Pro Text Regular";
    &:focus{
      background: #FFBB1B;
      border: 3px solid #F3F3F3;
    }
  }
}
.ml-2{
  margin-left: 2px;
}
.mr-2{
  margin-right: 2px;
}

.small::before{
  content: "";
  width: 1px;
  height: 14px;
  position: absolute;
  display: block;
  background: #11111350;
  top: -15px;
  left: 50%;
}

input, textarea{outline:none;}
input:active, textarea:active{outline:none;}
:focus {outline:none;}
textarea {resize:none;}
textarea {resize:vertical;}
textarea {resize:horizontal;}



</style>
