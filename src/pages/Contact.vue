<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/trainerbanner.png';
import Container from "@/components/Container.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';

</script>

<template>
  <main class="text-secondary">
    <!-- hero section -->
     <section class="flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] max-sm:w-full text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">Contact me</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > Contact Bright UK</span>
        </div>

      </div>
  </section>

     <Container>
        <div class="mt-[3.4rem] text-center max-sm:w-full">
            <Subheading title="Contact" />
            <Heading title="Get in Touch with Bright UK" />
           
        </div>

        <!-- form section -->
        <section class="mt-[2rem] mb-[5rem] max-sm:w-full">
            <form class="font-[500] text-[2rem] leading-[4.2rem] text-secondaryColor">
                <!-- <div class="flex flex-row justify-between gap-y-[2.7rem] flex-wrap"> -->
                    <div
                    class="grid grid-cols-[repeat(auto-fill,minmax(51.1rem,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem] mt-[2rem]"
                  >
                <div class="">
                    <label class="">Full Name</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="">
                    <label class="">Email Address</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="">
                    <label class="">Phone Number</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="">
                    <label class="">Company Name</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="">
                    <label class="">Country</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="">
                    <label class="">What service are you booking Bright Uk for?</label>
                    <select class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]">
                    <option>keynote</option>
                    <option>Coach</option>
                    <option>book</option>
                    </select>
                </div>
            </div>

            <div class="w-full mt-[2.1rem]">
                <label class="">Message</label>
                <textarea class="w-full h-[19.6rem] rounded-[10px] border border-[#a6a6a6]"></textarea>
            </div>
            <button class="bg-primaryColor w-[22.5rem] h-[5.5rem] rounded-[8px] font-[500] text-[1.4rem] text-[#000] outline-none">Send message</button>
            </form>

            <div class="grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] gap-[3rem] text-[#ffffff] font-[500] mt-[4.8rem]">
                <div class=" min-h-[17.5rem] rounded-[10px] p-[1.5rem] bg-[#000000]">
                    <h1 class="text-[3.2rem] leading-[4.2rem]">Email</h1>
                    <div class="text-[2rem] leading-[2.8rem]">iambrightuk@gmail.com</div>
                </div>

                <div class=" min-h-[17.5rem] rounded-[10px] p-[1.5rem] bg-[#000000]">
                    <h1 class="text-[3.2rem] leading-[4.2rem]">Phone number</h1>
                    <div class="text-[2rem] leading-[2.8rem]">+2348135273602</div>
                    
                </div>

                <div class="min-h-[17.5rem] rounded-[10px] p-[1.5rem] bg-[#000000]">
                    <h1 class="text-[3.2rem] leading-[4.2rem]">Address</h1>
                    <div class="text-[2rem] leading-[2.8rem]">The Ridge Terrace, off kusenla Road lekki lagos</div>

                </div>
                </div>

    </section>
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

</style>