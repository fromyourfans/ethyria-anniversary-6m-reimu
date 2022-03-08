<template>
  <div id="page-home" class="pt-2 pb-4">
    <div class="header">
      <div class="fade"></div>
    </div>
    <div class="section mb-4">
      <SectionHero/>
    </div>
    <div class="section mb-12">
      <SectionImage/>
    </div>
    <div class="section mb-12">
      <SectionTimeline/>
    </div>
    <div class="section mb-12 messages">
      <SectionMessages/>
    </div>
    <div class="section mb-8 artworks">
      <SectionGallery/>
    </div>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue';
import SectionImage from '@/components/SectionImage.vue';
import SectionTimeline from '@/components/SectionTimeline.vue';
import SectionMessages from '@/components/SectionMessages.vue';
import SectionGallery from '@/components/SectionGallery.vue';

export default {
  name: 'HomeView',
  components: {
    SectionHero,
    SectionImage,
    SectionTimeline,
    SectionMessages,
    SectionGallery,
  },
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
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:
      linear-gradient(to top, #0c1a28 0%, rgb(12, 26, 40, 0) 100px),
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
      background-color:rgb(93, 89, 96, 0.95);
      border-color:#41d0c5;
      border-right:4px solid #41d0c5;
      border-bottom:4px solid #41d0c5;
    }
  }
}
</style>
