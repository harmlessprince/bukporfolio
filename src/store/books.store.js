import {defineStore} from "pinia";
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";
import {useLoaderStore} from "@/store/loader.store.js";
import {useRouter} from "vue-router";

export const useBookstore = defineStore("booksStore", () => {

    const books = ref([]);
    const selectedBook = ref(null);
    const loaderStore = useLoaderStore()
    const router = useRouter()

    async function getBooks() {
        loaderStore.start()
        const booksRef = collection(database, "books");
        const querySnapshot = await getDocs(booksRef);
        const items = [];
        querySnapshot.forEach((doc) => {

            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            if (!data.status){
                return;
            }
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
                learn: data.learn,
                description: data.description,
                forms: data.forms,
                default: defaultBook,
                image: data.image,
                position: data.position,
                status: data.status,
                card_image: data.card_image,
            });
        });

        items.sort((a, b) => a?.position - b?.position)
        console.log(items);
        books.value = items;
        loaderStore.done()
    }

    async function getBookById(bookId) {
        loaderStore.start()
        const bookRef = doc(database, "books", bookId);
        const docSnapshot = await getDoc(bookRef);
        // const router = useRouter();
        if (!docSnapshot.exists()) {
            router.push({
                name: 'NotFound',
                query: {
                    message: 'The book you are looking for does not exist',
                    reason: 'You may have visited and old link or the book has been removed',
                    route: 'books',
                    buttonText: 'Go To Shop',
                }
            });
            loaderStore.done()
        }
        const data = docSnapshot.data();
        let defaultBook = null;
        if (Array.isArray(data?.forms)) {
            defaultBook = data?.forms?.find(item => item.default === true);
        }
        if (!defaultBook) {
            defaultBook = {
                price: data.price ?? 0.0,
            }
        }
        let available_forms = [];
        if (data.forms){
            available_forms = data.forms?.map(item => item.name);
        }
        selectedBook.value = {
            id: bookId,
            title: data.name,
            summary: data.summary,
            description: data.description,
            forms: data.forms,
            available_forms: available_forms,
            default: defaultBook,
            image: data.image,
            learn: data.learn,
        }
        loaderStore.done()
    }

    async function findItemInStore(bookId, variation) {
        return books.value.find(item => item.id === bookId && item.variation === variation);
    }

    return {
        getBooks,
        books,
        getBookById,
        selectedBook,
        findItemInStore,
    }
});