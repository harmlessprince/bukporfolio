import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useEntrepreneurStore = defineStore("entrepreneurStore", () => {

    const entrepreneurs = ref([]);

    async function getEntrepreneurs() {
        const entrepreneursRef = collection(database, "entrepreneur");
        const querySnapshot = await getDocs(entrepreneursRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();

            items.push({
                id: doc.id,
                title: data.title,
                body: data.body,
                website: data.website,
                logo: data.logo,
            });
        });
        entrepreneurs.value = items;
    }

    return {
        getEntrepreneurs,
        entrepreneurs
    }
});