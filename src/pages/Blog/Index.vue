<script setup>
import Navigation from '@/components/Navigation.vue';
import Container from "@/components/Container.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';
import Blogcard from '../../components/BlogCard.vue';
import {useBlogStore} from "@/store/blog.store.js";
import {onBeforeMount, ref, watch} from "vue";
import {getDayFromDate, getMonthFromDate, getYearFromDate} from "@/services/util.js";
import HeroSection from "@/components/HeroSection.vue";

const blogStore = useBlogStore();
const currentCategory = ref("all")

onBeforeMount(() => {
  blogStore.fetchAllPostsFromAPI();
});
watch(
    () => blogStore.posts,
    (newPosts) => {
      if (newPosts.length > 0) {
        blogStore.posts = newPosts;
      }
    }
);

function onCategoryChange(category) {
  currentCategory.value = category;
  blogStore.fetchAllPostsByTagFromAPI(category)
}


</script>

<template>

  <main class="text-secondary">
    <HeroSection
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059216/trainerbanner_ljje9a.png"
        page="Blog"
    />

    <Container> 
      <div class="mt-[3.4rem] max-small:mt-[2rem] text-center">
        <Subheading title="Glean insights to transform your mind and get more out of life" class="mb-[0.5rem]"/>
        <Heading title="The Musings of Bright UK"/>
        <!-- <div
            class="mt-[1.4rem] mx-auto h-[4.5rem] max-sm:h-auto font-sm text-xsm  flex flex-row flex-wrap  bg-[#dddddd] rounded-[1rem] text-white p-[0.6rem] space-x-[2.5rem]"
            > -->
            <div
            class="mt-[1.4rem] mx-auto h-auto max-sm:h-auto font-sm text-xsm grid grid-cols-[repeat(auto-fill,minmax(9.3rem,1fr))] gap-y-[1.2rem] bg-[#dddddd] rounded-[1rem] text-white p-[0.6rem]"
            >
          <button class="blog_category_tab transition-all duration-300 ease-in-out transform h-[3.7rem]"
                  :class="currentCategory === 'all' ? 'selected' : 'unselected'" @click="onCategoryChange('all')">All
          </button>
          <button class="blog_category_tab transition-all duration-300 ease-in-out transform h-[3.7rem]"
                  :class="currentCategory === item ? 'selected' : 'unselected'"
                  v-for="(item, index) in blogStore.categories" :key="index" @click="onCategoryChange(item)">
            {{ item }}
          </button>
        </div>

        <div class="grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[2.3rem] mt-[3rem]">
          <Blogcard
              :id="item.id"
              :title=item.title
              :author=item?.author?.displayName
              :day=getDayFromDate(item.published)
              :month=getMonthFromDate(item.published)
              :year=getYearFromDate(item.published)
              :categories=item.labels
              v-for="(item, index) in blogStore.posts" :key="index"
          />
        </div>
      </div>
    </Container>
  </main>
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

.selected {
  background-color: #121212;
  color: white;
  transform: scale(1.1); /* Slight scale effect */
}

.unselected {
  background-color: transparent;
  color: #545454;
  transform: scale(1); /* Normal size when unselected */
}

.blog_category_tab:hover {
  transform: scale(1.05); /* Slight grow on hover */
  background-color: #e0e0e0; /* Light background on hover */
  color: #545454;
}

.transition-all {
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}
</style>