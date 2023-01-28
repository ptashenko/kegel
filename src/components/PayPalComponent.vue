<template>
  <p class="card-pay-text">
    You agree that {{ discountPrice }} will be charged as an intro offer, then {{ fullPrice }} will be automatically billed every {{ subscriptionDate }}. Manage subscription via billing center.
  </p>
  <div id="paypal-button" ref="paypalButton"></div>
</template>

<script>
export default {
  inject: ["mixpanel"],
  emits: ["error", "success", "clickButton"],
  props: ["item"],
  data() {
    return {
      ver: Array.isArray(localStorage.getItem('ver')) ? 1 : localStorage.getItem('ver')
    };
  },
  methods: {
    processPayPal(token) {
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
          token_id: token,
          item: this.item,
        }),
      };
      fetch(
        "https://int2.kegel.men/api/web-payment/accept/pay-pal-payment",
        requestOptions
      )
        .then((response) => {
          this.$emit("success");
        });
    },
    onClickPayPal() {
      this.$emit("clickButton");
      this.mixpanel.track("Check-out Started", {
        type: "PayPal",
      });
    },
  },
  mounted() {
    {
      var intent = null;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test",
        },
      };
      fetch(
        "https://int2.kegel.men/api/web-payment/init/pay-pal-payment/",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (this.$refs.paypalButton.childElementCount == 0) {
            window.paypal.Button.render(
              {
                env: "production", // Or 'sandbox',
                commit: true, // Show a 'Pay Now' button
                locale: "en_US",
                style: {
                  size: "medium",
                  shape: "pill",
                  label: "buynow",
                  branding: true,
                  tagline: "false",
                  height: 55
                },
                payment: function () {
                  return data.link.split("=")[1]; // The payment ID from earlier
                },
                onClick: () => {
                  this.onClickPayPal();
                },
                onAuthorize: (data, actions) => {
                  // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
                  console.log(data);
                  if(this.ver == 4) {
                    this.$router.push({
                      name: "EmailAdress2",
                      params: {
                        token: data.billingToken,
                        flow: "PayPal",
                        item: this.item
                      }
                    });
                  } else {
                    this.processPayPal(data.billingToken);
                  }
                },
                onCancel: (data, actions) => {
                 this.$emit("error", data);
                },
                onError: (data, actions) => {
                 this.$emit("error", data);
                },
              },
              "#paypal-button"
            );
          }
        });

      //     window.Chargebee.getInstance().load("paypal").then((paypalHandler) => {

      //         paypalHandler.setPaymentIntent(this.payPalIntent);
      //         return paypalHandler.mountPaymentButton("#paypal-button").then(() => {
      //             // once button mounted
      //             return paypalHandler.handlePayment();
      //         })
      //         .then((paymentIntent) => {
      //             // handle success
      //         })
      //         .catch((error) => {
      //           //this.paymentError();
      //             // handle error
      //         });
      // });
    }
    // container IS finished rendering to the DOM
  },
};
</script>

<style lang="scss" scoped>
.zoid-outlet{
    max-width: 300px;
    }

.card-pay-text {
  font-family: "SF Pro Text Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 135%;
  text-align: center;
  color: #11111380;
  margin-bottom: 32px;
}
</style>