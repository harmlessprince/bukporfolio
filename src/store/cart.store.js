import {defineStore} from "pinia";
import {ref, computed} from "vue";
import item from "@/pages/Shop/Item.vue";
const CART_STORAGE_KEY = 'cart_items';
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
        saveCart()
    }

    function removeFromCart(product) {
        items.value = items.value.filter((item) => item.id !== product.id);
        saveCart()
    }

    function clearCart() {
        items.value = [];
        saveCart()
    }
    function saveCart() {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items.value));
    }
    function loadCart() {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
            items.value = JSON.parse(storedCart);
        }
    }

    return {
        items,
        cartItemCount,
        totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        loadCart
    }
});