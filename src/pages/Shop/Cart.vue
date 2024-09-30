<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/cartbanner.png';
import Container from "@/components/Container.vue";
import OrderSummary from "@/components/OrderSummary.vue";
import CartItem from "@/components/CartItem.vue";
import {useCartStore} from "@/store/cart.store.js";

const cartStore = useCartStore();
</script>

<template>
  <main class="font-primary">
    <Navigation/>
    <!-- cart hero section -->
    <section class="flex items-center justify-center relative h-[55rem] w-full bg-cover bg-no-repeat"
             :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center">
        <h1 class="text-forty font-xlg text-basicColor">Cart</h1>
        <div class="font-lg text-basic">
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > Shopping Cart</span>
        </div>
      </div>
    </section>

    <Container>
      <div class="font-sans max-md:max-w-xl mx-auto bg-white py-4">
        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div class="md:col-span-2 space-y-4">
            <div v-for="(item, index) in cartStore.items" :key="index">
              <CartItem
                  :id="item.id"
                  :key="index"
                  :price="item.price"
                  :title="item.title"
                  :url="item.url"
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
    </Container>

    <Footer/>
  </main>
</template>

<style scoped>
</style>