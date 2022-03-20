<template>
  <v-container class="section-grid section-box pb-8 mb-16">
    <v-row no-gutters class="mb-4">
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 mx-0 my-0">
          <img
            src="../assets/img/section-happy.png" height="120"
            alt="Happy 6-Months and Congrats on 200K Millie!" />
        </h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6"
        class="text-right white--text text-h5 text--darken-1 pt-4 pr-8 pl-4 hero-text">
        <p>

        </p>
      </v-col>
      <v-col cols="6" class="pr-8">
        <iframe title="feature-video"
          width="100%" height="330"
          src="https://www.youtube.com/embed/fZsRQdLLhIQ"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: [],
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.section-grid {
  margin-top:300px;
  max-width:1280px;
  .hero-text {
    white-space: pre-line;
  }
}
</style>
