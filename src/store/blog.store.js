import {defineStore} from "pinia";
import {ref} from "vue";
import {useLoaderStore} from "@/store/loader.store.js";
import {useRouter} from "vue-router";


const BLOG_ID = import.meta.env.VITE_BLOGGER_BLOG_ID;
const bloggerAPIKey = import.meta.env.VITE_BLOGGER_API_KEY;
export const useBlogStore = defineStore("blogsStore", () => {
    const loaderStore = useLoaderStore()
    const router = useRouter()
    const posts = ref([])
    const recentPosts = ref([])
    const singlePost = ref(null)
    const loading = ref(true);
    const categories = ref(["news", "lifestyle", "travel", "business", "food"])

    async function fetchAllPostsFromAPI() {
        loaderStore.start()
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${bloggerAPIKey}`
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json();
            posts.value = data?.items ?? []
            loading.value = false
        }
        loaderStore.done()
    }


    async function fetchRecentPostsFromAPI() {
        loaderStore.start()
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${bloggerAPIKey}&maxResults=5`
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json();
            recentPosts.value = data?.items ?? []
            loading.value = false
        }
        loaderStore.done()
    }

    async function fetchSinglePosts(postId) {
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${bloggerAPIKey}`
        loaderStore.start()
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json();
            singlePost.value = data ?? null
        } else {
            router.push({name: "home"})
        }
        loaderStore.done()
    }

    return {
        fetchAllPostsFromAPI, fetchSinglePosts, categories, posts, loading, singlePost,
        fetchRecentPostsFromAPI,recentPosts
    }
});