<script setup>
const videoArray = [
    "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
    "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
    "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
    "https://res.cloudinary.com/chiaka/video/upload/v1660593767/samples/cld-sample-video.mp4",
    ]
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <div v-for="(vid, index) in videoArray" :key="index">
        // <!-- width="640" height="360" -->
        <video class="h-auto max-w-full rounded-lg"  controls>
            <source :src="vid" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>

</template>

<style scoped>

</style>