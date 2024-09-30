<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/trainerbanner.png';
import Container from "@/components/Container.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';
import Blogcard from '../../components/BlogCard.vue';

</script>

<template>
  <main class="text-secondary">
    <Navigation/>
    <!-- about hero section -->
     <section class="flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">Blog</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > Blog</span>
        </div>
      </div>
     </section>

     <Container>
        <div class="mt-[3.4rem] text-center">
            <Subheading title="Glean insights to transform your mind and get more out of life" />
            <Heading title="The Musings of Bright UK" />
            <div class="mt-[1.4rem] mx-auto w-[48.1rem] font-sm text-xsm text-basicColor flex flex-row justify-between bg-[#dddddd] rounded-[6px]">
                <button class="bg-[#121212] rounded-[6px] min-w-[9rem] h-[3.7rem] p-[1rem]">Category 1</button>
                <button class="rounded-[6px] min-w-[9rem] h-[3.7rem] p-[1rem]">Category 2</button>
                <button class=" rounded-[6px] min-w-[9rem] h-[3.7rem] p-[1rem]">Category 3</button>
                <button class="rounded-[6px] min-w-[9rem] h-[3.7rem] p-[1rem]">Category 4</button>
            </div>

                <div class="flex flex-row justify-between flex-wrap w-full mt-[3rem]">
                  <Blogcard
                      title="Learn Webs Applications Development from Experts"
                      description="Suspendisse at purus pellentesque, vestibulum enim et, tempor eros. Ut sagittis eu enim ut lacinia. Integer neque sanctus est Lorem ipsum dolor sit amet. Lor+t dolore magna aliquyam erat, sed diam voluptua."
                      :url="AboutBanner"
                      author="osuji chiaka"
                      day="22"
                      month="FEB"
                      category="category 3"
                      v-for="n in 7" :key="n"
                  />
                </div>
              </div>
     </Container>
    <Footer />  
    </main>
</template>

<style scoped>
.aboutBanner::after{
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