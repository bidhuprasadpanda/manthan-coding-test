<template>
  <div class="sidenav panel panel-default">
    <div class="panel-heading header-title">Filters</div>
    <div class="panel-body">
      <div
        class="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        <div class="panel">
          <select class="browser-default custom-select" v-model="chartType">
            <option value="-1">Overall Sales</option>
            <option value="1">Overall Orders</option>
            <option value="2">Page Views</option>
            <option value="3">Page Rec Clickthru Rate</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      chartType: -1,
    };
  },
  created() {
    // this.updateData();
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
  },
  watch: {
    chartType: function (val) {
      this.$store.commit("updateSelectedChartType", val);
    },
  },
  methods: {},
};
</script>

<style></style>
