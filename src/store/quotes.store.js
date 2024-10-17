import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useQuoteStore = defineStore("quoteStore", () => {

    const quotes = ref([]);

    async function getQuotes() {
        const quotesRef = collection(database, "quotes");
        const querySnapshot = await getDocs(quotesRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();

            items.push({
                id: doc.id,
                title: data.title,
                quote: data.body,
            });
        });
        quotes.value = items;
    }
    
    return {
        getQuotes,
        quotes
    }
});