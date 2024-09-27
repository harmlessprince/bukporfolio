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
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            items.push({
                id: doc.id,
                title: data.name,
                summary: data.summary,
                description: data.description,
                forms: data.forms,
                default: data?.forms?.find(item => item.default === true),
                image: data.main_image,
            });
        });
        testimonies.value = items;
    }

    return {
        getTestimonies,
        testimonies
    }
});