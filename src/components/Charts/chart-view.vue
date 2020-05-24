<template>
  <div id="wrapper">
    <!--Top NavBar Starts-->
    <top-nav-bar></top-nav-bar>
    <!--Top NavBar Ends-->
    <div class="container-fluid">
      <!-- Breadcrumb Section Starts-->
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li class="active">Charts</li>
      </ol>
      <!-- Breadcrumb Section Ends-->
      <div class="row content">
        <!-- Filter Section Starts -->
        <div class="col-sm-3">
          <filter-component></filter-component>
        </div>
        <!-- Filter Section Ends -->
        <div class="col-sm-9">
          <div class="panel panel-default">
            <div class="panel-body">
              <!-- Chart Section Starts -->
              <div
                class="col-sm-12 col-xs-12"
                v-if="updatedChartData.length > 0"
              >
                <GChart
                  type="LineChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
              <div class="col-sm-12 col-xs-12 text-center" v-else>
                <h3>No Data Found !!</h3>
              </div>
              <!-- Chart Section Ends -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "../partials/top-navbar.vue";
import filterComponent from "../commons/filter-component.vue";
import { GChart } from "vue-google-charts";
export default {
  data: function () {
    return {
      chartDataHeader: ["Year", "Overall Sales"],
      updatedChartData: [],
      chartOptions: {
        chart: {
          title: "Company Performance",
          height: 400,
        },
      },
    };
  },
  components: {
    TopNavBar,
    filterComponent,
    GChart,
  },
  computed: {
    selectedChartType: {
      get: function () {
        return this.$store.state.selectedChartType;
      },
      set(selectedType) {
        return selectedType;
      },
    },
    chartDataList() {
      return this.$store.state.chartDataList;
    },
    chartData() {
      return [this.chartDataHeader, ...this.updatedChartData];
    },
  },
  watch: {
    selectedChartType: function (val) {
      // method for preparing chart data
      this.updateData();
    },
    chartDataList: function (val) {
      // method for preparing chart data
      this.updateData();
    },
  },
  methods: {
    updateData: function () {
      var chartList = this.chartDataList.records;
      if (this.selectedChartType === "-1") {
        this.updatedChartData = chartList.map((obj) => [obj.date, obj.sales]);
        this.chartDataHeader = ["Year", "Overall Sales"];
      } else if (this.selectedChartType === "1") {
        this.updatedChartData = chartList.map((obj) => [obj.date, obj.orders]);
        this.chartDataHeader = ["Year", "Overall Orders"];
      } else if (this.selectedChartType === "2") {
        this.updatedChartData = chartList.map((obj) => [
          obj.date,
          obj.pageViews,
        ]);
        this.chartDataHeader = ["Year", "Page Views"];
      } else if (this.selectedChartType === "3") {
        this.updatedChartData = chartList.map((obj) => [
          obj.date,
          obj.clickThruRate,
        ]);
        this.chartDataHeader = ["Year", "Page Rec Clickthru Rate"];
      }
    },
  },
};
</script>
