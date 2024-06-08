<template>
  <div style="color: #3dd68c;text-align: center">测试</div>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  // props: {
  //
  // },
  data() {
    return {
      options: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src:'https://media.w3.org/2010/05/sintel/trailer.mp4',
            type: 'video/mp4'
          }
        ]
      },

      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
</script>