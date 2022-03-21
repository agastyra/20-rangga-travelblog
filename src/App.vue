<template>
  <v-app>
    <VHeader />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Contact />
    <VFooter />
  </v-app>
</template>

<script>
import VHeader from "@/components/HeaderComponent.vue";
import VFooter from "@/components/FooterComponent.vue";
import Contact from "@/components/ContactComponent.vue";

export default {
  name: "App",
  components: {
    VHeader,
    Contact,
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
