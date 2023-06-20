<template>
  <div id="card-pay-container">
    <!-- Render card components in fields-mode -->
    <!-- Pass styles, classes, locale, placeholder, fonts as props -->
    <div class="ex1-contain">
      <div class="ex1-fieldset">
        <div class="ex1-field bg-[#F1F3F9] px-10px py-17px rounded-9px shadow-input">
          <input
              class="ex1-input !p-0 focus:(border-none outline-none)"
              type="text"
              id="nameInput"
              v-model="name"
              placeholder="Name on Card"
              minlength="2"
              required
              pattern="[A-Za-z ]{2,}"
          />
          <i class="opacity-0" id="nameBar"></i>
          <!-- <label class="ex1-label">Name on Card</label
            > -->
        </div>
        <div class="ex1-field bg-[#F1F3F9] px-10px py-17px rounded-9px shadow-input">
          <div class="ex1-input" id="card-combined"></div>
          <label class="ex1-label"></label>
          <i class="ex1-bar opacity-0" id="cardBar" :class="{'border-b-2px border-b-red': !cardComplete}"></i>
        </div>
      </div>
    </div>
    <button
        type="submit"
        :disabled="!cardComplete"
        :class="[theme ? 'bg-blue shadow-button-blue' : 'bg-red shadow-button-red', { submit: loading }]"
        class="card-pay-button disabled:(opacity-50 cursor-default)"
        @click="authorize"
    >
      Continue
    </button>
    <!-- <div class="error" role="alert" v-if="error">{{ error }}</div> -->
    <!-- <div class="token" v-if="token">{{ token }}</div> -->
  </div>
</template>

<script>
export default {
  inject: ["mixpanel"],
  emits: ["error", "success", "clickButton"],
  props: ["item","theme", "auth_price", "discountPrice", "fullPrice", "subscriptionDate"],
  data() {
    return {
      loading: false,
      cardComponent: null,
      cardComplete: false,
      payPalIntent: "",
      token: "",
      error: "",
    };
  },
  methods: {
    async authorize() {
      this.$emit("clickButton");
      this.loading = true;
      const payload = {
        currency_code: "USD",
        amount: this.auth_price * 100,
        payment_method_type: "card",
      }

      const { data } = await this.$store.dispatch('initPayment', payload);

      try {
        const paymentIntent = await this.cardComponent.authorizeWith3ds(data.payment_intent, {}, {})
        this.$emit('success');
        this.$router.push({
          name: "AddressPage",
          params: {
            paymentIntentId: paymentIntent.id,
            name: document.getElementById("nameInput").value,
            item: this.item
          }
        });
      } catch(error) {
        this.error = error;
        this.token = "";
        console.log('error', error);
        this.$emit("error", error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    window.Chargebee.init({
      site: "appercut",
      publishableKey: "live_H5n9AkhJPqxJcus1SjSCzY4581sNVtH8w",
    });
    console.log("Init Card");
    var options = {
      fonts: ["https://fonts.googleapis.com/css?family=Roboto:300,500,600"],

      // add classes for different states
      classes: {
        focus: "focus",
        invalid: "invalid",
        empty: "empty",
        complete: "complete",
      },

      // add placeholders
      placeholder: {
        number: "4111 1111 1111 1111",
      },

      // Set locale
      locale: "en",

      style: {
        // Styles for default state
        base: {
          color: "#333",

          ":focus": {
            // color: '#424770',
          },

          "::placeholder": {
            color: "#abacbe",
          },

          ":focus::placeholder": {
            // color: '#7b808c',
          },
        },

        // Styles for invalid state
        invalid: {
          color: "#E94745",

          ":focus": {
            color: "#e44d5f",
          },
          "::placeholder": {
            color: "#FFCCA5",
          },
        },
      },
    };
    window.Chargebee.getInstance()
        .load("components")
        .then(() => {
          this.cardComponent = window.Chargebee.getInstance()
              .createComponent("card", options)
              .at("#card-combined");

          this.cardComponent.mount();
          var mixpanelSended = false;
          this.cardComponent.on("change", (currentState) => {
            console.log(currentState);
            this.cardComplete = currentState.complete
            document.getElementById("cardBar").classList.remove("invalid-bar");
            if (!currentState.empty && !mixpanelSended) {
              mixpanelSended = true;
              this.mixpanel.track("Check-out Started", {
                type: "CC",
              });
            }
            console.log(currentState);
          });
        });
  },
};
</script>

<style lang="scss" scoped>
#card-pay-container {
  width: 100%;
  margin-top: 32px;
}
.card-pay-text {
  font-family: "SF Pro Text Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 135%;
  text-align: center;
  color: #11111380;
}

.ex1.container {
  margin: auto;
  padding: 100px 0;
  min-height: 100vh;
}
.ex1-wrap {
  max-width: 400px;
  margin: auto;
  border-radius: 8px;
  background: #fff;
  padding: 32px;
}
.ex1-field {
  position: relative;
  margin-bottom: 18px;
}
.ex1-fields {
  display: flex;
  margin-left: -16px;
}
.ex1-fields .ex1-field {
  flex: 1;
  margin-left: 16px;
}
.ex1-label {
  font-size: 12px;
  font-weight: 500;
  color: #7b808c;
  position: absolute;
  top: 0.25rem;
  pointer-events: none;
  padding-left: 0.125rem;
  z-index: 1;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}
.ex1-input {
  width: 100%;
  display: block;
  background: transparent;
  border-radius: 0;
  border: none;
  padding: 4px 2px;
  border-width: 0;
  border-color: transparent;
  color: #333;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  transition: 0.2s;
  cursor: text;
  /* font-weight: inherit; */
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
  box-shadow: none;
  @media (min-width: 600px) {
    font-size: 18px;
  }
}
// .ex1-input::placeholder {
//   color: transparent;
// }
.ex1-input:focus::placeholder {
  color: #7b808c;
}
// .ex1-input:focus ~ .ex1-label,
// .ex1-input.focus ~ .ex1-label,
// .ex1-input.val ~ .ex1-label,
// .ex1-input.complete ~ .ex1-label,
.ex1-input:invalid {
  font-size: 0.8rem;
  color: #e94745;
  top: -1rem;
  left: 0;
  @media (min-width: 600px) {
    font-size: 18px;
  }
}
.ex1-bar {
  position: relative;
  border-bottom: 0.0625rem solid #999;
  display: block;
}

.invalid-bar {
  border-bottom: 0.1125rem solid #e94745;
}

.ex1-bar::before {
  content: "";
  height: 0.125rem;
  width: 0;
  left: 50%;
  bottom: -0.0625rem;
  position: absolute;
  background: #337ab7;
  -webkit-transition: left 0.28s ease, width 0.28s ease;
  transition: left 0.28s ease, width 0.28s ease;
  z-index: 2;
}
.ex1-input:focus ~ .ex1-bar::before,
.ex1-input.focus ~ .ex1-bar::before {
  width: 100%;
  left: 0;
}
.ex1-button {
  background: #0950cc;
  background: #0c0ebd;
  color: #fff;
  font-size: 16px;
  font-family: inherit;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  display: block;
  width: 100%;
  letter-spacing: 0.5px;
  transition: 0.2s;
  cursor: pointer;
}
.ex1-button:hover,
.ex1-button:focus {
  background: #0641a7;
  background: #0a0b9a;
}
.ex1-button.submit {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWxvYWRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQwIDcyQzIyLjQgNzIgOCA1Ny42IDggNDBTMjIuNCA4IDQwIDhzMzIgMTQuNCAzMiAzMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJjMC0xNS40LTEyLjYtMjgtMjgtMjhTMTIgMjQuNiAxMiA0MHMxMi42IDI4IDI4IDI4YzEuMSAwIDIgLjkgMiAycy0uOSAyLTIgMnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNDAgNDAiIHRvPSIzNjAgNDAgNDAiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  color: transparent !important;
  transition-duration: 0s;
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
  max-width: 375px;
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
