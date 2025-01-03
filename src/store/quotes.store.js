import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useQuoteStore = defineStore("quoteStore", () => {

    const quotes = ref([]);
    const groupedQuotes = ref([]);
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
                image: data.image
            });
        });
        quotes.value = items;
    }

    async function getGroupedQuotes() {
        const quotesRef = collection(database, "grouped_quotes");
        const querySnapshot = await getDocs(quotesRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();

            items.push({
                id: doc.id,
                title: data.title,
                quotes: data.quotes,
                icon: data.icon,
                rank: data.rank
            });
        });
        groupedQuotes.value = items;
        items.sort((a, b) => a?.rank - b?.rank);
    }
    return {
        getQuotes,
        getGroupedQuotes,
        quotes,
        groupedQuotes
    }
});