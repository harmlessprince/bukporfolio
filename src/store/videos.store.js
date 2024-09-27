import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import { database} from "@/services/firebase.js";
import {ref} from "vue";

export const useVideoStore = defineStore("videoStore", () => {
    // const db = useFirestore()
    const videos = ref([]);

    async function getVideos() {
        const videosRef = collection(database, "videos");
        const querySnapshot = await getDocs(videosRef);
        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const data = doc.data();
            console.log("thumbnail" +data.thumbnail)
            items.push({
                id: doc.id,
                title: data.title,
                url: data.url,
                thumbnail: data.thumbnail,
                source: data.source,
            });
        });
        videos.value = items;
    }
    return {
        getVideos: getVideos,
        videos
    }
});