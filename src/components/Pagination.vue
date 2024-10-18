<script setup>
import { computed, ref, watch, toRefs } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 10
  }
});

const emits = defineEmits(["updatePage"]);

const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage));

function setPage(page) {
  if (page !== props.currentPage) {
    emits("updatePage", page);
  }
}

function prevPage() {
  if (props.currentPage > 1) {
    emits("updatePage", props.currentPage - 1);
  }
}

function nextPage() {
  if (props.currentPage < totalPages.value) {
    emits("updatePage", props.currentPage + 1);
  }
}
</script>

<template>
  <div class="flex flex-row items-center justify-center text-center space-x-2 text-secondary mt-[2.4rem]">
    <button @click="prevPage" :disabled="currentPage === 1" class="pagination_button">
      &lt;&lt;
    </button>

    <button
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        :class="currentPage === page ? 'active' : ''"
        class="pagination_button"
    >
      {{ page }}
    </button>

    <button @click="nextPage()" :disabled="currentPage === totalPages" class="pagination_button">&gt;&gt;</button>
  </div>
</template>

<style scoped>
.pagination_button {
  @apply w-[3.2rem] h-[3.2rem] rounded-[0.8rem] flex items-center justify-center border-[0.1rem] border-[#F1F1F1] p-[1rem] font-bold;
}
.active {
  @apply bg-secondary text-white;
}

</style>