import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import chartDataService from "../services/service";

const ACTION_FETCH_CHART_DATA = "fetchChartData";

const ACTIONS = {
  ACTION_FETCH_CHART_DATA,
};

export default new Vuex.Store({
  state: {
    // data
    actionConsts: ACTIONS, // Avoid using string for Dispatch Actions, and commit mutations
    updatedChartData: [],
    chartDataList: {},
    chartData: [],
    selectedChartType: "-1",
  },
  getters: {
    // computed properties
  },
  // Actions are used from UI, which will fetch the data from the service
  // and then invoke the appropriate commits to the state.
  actions: {
    // Methods
    fetchChartData(context) {
      chartDataService.getChartDataList(
        function (response) {
          context.commit("setChartDataList", response.data);
        },
        function (error) {
          console.log(error);
        }
      );
    },
  },
  mutations: {
    // Changing the state/data
    setChartDataList(state, data) {
      state.chartDataList = data;
    },
    updateSelectedChartType(state, chartType) {
      state.selectedChartType = chartType;
    },
  },
});
