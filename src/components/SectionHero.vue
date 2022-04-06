<template>
  <v-container class="section-grid section-box pb-8 mb-16">
    <v-row no-gutters class="pt-8">
      <v-col cols="6"
        class="text-right black--text text-h5
          text--darken-1 pt-4 pr-8 pl-4 font-weight-bold hero-text">
        <p>
          message from phantomos
        </p>
      </v-col>
      <v-col cols="6" class="pr-8">
        <iframe title="feature-video"
          width="100%" height="330"
          src="https://www.youtube.com/embed/Oy990KWx9n8"
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
  margin-top:400px;
  max-width:1280px;
  .hero-text {
    white-space: pre-line;
  }
}
</style>
