import Vue from "vue";
import Vuex from "vuex";
import chartpage from "../src/components/Charts/chart-view.vue";
import store from "./store/store";

Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: "#root",
  store: store, // Inject store in the main view, so it can be accessed from all sub-components as this.$store
  created() {
    //On page load fetch request to get chart list from API
    store.dispatch(store.state.actionConsts.ACTION_FETCH_CHART_DATA);
  },
  components: {
    chartpage,
  },
});
