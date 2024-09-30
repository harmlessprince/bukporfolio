<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/shopbanner.png';
import Books from "@/components/Books.vue";
import Container from "@/components/Container.vue";
import Subheading from '@/components/SubHeading.vue';


</script>

<template>
  <main class="text-primary">
    <Navigation/>
    <!-- about hero section -->
     <section class="flex items-center justify-center relative h-[50rem] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center">
        <h1 class="text-forty font-xlg text-basicColor">Shop</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > shop</span>
        </div>
      </div>
     </section>

    <Books />

    <section class="w-full my-regular bg-secondary text-center pt-top pb-[5rem] mb-[8rem]">
      <Container>
        <Subheading title="Awesome Stats" />
        <header class="font-header text-header text-basicColor">Milestones Achieved</header>
        <div class="mt-regular flex items-center justiy-between">
        <div class="w-[45.9rem] flex items-center justify-center">
          <div class="text-center w-full text-basicColor">
          <div class="font-header text-header">+5363k</div>
           <div class="font-lg text-basic">Total pages publish</div>
          </div>
        </div>
        <div class="w-[45.9rem] flex items-center justify-center">
          <div class="text-center w-full text-basicColor">
            <div class="font-header text-header">+5363k</div>
           <div class="font-lg text-basic">Sales</div>
          </div>
        </div>
       </div>

      </Container>
    </section>    
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