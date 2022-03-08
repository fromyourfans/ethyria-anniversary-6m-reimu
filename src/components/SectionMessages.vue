<template>
  <v-container class="section-grid section-box">
    <v-row no-gutters class="mb-4">
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
          <img
            src="../assets/img/section-messages.png" height="60"
            alt="Message Cards" />
        </h1>
        <h2 class="grey--text text-center pa-0 ma-0">
          Heartfelt messages from the Famillie
        </h2>
      </v-col>
    </v-row>
    <v-row no-gutters class="">
      <v-col>
        <div v-masonry="'bdaycards'" transition-duration="0.3s" item-selector=".card" stagger="0s">
          <div
            v-masonry-tile class="card"
            v-for="(item, ix) in cards" :key="`card-${ix}`">
            <div class="binder"></div>
            <div class="card-name text-h6 pr-12 py-2 yellow--text">{{item.name}}</div>
            <div class="card-text text-body-1 pr-4 pb-2 white--text">{{item.message}}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import twemoji from 'twemoji';

export default {
  data: () => ({
    source: 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/millie6m.json',
    cards: [],
  }),
  mounted() {
    // Load data
    (async () => {
      const fetchSource = await axios.get(this.source).catch(() => null);
      const data = fetchSource && fetchSource.data ? fetchSource.data : {};
      this.cards = Object.values(data.messages)
        .sort((a, b) => a.time - b.time);
      this.$nextTick(() => {
        twemoji.parse(document.body);
        this.$redrawVueMasonry('bdaycards');
        setTimeout(() => {
          this.$redrawVueMasonry('bdaycards');
        }, 1200);
      });
    })();
  },
};
</script>

<style lang="scss" scoped>
.card {
  background:#1a1a1a;
  position:relative;
  padding-left:24px;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  border:2px solid #0f0f0f;
  .binder {
    background:#303030;
    position:absolute;
    top:0px;
    left:0px;
    width:10px;
    height:100%;
  }
  .card-name {
    color:#343c75;
  }
  .card-text {
    white-space: pre-line;
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

<style lang="scss">
.card-text {
  img {
    height:1.4rem;
  }
}
</style>
