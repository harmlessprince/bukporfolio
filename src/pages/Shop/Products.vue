<script setup>
import Books from "@/components/Books.vue";
import HeroSection from "@/components/HeroSection.vue";
</script>

<template>
  <HeroSection
      imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059213/cartbanner_k5wqbe.png"
      page="Shop"
  />
  <section class="mb-[25rem]">
    <Books/>
  </section>
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