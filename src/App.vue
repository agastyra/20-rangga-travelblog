<template>
  <v-app>
    <VHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
    <VFooter />
  </v-app>
</template>

<script>
import VHeader from "@/components/HeaderComponent.vue";
import VFooter from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(92, 92, 92, 0.32);
}
</style>
