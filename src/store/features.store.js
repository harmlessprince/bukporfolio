import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useFeaturesStore = defineStore("featuresStore", () => {

    const features = ref([]);

    async function getFeatures() {
        const featuresRef = collection(database, "features");
        const querySnapshot = await getDocs(featuresRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            items.push({
                id: doc.id,
                image: data.image,
                name: data.name,
            });
        });
        features.value = items;
    }

    return {
        getFeatures,
        features
    }
});