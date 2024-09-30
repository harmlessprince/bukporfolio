import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import { database} from "@/services/firebase.js";
import {ref} from "vue";
import {useLoaderStore} from "@/store/loader.store.js";

export const useBrandStore = defineStore("brandStore", () => {
    // const db = useFirestore()
    const brands = ref([]);
    const loaderStore = useLoaderStore()
    async function getBrands() {
        const brandsRef = collection(database, "brands");
        const querySnapshot = await getDocs(brandsRef);
        const items = [];
        loaderStore.start()
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            items.push({
                id: doc.id,
                image: data.image,
                name: data.name,
            });
        });
        brands.value = items;
        loaderStore.done()
    }
    return {
        getBrands: getBrands,
        brands
    }
});