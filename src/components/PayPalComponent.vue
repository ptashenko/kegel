<template>
  <div id="paypal-button" ref="paypalButton"></div>
</template>

<script>
export default {
  inject: ["mixpanel"],
  emits: ["error", "success", "clickButton"],
  props: ["item", "discountPrice", "fullPrice", "subscriptionDate"],
  computed: {
    isIphone() {
      return window.navigator.platform == "iPhone"
    }
  },
  methods: {
    async processPayPal(token) {
      const payload = {
        web_user_uuid: localStorage
            .getItem("web_user_uuid")
            .replaceAll('"', ""),
        token_id: token,
        item: this.item,
      }

      await this.$store.dispatch('payPalAcceptPayemnt', payload)
      this.$emit("success");
      window.document.body.classList.remove('remove')
      if (this.isIphone) {
        const disableFitness = sessionStorage.getItem('disableFitness')
        const ios_v1 = sessionStorage.getItem('ios_v1');
        if (!disableFitness) {
          ios_v1 ? this.$router.push('PlanFinalTwo_ios') : this.$router.push('PlanFinalTwo')
        } else {
          this.$router.push("Whatsapp");
        }
      } else {
        this.$router.push('Whatsapp')
      }
    },
    async paypalInitPayment() {
      try {
        const { data } = await this.$store.dispatch('payPalInitPayemnt');
        if (this.$refs.paypalButton?.childElementCount === 0) {
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
                  this.processPayPal(data.billingToken);
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
      } catch(error) {
        console.error(error)
      }
    },
    onClickPayPal() {
      this.$emit("clickButton");
      this.mixpanel.track("Check-out Started", {
        type: "PayPal",
      });
    },
  },
  mounted() {
    this.paypalInitPayment()
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
