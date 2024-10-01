<script setup>
const videoArray = [
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
  "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
]
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
</script>


<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(48.8rem,1fr))] w-full gap-2">
    <div v-for="(path, index) in videoArray" :key="index" class="h-auto max-w-full">
      <div >
        <video-player
            :src="path"
            controls
            :loop="true"
            :volume="0.6"
            :height=468
            :width=488
            :fluid="true"
        />

      </div>

      <!--      <video class="h-auto max-w-full rounded-lg" controls>-->
      <!--        <source :src="vid" type="video/mp4">-->
      <!--        Your browser does not support the video tag.-->
      <!--      </video>-->
    </div>
  </div>

</template>

<style scoped>

</style>