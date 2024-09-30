import {defineStore} from "pinia";
import {ref, computed} from "vue";
import item from "@/pages/Shop/Item.vue";

const CART_STORAGE_KEY = 'cart_items';
export const useCartStore = defineStore("cartStores", () => {
    const items = ref([]) // state

    // const doubleCount = computed(() => count.value * 2)  // getters
    const cartItemCount = computed(() => items.value.reduce((count, item) => count + item.quantity, 0.00))
    const totalAmount = computed(() => items.value.reduce((total, item) => total + item.price * item.quantity, 0.00))

    function findCartItem(productId, variation) {
        return items.value.find(
            (item) => item.id === productId && item.variation === variation
        );
    }

    function addToCart(product) {
        const itemInCart = findCartItem(product.id, product.variation);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            items.value.push({...product, quantity: 1});
        }
        saveCart()
    }

    function removeFromCart(productId, productVariation) {
        items.value = items.value.filter((item) => item.id !== productId || item.variation !== productVariation);
        saveCart()
    }

    // Increment item quantity in the cart
    function incrementItemQuantity(productId, productVariation) {
        const item = findCartItem(productId, productVariation);
        if (item) {
            item.quantity++;
            saveCart()
        }
    }

    function decrementItemQuantity(productId, productVariation) {
        const item = findCartItem(productId, productVariation);
        if (item) {
            if (item.qunatity > 1){
                item.qunatity--;
            }else {
                removeFromCart(productId, productVariation);
            }
        }
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
        console.log(items.value);
    }

    return {
        items,
        cartItemCount,
        totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        loadCart,
        decrementItemQuantity,
        incrementItemQuantity,
    }
});