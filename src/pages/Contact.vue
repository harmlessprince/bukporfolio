<script setup>
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/trainerbanner.png';
import Container from "@/components/Container.vue";
import Heading from '@/components/heading.vue';
import Subheading from '@/components/subheading.vue';

</script>

<template>
  <main class="text-secondary">
    <Navigation/>
    <!-- hero section -->
     <section class="flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">Contact me</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > Contact Bright UK</span>
        </div>
      </div>
     </section>

     <Container>
        <div class="mt-[3.4rem] text-center">
            <Subheading title="Contact" />
            <Heading title="Get in Touch with Bright UK" />
           
        </div>

        <!-- form section -->
        <section class="mt-[2rem] mb-[5rem]">
            <form class="font-[500] text-[2rem] leading-[4.2rem] text-secondaryColor">
                <div class="flex flex-row justify-between gap-y-[2.7rem] flex-wrap">
                <div class="w-[47.7rem]">
                    <label class="">Full Name</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="w-[47.7rem]">
                    <label class="">Email Address</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="w-[47.7rem]">
                    <label class="">Phone Number</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="w-[47.7rem]">
                    <label class="">Company Name</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="w-[47.7rem]">
                    <label class="">Country</label>
                    <input type="text" class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]" />
                </div>
                <div class="w-[47.7rem]">
                    <label class="">What service are you booking Bright Uk for?</label>
                    <select class="w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6]">
                    <option>keynote</option>
                    <option>Coach</option>
                    <option>book</option>
                    </select>
                </div>
                <div class="w-full">
                    <label class="">Message</label>
                    <textarea class="w-full h-[19.6rem] rounded-[10px] border border-[#a6a6a6]"></textarea>
                </div>
            </div>

            <button class="w-[22.5rem] h-[5.5rem] bg-primaryColor rounded-[8px]">send message</button>   
            </form>

            <div class="flex flex-row justify-between flex-wrap text-[#ffffff] font-[500] mt-[4.8rem]">
                <div class="w-[30.5rem] min-h-[17.5rem] rounded-[10px] p-[1.5rem] bg-[#000000]">
                    <h1 class="text-[3.2rem] leading-[4.2rem]">Email</h1>
                    <div class="text-[2rem] leading-[2.8rem]">Example@email.com</div>
                    <div class="text-[2rem] leading-[2.8rem]">Example@email.com</div>
                </div>

                <div class="w-[30.5rem] min-h-[17.5rem] rounded-[10px] p-[1.5rem] bg-[#000000]">
                    <h1 class="text-[3.2rem] leading-[4.2rem]">Phone number</h1>
                    <div class="text-[2rem] leading-[2.8rem]">+909748748984</div>
                    <div class="text-[2rem] leading-[2.8rem]">+078576738292</div>
                </div>

                <div class="w-[30.5rem] min-h-[17.5rem] rounded-[10px] p-[1.5rem] bg-[#000000]">
                    <h1 class="text-[3.2rem] leading-[4.2rem]">Address</h1>
                    <div class="text-[2rem] leading-[2.8rem]">Eghdjkfkdjf,jkfk</div>
                    <div class="text-[2rem] leading-[2.8rem]">gdkjgkkjhgkkjdkhgh</div>
                </div>

            </div>

        </section>
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