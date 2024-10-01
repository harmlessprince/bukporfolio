<script setup>
import Container from "@/components/Container.vue";
import {computed, onBeforeMount, ref, watch} from 'vue';
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {useBookstore} from "@/store/books.store.js";
import { formatMoney} from "@/services/util.js";
import {useCartStore} from "@/store/cart.store.js";

const bookstore = useBookstore()
const cartStore = useCartStore()
const variations = ref([
  'hardcover',
  'paperback',
  'ebook',
  'audiobook'
])
//state
const currentTab = ref("details")
const currentVariationTab = ref("hardcover")
const currentVariationPrice = ref(0.00)
const itemInCart = ref(null)

const route = useRoute();
onBeforeMount(() => {
  bookstore.getBookById(route.params.id);
  itemInCart.value = cartStore.findCartItem(route.params.id, currentVariationTab.value);
});

onBeforeRouteUpdate(async (to, from) => {
  bookstore.getBookById(to.params.id);
  setItemInCart()
})

watch(currentVariationTab, (newCurrentVariationTab) => {
  setProductItemPrice(bookstore.selectedBook, newCurrentVariationTab);
})

watch(
    () => bookstore.selectedBook,
    (newSelectedBook) => {
      if (newSelectedBook) {
        setProductItemPrice(newSelectedBook, null);
      }
    }
);

watch(
    () => cartStore.items,
    (newItems) => {
      if (newItems.length > 0) {
        setItemInCart()
      }
    }
);

watch(cartStore.items, (newValue, _) => {
  setItemInCart()
})

function setItemInCart() {
  itemInCart.value = cartStore.findCartItem(route.params.id, currentVariationTab.value);
}


function setProductItemPrice(newSelectedBook, selectedVariation) {
  const variations = newSelectedBook?.forms;
  if (!variations) {
    currentVariationPrice.value = newSelectedBook.price
    setItemInCart()
    return;
  } else {
    if (selectedVariation) {
      const tabVariation = variations.find(item => item.name.toLowerCase() === selectedVariation.toLowerCase());
      if (tabVariation) {
        currentVariationPrice.value = tabVariation.price;
        setItemInCart()
        return;
      }
    }
    const defaultVariation = variations.find(item => item.default === true)
    if (defaultVariation) {
      currentVariationPrice.value = defaultVariation.price
      setItemInCart()
      return
    }
  }
  currentVariationPrice.value = 0.00
}


function toggleTab(name) {
  currentTab.value = name;
}

function toggleVariationTab(name) {
  currentVariationTab.value = name;
}
</script>

<template>
  <Container>
    <div class="w-full mt-[14rem] flex flex-row items-top space-x-[3rem]" v-if="bookstore.selectedBook">
      <div class="w-[48.1rem] max-h-[60.4rem]">
        <img :src="bookstore.selectedBook.image" class="w-full h-full relative" alt="brand"/>
      </div>
      <div class="w-[48.1rem] space-y-[1.5rem]">
        <div>
          <h2 class="font-header text-[2rem] text-secondary"> {{ bookstore.selectedBook.name }} </h2>
        </div>
        <h4 class="font-header text-forty text-secondary">
          #{{ formatMoney(currentVariationPrice) }}
        </h4>
        <div>
          <h4 class="font-sm text-xlg text-[#555454]">Available variation</h4>
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
                  class="w-[3.2rem] h-[2.9rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tl-[5px] rounded-bl-[5px]"
                  @click="cartStore.addToCart({
                      id: bookstore.selectedBook.id,
                      price: currentVariationPrice,
                      title: bookstore.selectedBook.title,
                      variation: currentVariationTab,
                      image: bookstore.selectedBook.image,
                  })"
              >
                +
              </button>
              <span class="text-secondary font-sm text-xlg">{{itemInCart?.quantity ?? 0}}</span>
              <button
                  class="w-[3.2rem] h-[2.9rem] text-secondary bg-[#dddddd] font-sm text-xlg rounded-tr-[5px] rounded-br-[5px]"
                  @click="cartStore.decrementItemQuantity(bookstore.selectedBook.id, currentVariationTab)"
              >
                -
              </button>
            </div>

            <button
                class="primary_button flex justify-center items-center"
            >
              Add to cart
            </button>
            <RouterLink class="secondary_button flex justify-center items-center" :to="{name: 'cart'}"
            >
              Buy Now
            </RouterLink>
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
                <div v-html="bookstore.selectedBook.description">

                </div>
              </div>
            </transition>
          </div>


        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>

.primary_button{
  @apply w-[13.7rem] h-[4.3rem] bg-primary border border-primary rounded-[8px] text-xsm font-sm text-secondary;
}

.secondary_button{
  @apply w-[13.7rem] h-[4.3rem] border border-primary rounded-[8px] text-xsm font-sm text-secondary;
}

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