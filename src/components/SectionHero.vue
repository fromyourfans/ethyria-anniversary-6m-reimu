<template>
  <v-container class="section-grid section-box pb-8 mb-16">
    <v-row no-gutters class="pt-8">
      <v-col cols="6"
        class="text-right black--text text-h6
          text--darken-1 pt-4 pr-8 pl-4 font-weight-bold hero-text">
        <p>
          Welcome to Reimu Endou 6 month celebration page!<br />
          The Phantomos have gathered some clips, drawings and messages to
          celebrate this special occasion,<br />
          also to showcase some of the moments
          that our cute ghost gave to us since her debut!
        </p>
        <p>
          We are so happy to be able to share this with you Reimu!<br />
          Know that from the beginning and until the end,
          the Phantomos always got your back!
        </p>
      </v-col>
      <v-col cols="6" class="pr-8">
        <iframe title="feature-video"
          width="100%" height="330"
          src="https://www.youtube.com/embed/M2nAKBv-kzs"
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
