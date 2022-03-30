<template>
  <div id="page-home" class="pb-4">
    <div class="header"></div>
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
      <SectionCredits/>
    </div>
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue';
import SectionImage from '@/components/SectionImage.vue';
import SectionTimeline from '@/components/SectionTimeline.vue';
import SectionMessages from '@/components/SectionMessages.vue';
import SectionCredits from '@/components/SectionCredits.vue';

export default {
  name: 'HomeView',
  components: {
    SectionHero,
    SectionImage,
    SectionTimeline,
    SectionMessages,
    SectionCredits,
  },
};
</script>

<style lang="scss" scoped>
#page-home {
  background-color:#fcfcfc;
  background-image:url('../assets/img/background.png');
  background-repeat: repeat;
  min-height:100vh;
  position:relative;
  padding-top:1px;
}
.header {
  width:100%;
  height:1000px;
  background-image:url('../assets/img/banner.png');
  background-position:50% -30px;
  background-repeat:no-repeat;
  background-size:1160px;
  position:absolute;
  top:0;
}
.section {
  position:relative;
  .section-grid {
    min-height:400px;
    &.section-box {
      background-color:rgb(235, 235, 235, 0.85);
      border-color:#B90B4A;
      border-right:4px solid #B90B4A;
      border-bottom:4px solid #B90B4A;
    }
  }
}
</style>
