<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import Container from "@/components/Container.vue";
import WhoIam from '@/assets/who_i_am.png';
import Star from '@/assets/star.svg';
import Heading from '@/components/Heading.vue';
import {ref} from 'vue';

const variations = ref([
  'hardcover',
  'paperback',
  'ebook',
  'audiobook'
])
//state
const currentTab = ref("details")
const currentVariationTab = ref("hardcover")

function toggleTab(name) {
  currentTab.value = name;
  console.log(currentTab.value);
}

function toggleVariationTab(name) {
  currentVariationTab.value = name;
}
</script>

<template>
  <Container>
    <div class="w-full mt-[14rem] flex flex-row items-top space-x-[3rem]">
      <div class="w-[48.1rem] max-h-[60.4rem]">
        <img :src="WhoIam" class="w-full h-full relative" alt="brand"/>
      </div>
      <div class="w-[48.1rem] space-y-[1.5rem]">
        <div>
          <h2>A long way down</h2>
        </div>
        <div class="font-header text-forty text-secondary">#4000</div>
        <div>
          <p class="font-sm text-xlg text-[#555454]">Available variation</p>
          <div
              class="font-sm text-xsm text-basicColor flex flex-row justify-between items-center bg-[#dddddd] rounded-[6px] h-[4.7rem]">
            <button class="variation_tab transition-all duration-300 ease-in-out transform"
                    :class="currentVariationTab === item ? 'variation_tab_selected' : 'variation_tab_unselected'"
                    v-for="(item, index) in variations" :key="index" @click="toggleVariationTab(item)">
              {{ item }}
            </button>
          </div>
        </div>
        <div>
          <p class="ont-sm text-xlg text-[#555454]">Quantity</p>
          <div class="w-full flex flex-row justify-between items-end">
            <div class="w-[9.9rem] rounded-[5px] flex flex-row justify-between items-center">
              <button
                  class="w-[3.2rem] h-[2.9rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tl-[5px] rounded-bl-[5px]">
                +
              </button>
              <span class="text-secondary font-sm text-xlg">1</span>
              <button
                  class="w-[3.2rem] h-[2.9rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tr-[5px] rounded-br-[5px]">
                -
              </button>
            </div>

            <button class="w-[13.7rem] h-[4.3rem] bg-primary border border-primary rounded-[8px] text-xsm font-sm">Add
              to cart
            </button>
            <button class="w-[13.7rem] h-[4.3rem] border border-primary rounded-[8px] text-xsm font-sm">Add to cart
            </button>
          </div>
        </div>

        <div>
          <div class="flex flex-row items-center space-x-[2rem] border border-[#777575] border-t-0 border-x-0">
            <button @click="toggleTab('learn')" class="transition-all duration-300 ease-in-out transform font-medium"
                    :class="currentTab === 'learn' ? 'item_tab_selected' : 'item_tab_unselected'">What
              you will learn
            </button>
            <button @click="toggleTab('details')" class="transition-all duration-300 ease-in-out transform font-medium"
                    :class="currentTab === 'details' ? 'item_tab_selected' : 'item_tab_unselected'">Book
              details
            </button>
          </div>
          <div>
            <transition name="fade" mode="out-in">
              <ul v-if="currentTab === 'learn'" class="font-xsm text-xsm text-secondary ml-[2rem] list-disc py-[2rem]">

                <li>Make the most of your mind to see and seize opportunities.</li>
                <li>Prevent and solve problems using four excellent techniques.</li>
                <li>Failureproof your goals.</li>
                <li>Make the most of failure</li>
                <li>Multiply your earning potential and command uncommon results</li>
                <li>Build strategic networks to profit from the corridors of power.</li>
              </ul>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="currentTab === 'details'" class="font-xsm text-xsm text-secondary py-[2rem] space-x-[1rem]">

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
            </transition>
          </div>


        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>

.variation_tab {
  @apply rounded-[6px] min-w-[9rem] h-[3.7rem] p-[1rem] flex justify-center items-center text-center capitalize;
}

.variation_tab_selected {
  background-color: #121212;
  color: white;
  transform: scale(1.1); /* Slight scale effect */
}

.variation_tab_unselected {
  background-color: transparent;
  color: #545454;
  transform: scale(1); /* Normal size when unselected */
}

.blog_category_tab:hover {
  transform: scale(1.05); /* Slight grow on hover */
  background-color: #e0e0e0; /* Light background on hover */
  color: #545454;
}

.item_tab_selected {
  @apply p-[1rem] border-[4px] border-primary border-t-0 border-x-0 text-[1.4rem];
  transform: scale(1.1); /* Slight scale effect */
}

.item_tab_unselected {
  background-color: transparent;
  transform: scale(1);
  @apply p-[1rem]  border-t-0 border-x-0 text-[#323232] text-[1.4rem];
}

.item_tab:hover {
  transform: scale(1.05); /* Slight grow on hover */
  background-color: #e0e0e0; /* Light background on hover */
  color: #545454;
}

.transition-all {
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>