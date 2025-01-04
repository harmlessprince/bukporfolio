<script setup>
import Container from "@/components/Container.vue";
import {useBlogStore} from "@/store/blog.store.js";
import {onBeforeMount, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {onBeforeRouteUpdate} from 'vue-router'
import {
  generateThumbnailFromText,
  getBlogDate,
} from "@/services/util.js";
import he from 'he';
import DOMPurify from 'dompurify';
import HeroSection from "@/components/HeroSection.vue";

const blogStore = useBlogStore();
const route = useRoute();
onBeforeMount(() => {
  blogStore.fetchSinglePosts(route.params.id);
});
onBeforeMount(() => {
  blogStore.fetchRecentPostsFromAPI();
});

onBeforeRouteUpdate(async (to, from) => {
  blogStore.fetchSinglePosts(to.params.id);
})

function sanitizedHtml(rawHtmlContent) {
  const decoded = he.decode(rawHtmlContent);
  return DOMPurify.sanitize(decoded);
}

function decodeUnicode(str) {
  // Replace Unicode escape sequences with actual characters
  const text = str.replace(/\\u003c/g, '<')
      .replace(/\\u003e/g, '>')
      .replace(/\\u0026/g, '&')
      .replace(/\\u0022/g, '"')
      .replace(/\\u0027/g, "'");
  console.log(text);
  return text;
}

</script>

<template>
  <!-- hero section -->

  <HeroSection
      imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059216/trainerbanner_ljje9a.png"
      page="Blog"
      :text="blogStore.singlePost?.title ?? null"
  />

  <Container>
    <div
        class="mt-[2.4rem] max-sm:mt-[1.5rem] mb-[5rem] text-center flex flex-row max-medium:flex-col justify-between items-top space-y-[2rem]">
      <div class="w-[70rem] max-medium:w-full text-left" v-if="blogStore.singlePost">
        <div class="w-full h-[41.7rem] max-sm:h-[20rem]">
          <img :src="generateThumbnailFromText(blogStore.singlePost.title)" class="w-[100%] h-full relative"
               alt="blogpics"/>
        </div>
        <div class="mt-[2.4rem] flex flex-row items-center space-x-[1rem]">
          <div class="text-[1.4rem] font-[400] text-[#7a7a7a] flex items-center">
<!--            <span class="material-icons">calendar_month</span>-->
            <span>
                {{ getBlogDate(blogStore.singlePost.published) }}
               </span>
          </div>

<!--          <div class="text-[1.4rem] font-[400] text-[#7a7a7a] flex items-center">-->
<!--            <span class="material-icons">person</span>-->
<!--            <span>{{ blogStore.singlePost.author.displayName }}</span>-->
<!--          </div>-->
        </div>
<!--        <div class="flex flex-row items-center space-x-[1rem] mt-2 flex-wrap">-->
<!--            <span class="bg-gray-100 text-gray-700 text-xs font-medium mr-2 px-1.5 py-1 rounded-full" v-for="(category, index) in blogStore.singlePost.labels ?? []"-->
<!--                  :key="index">-->
<!--            {{ category }}-->
<!--            </span>-->
<!--        </div>-->
        <div class="mt-[1.7rem] font-[400] leading-[1.69rem] text-[1.4rem] text-[#7a7a7a]">
          <h1 class="mb-[1rem] font-[700] text-[2.8rem] leading-[3.38rem] text-secondaryColor">
            {{ blogStore.singlePost.title }}
          </h1>
        </div>
        <div v-html="sanitizedHtml(blogStore.singlePost.content)" class="post_detail"></div>
        <div>

        </div>
      </div>
      <!-- second part of the flex -->
      <div class="w-[31.1rem] max-medium:w-full">
        <div v-if="blogStore.recentPosts.length > 0">

          <div class="text-left border border-[#dddddd] rounded-[10px] p-[1.2rem] text-secondaryColor">
            <h3 class="font-[700] text-[2rem] leading-[2.42rem]">Recent Post</h3>
            <RouterLink :to="{name: 'post', params: {id: post.id}}" v-for="(post, index ) in blogStore.recentPosts"
                        :key="index">
              <div class="flex flex-row py-[0.5rem] border border-[#dddddd] border-x-0 border-t-0 mb-[1.2rem]">
                <img :src="generateThumbnailFromText(post.title)" class="w-[6.1rem] h-[5.9rem] mr-[1.1rem]"
                     :alt="post.title"/>
                <div class="text-[1.4rem] leading-[1.69rem]">
                  <h3 class="font-[700] ">{{ post.title }}</h3>
                  <div class="font-[400] text-[#7a7a7a] flex items-center">
                    <span class="material-icons">calendar_month</span>
                    <span>
                     {{ getBlogDate(post.published) }}
                    </span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>

<!--        <div-->
<!--            class="h-[204px] mt-[1.8rem] text-left border border-[#dddddd] rounded-[10px] p-[1.2rem] text-secondaryColor">-->
<!--          <h3 class="font-[700] text-[2rem] leading-[2.42rem]">Categories</h3>-->

<!--          <div class="flex flex-row items-center space-x -m-2 mt-1 flex-wrap">-->
<!--            <span class="font-bold text-2xl m-2" v-for="(category, index) in blogStore.categories ?? []"-->
<!--                  :key="index">-->
<!--            {{ category }}-->
<!--            </span>-->
<!--          </div>-->

<!--        </div>-->
      </div>
    </div>
  </Container>
</template>

<style scoped>
.aboutBanner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #000;
  opacity: 0.7;

}

</style>