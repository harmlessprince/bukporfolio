import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useRoleStore = defineStore("roleStore", () => {

    const roles = ref([]);

    async function getRoles() {
        const rolesRef = collection(database, "roles");
        const querySnapshot = await getDocs(rolesRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            if (doc.id !== 'coach'){
                items.push({
                    id: doc.id,
                    name: data.name,
                    summary: data.summary,
                    description: data.description,
                    image: data.image,
                });
            }

        });
        roles.value = items;
    }

    return {
        getRoles,
        roles
    }
});