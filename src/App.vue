<template>
  <v-app>
    <VHeader />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import VHeader from "@/components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    VHeader,
  },
  data: () => ({
    //
  }),
};
</script>
