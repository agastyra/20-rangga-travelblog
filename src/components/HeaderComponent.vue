<template>
  <v-app-bar style="background: #adbfcd" elevate-on-scroll app>
    <div class="container">
      <v-row>
        <v-img src="@/assets/logo.png" max-width="50" max-height="50"></v-img>
        <v-spacer></v-spacer>
        <ul class="d-flex">
          <li><router-link to="/" class="link active">Home</router-link></li>
          <li><router-link to="/" class="link">Blogs</router-link></li>
          <li><router-link to="/" class="link">About</router-link></li>
          <li><router-link to="/contact" class="link">Contact</router-link></li>
        </ul>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style: none;
  align-items: center;
}

li {
  margin: 0 15px;
}

li:last-child {
  margin-right: 0;
}

.link {
  color: #857c7c !important;
  text-decoration: none;
}

.link.active {
  color: black !important;
}
</style>
