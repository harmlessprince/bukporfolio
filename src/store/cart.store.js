import {defineStore} from "pinia";
import {ref, computed} from "vue";
import item from "@/pages/Shop/Item.vue";

export const useCartStore = defineStore("cartStores", () => {
    const items = ref([]) // state

    // const doubleCount = computed(() => count.value * 2)  // getters
    const cartItemCount = computed(() => items.value.reduce((count, item) => count + item.quantity, 0))
    const totalAmount = computed(() => items.value.reduce((count, item) => total + item.price * item.quantity, 0))

    function addToCart(product) {
        const itemInCart = items.value.find((item) => item.id === product.id);
        if (itemInCart) {
            itemInCart.quantity++;
        }else {
            items.value.push({...product, quantity: 1});
        }
    }

    function removeFromCart(product) {
        items.value = items.value.filter((item) => item.id !== product.id);
    }

    function clearCart() {
        items.value = [];
    }
    return {
        items,
        cartItemCount,
        totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
    }
});