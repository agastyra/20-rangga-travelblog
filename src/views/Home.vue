<template>
  <div class="home">
    <div class="hero">
      <v-row>
        <HeroImage />
      </v-row>
      <v-row>
        <v-col cols="6" style="padding-left: 0px">
          <v-img src="@/assets/2.jpg">
            <div class="overlay"></div>
            <div class="hero-text">
              <v-btn dark color="black" style="padding: 5px 10px">Travel</v-btn>
              <h3>Rock View</h3>
              <p>Rangga A</p>
            </div>
          </v-img>
        </v-col>
        <v-col cols="6" style="padding-right: 0px">
          <v-img src="@/assets/3.jpg">
            <div class="overlay"></div>
            <div class="hero-text">
              <v-btn dark color="black" style="padding: 5px 10px">Travel</v-btn>
              <h3>Rock View</h3>
              <p>Rangga A</p>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </div>
    <div class="about">
      <v-row>
        <h1 class="mb-5">About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          aspernatur reiciendis accusantium laboriosam architecto error autem
          cumque id hic enim porro, est rem aliquid expedita ducimus eum? Ea,
          obcaecati culpa. Laudantium vel quibusdam, voluptas maxime omnis
          dignissimos nostrum esse qui non nobis atque minima distinctio facilis
          necessitatibus ullam molestiae minus incidunt delectus reprehenderit
          cumque dolor nam? Voluptate fugiat itaque
        </p>
      </v-row>
    </div>
  </div>
</template>

<script>
import HeroImage from "@/components/HeroImage.vue";

export default {
  name: "HomeView",
  components: {
    HeroImage,
  },
};
</script>

<style scoped>
div.home {
  margin-top: 60px;
}

div.hero {
  margin-bottom: 60px;
}

div.about {
  margin-bottom: 60px;
}

.hero-text {
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  margin: 20px 40px;
}

.hero-text > * {
  margin: 5px 0;
}
</style>
