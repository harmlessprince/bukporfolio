<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/cartbanner.png';
import Container from "@/components/Container.vue";
import OrderSummary from "@/components/OrderSummary.vue";
import CartItem from "@/components/CartItem.vue";
import {useCartStore} from "@/store/cart.store.js";
import Subheading from "@/components/SubHeading.vue";
import Alert from "@/components/Alert.vue";
import {useAlertStore} from "@/store/alert.store.js";

const cartStore = useCartStore();
const alertStore = useAlertStore();
</script>

<template>
  <main class="font-primary">
    <Navigation/>
    <!-- cart hero section -->
    <section class="flex items-center justify-center relative h-[55rem] w-full bg-cover bg-no-repeat"
             :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] max-sm:w-full text-basic mx-auto text-center">
        <h1 class="text-forty font-xlg text-basicColor">Cart</h1>
        <div class="font-lg text-basic">
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > Shopping Cart</span>
        </div>
      </div>
    </section>

    <Container>
      <div class="mt-[3.4rem] text-center">
        <Subheading title="Shopping Cart Items"/>
      </div>
      <Alert v-if="alertStore.show"/>
      <div class="font-sans max-md:max-w-xl mx-auto bg-white py-4" v-if="cartStore.cartItemCount > 0">
        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div class="md:col-span-2 space-y-4">
            <div v-for="(item, index) in cartStore.items" :key="index">
                <CartItem
                    :id="item.id"
                    :key="index"
                    :price="item.price"
                    :title="item.title"
                    :image="item.image"
                    :variation="item.variation"
                    :quantity="item.quantity"

                />
            </div>

          </div>
          <OrderSummary
              :totalAmount="cartStore.totalAmount"
          />
        </div>
      </div>
      <div v-else>
        <!-- Show empty cart info when the cart is empty -->
        <div class="flex flex-col items-center justify-center h-[50rem] text-center">
          <div class="text-gray-400 mb-4">
            <!-- Cart icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" class="w-24 h-24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l3.6-7H5.4L7 13zm0 0L5.4 9H19.6L17 13H7z"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 13L5.4 9m0 0L3 3h2m2.4 6h14.2m-2.2 10h.1m0 0h-4a2 2 0 11-4 0h4a2 2 0 014 0z"/>
            </svg>
          </div>

          <h2 class="text-xl font-semibold text-gray-700">Your Cart is Empty!</h2>

          <p class="text-gray-500 mt-2 text-[1.5rem] mb-1">It seems like you haven't added any items yet.</p>

          <!-- Button to redirect to the shop page -->
          <RouterLink  :to="{name: 'products'}" class="flex items-center justify-center text-secondary bg-primary w-[22.5rem] h-[5.5rem] rounded-[8px] place-self-center text-[1.4rem] font-medium">
            Go Shopping
          </RouterLink>
        </div>
      </div>
    </Container>

    <Footer/>
  </main>
</template>

<style scoped>
</style>