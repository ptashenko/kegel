<template>
  <div id="card-pay-container">
    <!-- Render card components in fields-mode -->
    <!-- Pass styles, classes, locale, placeholder, fonts as props -->
    <div class="ex1-contain">
      <div class="ex1-fieldset">
        <div class="ex1-field">
          <input
            class="ex1-input"
            type="text"
            id="nameInput"
            v-model="name"
            placeholder="Name on Card"
            minlength="2"
            required
            pattern="[A-Za-z ]{2,}"
            @click="diselectName"
          />
          <!-- <label class="ex1-label">Name on Card</label
            > -->
        </div>
        <div class="ex1-field">
          <div class="ex1-input" id="card-combined"></div>
          <label class="ex1-label"></label><i class="ex1-bar" id="cardBar"></i>
        </div>
      </div>
    </div>

    <button
      type="submit"
      :class="{ submit: loading }"
      class="card-pay-button red-shadow"
      @click="authorize"
    >
      Get my plan
    </button>
    <!-- <div class="error" role="alert" v-if="error">{{ error }}</div> -->
    <!-- <div class="token" v-if="token">{{ token }}</div> -->
  </div>
</template>

<script>
export default {
  inject: ["mixpanel"],
  emits: ["error", "success", "clickButton"],
  props: ["item", "auth_price"],
  data() {
    return {
      loading: false,
      cardComponent: null,
      cardComplete: false,
      payPalIntent: "",
      token: "",
      error: "",
      firstName: "",
      ver: Array.isArray(localStorage.getItem('ver')) ? 1 : localStorage.getItem('ver')
    };
  },
  methods: {
    diselectName() {
      document.getElementById("nameBar").classList.remove("invalid-bar");
    },
    authorize() {
      if (!this.cardComplete) {
        document.getElementById("cardBar").classList.add("invalid-bar");
      } else {
        document.getElementById("cardBar").classList.remove("invalid-bar");
      }

      if (document.getElementsByClassName("ex1-input")[0].checkValidity() && this.cardComplete) {
        document.getElementById("nameBar").classList.remove("invalid-bar");

        this.$emit("clickButton");
        this.loading = true;
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer test",
          },
          body: JSON.stringify({
            currency_code: "USD",
            amount: 100,
            payment_method_type: "card",
          }),
        };
        fetch(
          "https://int2.kegel.men/api/web-payment/init/card-payment/",
          requestOptions
        )
          .then((response) => response.json())
          .then((data) =>
            this.cardComponent
              .authorizeWith3ds(data.payment_intent, {}, {})
              .then((paymentIntent) => {
                // this.token = paymentIntent;
                // this.error = "";
                console.log(paymentIntent);

                if(this.ver == 3) {
                  this.$router.push({
                    name: "AddressPage",
                    params: {
                      paymentIntentId: paymentIntent.id,
                      name: document.getElementById("nameInput").value,
                      item: this.item
                    }
                  });
                } else {
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
                      name: document.getElementById("nameInput").value,
                    }),
                  };
                  fetch(
                    "https://int2.kegel.men/api/web-payment/accept/card-payment/",
                    requestOptions
                  ).then((response) => {
                    this.loading = false;
                    this.$emit("success");
                    //this.nextUrl();
                  });
                }
                // Send ajax call to create a subscription or to create a card payment source using the paymentIntent ID
              })
              .catch((error) => {
                this.loading = false;
                this.error = error;
                this.token = "";
                console.log(error);
                this.$emit("error", error);
                //this.paymentError();
              })
          );
      } else {
        if (!document.getElementsByClassName("ex1-input")[0].checkValidity()) {
          document.getElementById("nameBar").classList.add("invalid-bar");
        }
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
