<template>
  <div id="topApp" class="container">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import smartlookClient from "smartlook-client";
import { addItem } from "./common/localStorage";

export default {
  inject: ["mixpanel"],
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "getContent",
      "getTrack",
      "getHistory",
      "getSeparators",
      "generatUUID",
    ]),
  },
  created() {
    if (window.navigator.platform == "iPhone") {
      // Считываем информацию о статусе в localStorage при загрузке страницы
      if (sessionStorage.getItem("store")) {
        this.$store.replaceState(
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(sessionStorage.getItem("store"))
          )
        );
      }
      // Сохраняем информацию в vuex в localStorage при обновлении страницы
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("store", JSON.stringify(this.$store.state));
      });
    } else {
      // Считываем информацию о статусе в localStorage при загрузке страницы
      if (localStorage.getItem("store")) {
        this.$store.replaceState(
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(localStorage.getItem("store"))
          )
        );
      }
      // Сохраняем информацию в vuex в localStorage при обновлении страницы
      window.addEventListener("beforeunload", () => {
        localStorage.setItem("store", JSON.stringify(this.$store.state));
      });
    }
  },
  watch: {},
  mounted() {
    this.getContent();
    this.getTrack();
    this.getHistory();
    this.getSeparators();
    this.generatUUID();
    // console.log(this.$abtest('experiment_1'))
    const urlParams = new URLSearchParams(window.location.search);
    const webUserUUID = urlParams.get("web_user_id");
    if (webUserUUID != null) {
      addItem("web_user_uuid", webUserUUID);
    }
    const b_click_id = urlParams.get("clickid");
    if (b_click_id != null) {
      addItem("b_click_id", b_click_id);
    }
    const version = urlParams.get("ver");
    if (version != null) {
      addItem("ver", parseInt(version));
      mixpanel.people.set({"Version": version})
    } else {
      addItem("ver", 1);
      mixpanel.people.set({"Version": 1})
    }
    this.mixpanel.identify(
      localStorage.getItem("web_user_uuid").replaceAll('"', "")
    );
    this.mixpanel.people.set({ Init: "-" });
    // this.mixpanel.people.set({ Experiment_1: this.$abtest("experiment_1") });
    smartlookClient.init("c5049693293bbcff326bf80ebda873782ca318d7");
    smartlookClient.identify(
      localStorage.getItem("web_user_uuid").replaceAll('"', "")
    );
    smartlookClient.record({
      forms: true,
      numbers: true,
      emails: false,
      ips: true,
    });
    smartlookClient.getData(() => {
      this.mixpanel.people.set({ Smartlook: smartlookClient.playUrl });
    });
    gtag("get", "G-7MV4FLS470", "client_id", (clientID) => {
      addItem("ga_user_id", clientID);
    });
    gtag("get", "G-7MV4FLS470", "wbraid", (wbraid) => {
      addItem("ga_wbraid", wbraid);
    });
    gtag("get", "G-7MV4FLS470", "gbraid", (gbraid) => {
      addItem("ga_gbraid", gbraid);
    });
    gtag("get", "G-7MV4FLS470", "gclid", (gclid) => {
      addItem("ga_gclid", gclid);
    });
  },
  created() {
    // this.$abtest('experiment_1', { Baseline: 50, VariationA: 50 })
    // console.log("created APP")
  },
};
</script>
<style lang="scss" scoped>
.translate-enter-active,
.translate-leave-active {
  transition: all 0.65s ease;
}

.translate-enter-from,
.translate-leave-to {
  opacity: 0;
}
</style>
 