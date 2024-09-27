<script setup>
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/authorbanner.png';
import Container from "@/components/Container.vue";
import WhoIam from '@/assets/authorprofile.png';
import Books from "@/components/Books.vue";

</script>

<template>
  <main class="text-primary">
    <Navigation/>
    <!-- about hero section -->
     <section class="flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">Author</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > About</span>
        </div>
      </div>
     </section>

     <Container>
      <div class="w-full flex justify-between items-center my-[5rem]">
      <div class="w-[47.6rem] h-[29.1rem] rounded-[10px]">
        <img :src="WhoIam" class="w-full h-full rounded-[10px]" alt="bright"/>
      </div>
      <div class="w-[47.7rem]">
        <p class="font-xsm text-[2.4rem] text-[#2B2B2B]">
          As a prolific writer, Bright UK is the author of three books and many resourceful publications. 
          He is a former contributor to Business Day Newspaper which is widely read across Nigeria and Ghana.
          He is th author of three books and many resourceful publication on leadership ,wealth and well-being 
        </p>
      </div>
    </div>
     </Container>

     <!-- books-->
     <section class="w-full bg-[#F1F1F1] py-top mt-[1rem]">
      <Books />
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