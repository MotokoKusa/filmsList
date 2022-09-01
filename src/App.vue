<template>
  <div id="app">
    <SHeader />
    <router-view />
  </div>
</template>
<script>
import "./assets/styles/global.scss";
import SHeader from "@/components/SHeader/SHeader";
export default {
  components: {
    SHeader,
  },
};
</script>
