<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <img
          class="WL_ExpandDiv_right center-block"
          :src="icons.logoIcon"
          width="150"
        />
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="#">Home</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import tsIcons from "../commons/commonAssetIcons.js";
export default {
  data() {
    return {
      icons: tsIcons,
    };
  },
};
</script>
