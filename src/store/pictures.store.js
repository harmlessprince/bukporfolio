import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

export const usePictureStore = defineStore("pictureGalleryStore", () => {
    const pictures = ref([]);
    const galleryPictures = ref([]);

    async function getPictures() {
        const picturesRef = collection(database, "pictures_gallery");
        const querySnapshot = await getDocs(picturesRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push(data.url);
        });
        pictures.value = items;
    }

    async function getGalleryPictures() {
        const picturesRef = collection(database, "pictures_gallery");
        const querySnapshot = await getDocs(picturesRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            items.push({
                id: doc.id,
                url: data.url,
                title: data.title ? data.title : "Image description",
                thumbnail: data.thumbnail ?? data.url,
            });
        });
        galleryPictures.value = items;
    }

    return {
        getPictures,
        getGalleryPictures,
        galleryPictures,
        pictures
    }
});