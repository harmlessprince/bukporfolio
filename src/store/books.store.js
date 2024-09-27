import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const useBookstore = defineStore("booksStore", () => {

    const books = ref([]);

    async function getBooks() {
        const booksRef = collection(database, "books");
        const querySnapshot = await getDocs(booksRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            let defaultBook = null;
            if (Array.isArray(data?.forms)) {
                defaultBook = data?.forms?.find(item => item.default === true);
            }
            if (!defaultBook) {
                defaultBook = {
                    price: data.price ?? 0.0,
                }
            }
            items.push({
                id: doc.id,
                title: data.name,
                summary: data.summary,
                description: data.description,
                forms: data.forms,
                default: defaultBook,
                image: data.image,
            });
        });
        books.value = items;
    }

    return {
        getBooks,
        books
    }
});