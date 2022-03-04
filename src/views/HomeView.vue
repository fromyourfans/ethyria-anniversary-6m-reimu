<template>
  <div id="page-home" class="pt-2 pb-4">
    <div class="header">
      <div class="fade"></div>
    </div>
    <div class="section mb-12 hero">
      <v-container class="section-grid section-box pb-8">
        <v-row no-gutters class="mb-4">
          <v-col cols="12">
            <h1 class="yellow--text text--darken-3 text-center pa-0 mx-0 my-">
              <img
                src="../assets/img/section-happy.png" height="60"
                alt="Happy 6-Months Anniversary Millie Parfait!" />
            </h1>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="6"
            class="text-right white--text text-h5 text--darken-1 pt-4 pr-8 pl-4 hero-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus magna nisi, varius id risus vel, vulputate tempor mauris.
            </p>
            <p>
              Pellentesque at ligula elementum, rutrum ante nec, sagittis diam.
              Quisque laoreet ligula lectus, vel malesuada est vehicula at.
            </p>
            <p>
              In nec scelerisque quam, sed ultricies ligula.
            </p>
          </v-col>
          <v-col cols="6" class="pr-8">
            <iframe title="feature-video"
              width="100%" height="330"
              src="https://www.youtube.com/embed/gx7AJmpHykc"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="section mb-12 mural">
      <v-container class="section-grid section-box">
        <v-row no-gutters class="mb-4">
          <v-col cols="12">
            <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
              <img
                src="../assets/img/section-mural.png" height="60"
                alt="Drawing Board" />
            </h1>
            <h2 class="grey--text text-center pa-0 ma-0">
              Famillie gathered around a mural to doodle their feelings for Millie
            </h2>
          </v-col>
        </v-row>
        <v-row no-gutters class="px-8 pb-4">
          <v-col>
            <v-img src="https://mumei500k.fromyour.fans/img/mural1.b34eb720.png" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="section mb-12 timeline">
      <v-container class="section-grid">
        <v-row no-gutters class="mb-4">
          <v-col cols="12">
            <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
              <img
                src="../assets/img/section-rewind.png" height="60"
                alt="Rewind" />
            </h1>
            <h2 class="grey--text text-center pa-0 ma-0">
              Looking back to the fun and amazing moments we had with Millie
            </h2>
          </v-col>
        </v-row>
        <v-row no-gutters class="">
          <v-col cols="5">
            1
          </v-col>
          <v-col cols="2">
            2
          </v-col>
          <v-col cols="5">
            3
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="section mb-8 artworks">
      <v-container class="section-grid section-box">
        <v-row no-gutters class="mb-4">
          <v-col cols="12">
            <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
              <img
                src="../assets/img/section-gallery.png" height="60"
                alt="Art Gallery" />
            </h1>
            <h2 class="grey--text text-center pa-0 ma-0">
              art section description
            </h2>
          </v-col>
        </v-row>
        <v-row no-gutters class="">
          <v-col cols="6">
            1
          </v-col>
          <v-col cols="6">
            2
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
#page-home {
  background-color:#0c1a28;
  min-height:100vh;
}
.header {
  width:100%;
  height:720px;
  background-color:#d0d0d0;
  background-image:url('https://yt3.ggpht.com/81zhps9cD3zvRCK6dbf9iwtiC0yi97n8a-I-PeBvAj6WzkqkrlkvT0JbmzuzquPGM9E5hVwuPg=w1280');
  background-position:50%;
  background-repeat:no-repeat;
  position:absolute;
  top:-270px;
  .fade {
    // &::after
    // content: "";
    // display:block;
    // width:100%;
    // height:100px;
    // margin-top:350px;
    // position:relative;
    // background:linear-gradient(to top, #0c1a28 0%, rgb(12, 26, 40, 0) 100%);
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:
      linear-gradient(to top, #0c1a28 0%, rgb(12, 26, 40, 0) 100px),
      // linear-gradient(to bottom, #0c1a28 270px, rgb(12, 26, 40, 0) 290px),
      linear-gradient(to left, #0c1a28 calc(50% - 640px), rgb(12, 26, 40, 0) calc(50% - 540px)),
      linear-gradient(to right, #0c1a28 calc(50% - 640px), rgb(12, 26, 40, 0) calc(50% - 540px));
  }
}
.section {
  position:relative;
  .section-grid {
    min-height:400px;
    &.section-box {
      background:
        url('../assets/img/stitch-h.png') repeat-x,
        url('../assets/img/stitch-v.png') repeat-y;
      // background-repeat:repeat-x;
      // background-color:#5d5960;
      background-color:rgb(93, 89, 96, 0.95);
      // background-color:rgba(45, 44, 46, 0.93);
      border-color:#41d0c5;
      border-right:4px solid #41d0c5;
      border-bottom:4px solid #41d0c5;
    }
  }
}
.hero {
  margin-top:200px;
  .section-grid {
    max-width:1280px;
  }
  .hero-text {
    white-space: pre-line;
  }
}
</style>
