<script setup>
import VueLinkPreview from '@ashwamegh/vue-link-preview';
import {onMounted, ref, watch} from "vue";
import fetchPreviewData from "@/services/jsonlink.js";
import {generateThumbnailFromText} from "@/services/util.js";
const props = defineProps({
  url: {
    type: String,
    default: 'https://deploy-preview-43--bukportfolio.netlify.app/',
  },

})
const previewData = ref(null);
const loading = ref(true);

const fetchData = async () => {
   previewData.value = await fetchPreviewData(props.url);
   loading.value = false;
};

function limit(description, length){
  return description.length > length ? description.substring(0, length) + '...' : description;
}
function extractImage (images, favicon){
  if (images){
    if (images.length > 0){
      return images[0];
    }
  }
  if (favicon.length > 0){
    return favicon;
  }
  console.log(generateThumbnailFromText("No Image"))
  return generateThumbnailFromText("No Image");
}


onMounted(fetchData);
watch(() => props.url, fetchData);
const handleClick = () => {
  window.open(props.url, '_blank');
};

</script>

<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else-if="!previewData.status">
    <p>Failed to fetch link preview.</p>
  </div>
  <div v-else @click="handleClick" style="cursor: pointer">
    <div>
      <div class="relative w-full mx-auto overflow-hidden bg-gray-200 rounded-md shadow sm:max-w-lg ring-1">
        <div class="flex flex-col space-y-2">
          <a href="#" class="w-full">
            <img
                class="object-cover w-full h-[250px]"
                :src="extractImage(previewData.images, previewData.favicon)"
                alt="" />
          </a>

          <div class="flex flex-col p-3 space-y-1">
            <p class="text-gray-500">{{ previewData.title }}</p>
            <p class="text-sm text-black" v-text="limit(previewData.description, 245)">

            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>