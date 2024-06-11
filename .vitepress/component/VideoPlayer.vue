<template>
  <div style="color: #3dd68c;text-align: center">测试</div>
  <div>
    <video ref="videoPlayer" class="video-js">


    </video>

  </div>




</template>

<script>
import {ref} from "vue";
const videoParameter = ref({
  autoplay: true, // 是否自动播放
  language: "zh-CN",
  controls: true, // 是否显示控制为false时用户不可以与之交互控件
  preload: "auto", // 自动加载 预加载 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
  errorDisplay: true,// 错误展示
  fluid: true, // 跟随外层容器变化大小，跟随的是外层宽度
  controlBar: true,
  // textTrackDisplay: false,  // 不渲染字幕相关DOM
  sources: [
    {
      // https://vjs.zencdn.net/v/oceans.mp4
      src:'https://media.w3.org/2010/05/sintel/trailer.mp4',
      type: 'video/mp4'
    }
  ],
  // 是否支持热键|过键盘按键来控制视频播放的功能
  // plugins: {
  //   //这里需要引入本地插件videojs.hotkeys.min.js,这里我引入了v0.2.13版本，因为其他版本有线上依赖项
  //   hotkeys: {
  //     // 定义快捷键和对应的操作
  //     volumeStep: 0.1,  // 调整音量的步长
  //     seekStep: 5,      // 快进/快退的时间（秒）
  //     fullscreenKey: function (event, player) {
  //       // 自定义全屏快捷键，按下 F 键时触发全屏切换
  //       if (!document.fullscreenElement) {
  //         player.requestFullscreen();
  //       } else {
  //         document.exitFullscreen();
  //       }
  //     }
  //   }
  // },
  notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息
  // techOrder: PlayOrder.value, // 定义Video.js技术首选的顺序
  //自动播放属性,muted:静音播放
  muted: false,
})


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
            // https://vjs.zencdn.net/v/oceans.mp4
            src:'https://media.w3.org/2010/05/sintel/trailer.mp4',
            type: 'video/mp4'
          }
        ]
      },

      player: null
    }
  },
  mounted() {
    // this.player = videojs(this.$refs.videoPlayer, this.options, () => {
    //   this.player.log('onPlayerReady', this);
    // });
    this.player = videojs(this.$refs.videoPlayer, videoParameter.value, () => {
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