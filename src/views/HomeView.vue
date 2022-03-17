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
    <div class="section mb-12">
      <SectionMessages/>
    </div>
    <div class="section mb-12">
      <SectionGallery/>
    </div>
    <div class="section mb-12">
      <SectionCredits/>
    </div>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue';
import SectionImage from '@/components/SectionImage.vue';
import SectionTimeline from '@/components/SectionTimeline.vue';
import SectionMessages from '@/components/SectionMessages.vue';
import SectionGallery from '@/components/SectionGallery.vue';
import SectionCredits from '@/components/SectionCredits.vue';

export default {
  name: 'HomeView',
  components: {
    SectionHero,
    SectionImage,
    SectionTimeline,
    SectionMessages,
    SectionGallery,
    SectionCredits,
  },
};
</script>

<style lang="scss" scoped>
#page-home {
  background-color:#162636;
  background-image:url('../assets/img/background.png');
  background-repeat: repeat;
  min-height:100vh;
}
.header {
  width:100%;
  height:300px;
  background-image:url('../assets/img/banner.png');
  background-position:50%;
  background-repeat:no-repeat;
  position:absolute;
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
