<template>
  <v-container class="section-grid section-box">
    <v-row no-gutters>
      <v-col cols="12">
        <h1 class="yellow--text text--darken-3 text-center pa-0 ma-0">
          <img
            src="../assets/img/section-messages.png" height="80"
            alt="Message Cards" />
        </h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <div v-masonry="'bdaycards'" transition-duration="0.3s" item-selector=".card" stagger="0s">
          <div
            v-masonry-tile
            :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]"
            v-for="(item, ix) in cards" :key="`card-${ix}`">
            <div class="card-name text-h6 pr-12 py-2">{{item.name}}</div>
            <div class="card-text text-body-1 pr-4 pb-2">{{item.message}}</div>
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
    source: 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/reimu6m.json',
    cards: [],
  }),
  methods: {
    shuffleCards() {
      for (let i = this.cards.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    },
    reSortCards() {
      this.cards = this.cards.sort((a, b) => {
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      });
    },
  },
  mounted() {
    // Load data
    (async () => {
      const fetchSource = await axios.get(this.source).catch(() => null);
      const data = fetchSource && fetchSource.data ? fetchSource.data : {};
      this.cards = Object.values(data.messages)
        .sort((a, b) => a.time - b.time);
      setTimeout(() => {
        this.shuffleCards();
        this.$root.$emit('timelineCards', this.cards.slice(0, 6));
        this.cards = this.cards.slice(6);
        this.reSortCards();
        this.$nextTick(() => {
          twemoji.parse(document.body);
          this.$redrawVueMasonry('bdaycards');
          setTimeout(() => {
            this.$redrawVueMasonry('bdaycards');
          }, 1200);
        });
      }, 1000);
    })();
  },
};
</script>

<style lang="scss" scoped>
.card {
  // background:#B90B4A;
  position:relative;
  // padding:10px;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  border-radius:10px;
  // border:2px solid #0f0f0f;
  background-repeat: repeat-y;
  background-size: contain;
  .card-name {
    color:#fff;
    font-weight:bold;
    text-shadow:0px 0px 3px #000, 0px 0px 6px #000;
  }
  .card-text {
    white-space: pre-line;
    font-weight:bold;
    padding:5px 10px;
    background:#B90B4A;
    // background-color:rgba(255, 255, 255, 0.8);
    border-radius:10px;
    color:#fff;
    // text-shadow:
    //   0px 0px 3px #fff,
    //   0px 0px 3px #fff,
    //   0px 0px 15px #ffcc00;
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
