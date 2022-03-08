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
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/gx7AJmpHykc"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right white--text">
          <div class="rewind-texts">
            <p class="my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus magna nisi, varius id risus vel, vulputate tempor mauris.
              <em>- Zer0Pendragon</em>
            </p>
            <p class="my-8">
              Pellentesque at ligula elementum, rutrum ante nec, sagittis diam.
              Quisque laoreet ligula lectus, vel malesuada est vehicula at.
              <em>- Izendale</em>
            </p>
            <p class="my-8">
              In nec scelerisque quam, sed ultricies ligula.
              <em>- Pinkerton</em>
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left white--text text-right">
          <div class="rewind-texts">
            <p class="my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus magna nisi, varius id risus vel, vulputate tempor mauris.
              <em>- Zer0Pendragon</em>
            </p>
            <p class="my-8">
              Pellentesque at ligula elementum, rutrum ante nec, sagittis diam.
              Quisque laoreet ligula lectus, vel malesuada est vehicula at.
              <em>- Izendale</em>
            </p>
            <p class="my-8">
              In nec scelerisque quam, sed ultricies ligula.
              <em>- Pinkerton</em>
            </p>
          </div>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right text-left">
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/gx7AJmpHykc"
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
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/gx7AJmpHykc"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right white--text">
          <div class="rewind-texts">
            <p class="my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus magna nisi, varius id risus vel, vulputate tempor mauris.
              <em>- Zer0Pendragon</em>
            </p>
            <p class="my-8">
              Pellentesque at ligula elementum, rutrum ante nec, sagittis diam.
              Quisque laoreet ligula lectus, vel malesuada est vehicula at.
              <em>- Izendale</em>
            </p>
            <p class="my-8">
              In nec scelerisque quam, sed ultricies ligula.
              <em>- Pinkerton</em>
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="rewind-item">
      <v-col>
        <div class="rewind-left white--text text-right">
          <div class="rewind-texts">
            <p class="my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus magna nisi, varius id risus vel, vulputate tempor mauris.
              <em>- Zer0Pendragon</em>
            </p>
            <p class="my-8">
              Pellentesque at ligula elementum, rutrum ante nec, sagittis diam.
              Quisque laoreet ligula lectus, vel malesuada est vehicula at.
              <em>- Izendale</em>
            </p>
            <p class="my-8">
              In nec scelerisque quam, sed ultricies ligula.
              <em>- Pinkerton</em>
            </p>
          </div>
        </div>
        <div class="rewind-center">
          <div class="rewind-dot"></div>
        </div>
        <div class="rewind-right text-left">
          <iframe title="feature-video" class="rewind-frame"
            width="640" height="360"
            src="https://www.youtube.com/embed/gx7AJmpHykc"
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
    //
  }),
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
</style>
