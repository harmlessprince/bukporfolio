import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useTestimoniesStore = defineStore("testimoniesStore", () => {

    const testimonies = ref([]);

    async function getTestimonies() {
        const testimoniesRef = collection(database, "testimonies");
        const querySnapshot = await getDocs(testimoniesRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
                id: doc.id,
                name: data.name,
                quote: data.quote,
                position: data.position,
                company: data.company,
                image: data.image,
            });
        });
        testimonies.value = items;
    }

    return {
        getTestimonies,
        testimonies
    }
});