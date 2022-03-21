<template>
  <v-img src="@/assets/1.jpg" style="position: relative">
    <div class="overlay"></div>
    <div class="hero-text">
      <h1 class="">The Art Of Travel</h1>
      <p>Finding beauty, one flight at a time</p>
      <v-btn color="yellow" style="padding: 20px 25px">Subscribe</v-btn>
    </div>
  </v-img>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-text {
  color: white;
  position: absolute;
  top: 30%;
  left: 45%;
}

.hero-text > * {
  margin: 5px 0;
}
</style>
