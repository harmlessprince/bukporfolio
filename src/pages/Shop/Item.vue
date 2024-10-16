<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import Container from "@/components/Container.vue";
import WhoIam from '@/assets/who_i_am.png';
import Star from '@/assets/star.svg';
import Heading from '@/components/Heading.vue';
import { ref, onMounted } from 'vue';

//state
let toggledetails = ref('details');

const whatYouWillLearn = () => {
    toggledetails.value = 'learn';
    console.log(toggledetails.value)
}

const bookDetails = () => {
    toggledetails.value = 'details';
}
</script>

<template>
  <main class="font-primary">
    <Container>
        <div class="w-full my-[14rem] flex flex-row max-sm:flex-col items-top max-sm:space-y-[2rem] space-x-[3rem] max-sm:space-x-0">
            <div class="w-[48.1rem] max-sm:w-full max-h-[60.4rem]">
                <img :src="WhoIam" class="w-full h-full relative" alt="brand"/>
            </div>
            <div class="w-[48.1rem] max-sm:w-full space-y-[1.5rem]">
                <div>
                    <Heading title="A long way down" />
                    <div class="w-[13.7rem] flex flex-row justify-between">
                        <img :src="Star" class="w-full h-full relative" alt="star"/> 
                        <img :src="Star" class="w-full h-full relative" alt="star"/> 
                        <img :src="Star" class="w-full h-full relative" alt="star"/> 
                        <img :src="Star" class="w-full h-full relative" alt="star"/> 
                        <img :src="Star" class="w-full h-full relative" alt="star"/>  
                    </div>
                </div>
                <div class="font-header text-forty text-secondary">#4000</div>
                <div>
                    <p class="font-sm text-xlg text-[#555454]">Available variation</p>
                    <div class="max-sm:w-full font-sm text-xsm text-basicColor  h-[3.7rem]  flex flex-row justify-between bg-[#dddddd] rounded-[6px]">
                        <button class="bg-[#121212] rounded-[6px] min-w-[9rem] max-sm:min-w-[8.3rem] p-[1rem]">Hardcover</button>
                        <button class="rounded-[6px] min-w-[9rem] max-sm:min-w-[8.3rem] p-[1rem]">Paperback</button>
                        <button class=" rounded-[6px] min-w-[9rem] max-sm:min-w-[8.3rem] p-[1rem]">eBook</button>
                        <button class="rounded-[6px] min-w-[9rem] max-sm:min-w-[8.3rem] p-[1rem]">Audiobook</button>
                    </div>
                </div>
                <div>
                <p class="font-sm text-xlg text-[#555454]">Quantity</p>
                <div class="text-right w-full flex flex-row max-sm:flex-col max-sm:space-y-[1.4rem] justify-between items-end">
                    <div class="w-[9.9rem]  bg-primary rounded-[5px] flex flex-row justify-between items-center">
                        <button class="w-[3.2rem] h-[2.9rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tl-[5px] rounded-bl-[5px]">+</button>
                        <span class="text-secondary font-sm text-xlg">1</span>
                        <button class="w-[3.2rem] h-[2.9rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tr-[5px] rounded-br-[5px]">-</button>
                    </div>

                    <button class="w-[13.7rem] max-sm:w-full h-[4.3rem] bg-primary border border-primary rounded-[8px] text-xsm font-sm">Add to cart</button>
                    <button class="w-[13.7rem] max-sm:w-full h-[4.3rem] border border-primary rounded-[8px] text-xsm font-sm">Buy Now</button>
                </div>
                </div>

                <div>
                    <div class="flex flex-row items-center space-x-[2rem] border border-[#777575] border-t-0 border-x-0">
                        <button @click="whatYouWillLearn()" class="p-[1rem] border-[4px] border-primary border-t-0 border-x-0">What you will learn</button>
                        <button  @click="bookDetails()" class="p-[1rem] border-[4px] border-primary border-t-0 border-x-0">Book details</button>
                    </div>

                    <ul v-if="toggledetails = 'learn'" class="font-xsm text-xsm text-secondary ml-[2rem] list-disc py-[2rem]">
                        {{ toggledetails.value }}
                        <li>Make the most of your mind to see and seize opportunities.</li>
                        <li>Prevent and solve problems using four excellent techniques.</li>
                        <li>Failureproof your goals.</li>
                        <li>Make the most of failure</li>
                        <li>Multiply your earning potential and command uncommon results</li>
                        <li>Build strategic networks to profit from the corridors of power.</li>
                    </ul>

                    <div v-else class="font-xsm text-xsm text-secondary py-[2rem] space-x-[1rem]">
                        {{ toggledetails }}
                        <p>What differentiates extraordinary leaders from ordinary ones? 
                        The simple answer is UNDERSTANDING! Great leaders approach life 
                        with a superior operating system that helps them to see differently, 
                        respond better, and achieve more.</p>
                    <p>In this masterpiece, you will discover tools for thinking towards becoming a better 
                        leader capable of making quality decisions and generating superior results.</p>  
                    <p>Whether you are stirring a business, leading a family, or championing a 
                        cause, the insights in SIXTH SENSE LEADERSHIP will upgrade your vision 
                        and help you to create your own possibilities. They will inspire you 
                    to think, reflect, and take action on key areas that will boost your capacity 
                    to do more and achieve more.</p>
                    <p>You will gain practical insights on critical issues for success in 
                        life and leadership including how to:
                    </p>

                    </div>

                </div>
            </div>

        </div>
    </Container>
      
    <Footer />  
    </main>
</template>

<style scoped>
</style>