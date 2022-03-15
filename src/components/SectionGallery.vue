<template>
  <v-container class="section-grid section-box">
    <v-row no-gutters class="mb-4">
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
          <img
            src="../assets/img/section-gallery.png" height="60"
            alt="Art Gallery" />
        </h1>
        <h2 class="grey--text text-center pa-0 ma-0">
          Some Famillie celebrate 6 months through artworks
        </h2>
      </v-col>
    </v-row>
    <v-row no-gutters class="">
      <v-col>
        <div v-masonry="'gallery'" transition-duration="0.3s" item-selector=".card" stagger="0s">
          <div v-masonry-tile class="card">
            <a href="https://twitter.com/Nashiina2001/status/1489221995380486145" target="_blank">
              <img src="@/assets/art/Nashiina_01.jpeg" alt="@Nashiina2001" />
            </a>
            <div class="artist white--text text-center">@Nashiina2001</div>
          </div>
          <div v-masonry-tile class="card">
            <a href="https://twitter.com/devildash27/status/1492514821711228931" target="_blank">
              <img src="@/assets/art/devildash27_01.jpeg" alt="@devildash27" />
            </a>
            <div class="artist white--text text-center">@devildash27</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/Nashiina_02.gif" alt="" />
            <div class="artist white--text text-center">@Nashiina2001</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/Nashiina_03.png" alt="" />
            <div class="artist white--text text-center">@Nashiina2001</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/lostlittle_one_01.png" alt="" />
            <div class="artist white--text text-center">lostlittle_one</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/Leef_01.png" alt="" />
            <div class="artist white--text text-center">Leef</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/Deskun_01.png" alt="" />
            <div class="artist white--text text-center">Deskun</div>
          </div>
          <div v-masonry-tile class="card">
            <img src="@/assets/art/Gyu_01.png" alt="" />
            <div class="artist white--text text-center">Gyu#1512</div>
          </div>
        </div>
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
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.$redrawVueMasonry('gallery'); }, 1000);
      setTimeout(() => { this.$redrawVueMasonry('gallery'); }, 5000);
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  background:#1a1a1a;
  position:relative;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  padding:10px 10px 24px 10px;
  border:2px solid #0f0f0f;
  img {
    width:100%;
  }
  .artist {
    position:absolute;
    bottom:0;
    left:2px;
    right:2px;
    height:30px;
    line-height:30px;
    font-size:20px;
  }
}

@media only screen and (max-width: 1800px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 1264px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>
