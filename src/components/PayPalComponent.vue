<template>
  <div id="paypal-button"></div>
</template>

<script>
export default {
    inject: ['mixpanel'],
    methods: {
        processPayPal(token) {
        const requestOptions = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer test",
            },
            body: JSON.stringify({
            web_user_uuid: localStorage.getItem("web_user_uuid").replaceAll('\"',''),
            token_id: token,
            item: this.item,
            }),
        };
        fetch("https://int2.kegel.men/api/web-payment/accept/pay-pal-payment", requestOptions)
            .then((response) => response.json())
            .then((data) => {
            nextUrl();
            });
        }
    },
  mounted () {
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
              window.paypal.Button.render(
                {
                  env: "sandbox", // Or 'sandbox',
                  commit: true, // Show a 'Pay Now' button
                  style: {
                    tagline: false,
                    height: 45,
                  },
                  payment: function () {
                    return data.link.split("=")[1]; // The payment ID from earlier
                  },
                  onClick: function (data, action) {
                    console.log("Check-out Started PayPal");
                    this.mixpanel.track('Check-out Started', {
                        type: "PayPal"
                    })
                  },
                  onAuthorize: function (data, actions) {
                    // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
                    console.log(data);
                    processPayPal(data.id);
                  },
                  onCancel: function (data, actions) {
                    this.paymentError();
                  },
                },
                "#paypal-button"
              )
          }
        );

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
  }
}
</script>