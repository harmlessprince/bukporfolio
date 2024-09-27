import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useActivitiesStore = defineStore("activitiesStore", () => {

    const activities = ref([]);

    async function getActivities() {
        const activitiesRef = collection(database, "activities");
        const querySnapshot = await getDocs(activitiesRef);
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
        activities.value = items;
    }

    return {
        getActivities,
        activities
    }
});