<template>
  <v-container class="section-grid">
    <v-row no-gutters class="mb-8">
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
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left text-right">
          <!-- OCTUBER -->
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/-VMSX4pujvc"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right white--text">
          <div class="rewind-texts" v-if="cards">
            <div :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]">
              <div class="card-name text-h6 pr-12 py-2">{{cards[0].name}}</div>
              <div class="card-text text-body-1 pr-4 pb-2">{{cards[0].message}}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left white--text text-right">
          <div class="rewind-texts" v-if="cards">
            <div :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]">
              <div class="card-name text-h6 pr-12 py-2">{{cards[1].name}}</div>
              <div class="card-text text-body-1 pr-4 pb-2">{{cards[1].message}}</div>
            </div>
          </div>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right text-left">
          <!-- NOVEMBER -->
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/Vg0r8xuYrA4"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left text-right">
          <!-- DECEMBER -->
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/k9nwJ8ZBhSU"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right white--text">
          <div class="rewind-texts" v-if="cards">
            <div :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]">
              <div class="card-name text-h6 pr-12 py-2">{{cards[2].name}}</div>
              <div class="card-text text-body-1 pr-4 pb-2">{{cards[2].message}}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left white--text text-right">
          <div class="rewind-texts" v-if="cards">
            <div :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]">
              <div class="card-name text-h6 pr-12 py-2">{{cards[3].name}}</div>
              <div class="card-text text-body-1 pr-4 pb-2">{{cards[3].message}}</div>
            </div>
          </div>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right text-left">
          <!-- JANUARY -->
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/eC0FOfd_dN8"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left text-right">
          <!-- FEBRUARY -->
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/2CeGqjGyb_s"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right white--text">
          <div class="rewind-texts" v-if="cards">
            <div :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]">
              <div class="card-name text-h6 pr-12 py-2">{{cards[4].name}}</div>
              <div class="card-text text-body-1 pr-4 pb-2">{{cards[4].message}}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left white--text text-right">
          <div class="rewind-texts" v-if="cards">
            <div :class="[ 'card', `card-style-${Math.ceil(Math.random() * 6)}`]">
              <div class="card-name text-h6 pr-12 py-2">{{cards[5].name}}</div>
              <div class="card-text text-body-1 pr-4 pb-2">{{cards[5].message}}</div>
            </div>
          </div>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right text-left">
          <!-- MARCH -->
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/wOvcZo99itQ"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: [],
  data: () => ({
    cards: null,
  }),
  mounted() {
    this.$root.$on('timelineCards', (cards) => {
      this.cards = cards;
      this.$nextTick(() => {
        this.$forceUpdate();
      });
      // console.log(a.map((v) => v.name));
    });
  },
};
</script>

<style lang="scss" scoped>
.rewind-item {
  position:relative;
  height:400px;
  .rewind-left {
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    width:50%;
    padding-right:50px;
    .rewind-texts {
      right:50px;
    }
  }
  .rewind-center {
    width:0px;
    background:#fcc;
    position:absolute;
    left:50%;
    top:0;
    bottom:0;
    margin-left:-10px;
    border-left:4px solid #c0c0c0;
    .rewind-dot {
      width:30px;
      height:30px;
      background:#0c1a28;
      border-radius:20px;
      border:4px solid #c0c0c0;
      position:absolute;
      top:50%;
      margin-left:-17px;
    }
  }
  .rewind-right{
    position:absolute;
    right:0;
    top:0;
    bottom:0;
    width:50%;
    padding-left:50px;
    .rewind-texts {
      left:50px;
    }
  }
  .rewind-frame {
    margin:20px;
    width:640px;
    height:360px;
    max-width:90%;
  }
  .rewind-texts {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
  }
}

.card {
  background:#1a1a1a;
  position:relative;
  padding:10px;
  min-height:100px;
  width:100%;
  background-repeat: repeat-y;
  background-size: contain;
  &.card-style-1 { background:url('../assets/img/card-01.png'); }
  &.card-style-2 { background:url('../assets/img/card-02.png'); }
  &.card-style-3 { background:url('../assets/img/card-03.png'); }
  &.card-style-4 { background:url('../assets/img/card-04.png'); }
  &.card-style-5 { background:url('../assets/img/card-05.png'); }
  &.card-style-6 { background:url('../assets/img/card-06.png'); }
  .card-name {
    color:#343c75;
    font-weight:bold;
    text-shadow:
      0px 0px 3px #fff,
      0px 0px 3px #fff,
      1px 1px 2px #fff;
  }
  .card-text {
    white-space: pre-line;
    font-weight:bold;
    padding:5px 10px;
    background-color:rgba(255, 255, 255, 0.8);
    border-radius:10px;
    color:#000;
    max-height:280px;
    overflow-y:auto;
    overflow-x:hidden;
  }
}
</style>
