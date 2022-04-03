<template>
  <div class="container">
    <div class="form">
      <v-row>
        <v-col cols="12">
          <h1>Form</h1>
        </v-col>
      </v-row>
      <form action="" method="post">
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Title"
              id="title"
              name="title"
              placeholder="Your title here..."
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-textarea
              name="description"
              label="Description"
              id="description"
              placeholder="Your desc here..."
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-btn
              type="submit"
              style="background: #789395; color: white; padding: 20px 30px"
              >Subscribe</v-btn
            >
          </v-col>
        </v-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
};
</script>

<style scoped>
.form {
  margin: 60px 0;
}
</style>
