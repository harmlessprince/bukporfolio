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
    const categories = ref(["author", "entrepreneur", "speaker", "coach"])

    async function fetchAllPostsFromAPI() {
        loaderStore.start()
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${bloggerAPIKey}`
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json();
            posts.value = data?.items ?? []
        }
        loaderStore.done()
    }
    async function fetchAllPostsByTagFromAPI(category) {
        if (category === 'all'){
            await fetchAllPostsFromAPI()
            return
        }
        loaderStore.start()
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${bloggerAPIKey}&labels=${category}`
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json();
            posts.value = data?.items ?? []
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
            router.push({
                name: 'NotFound',
                query: {
                    message: 'The post you are looking for does not exist',
                    reason: 'You may have visited an old link or the post has been removed',
                    route: 'blog',
                    buttonText: 'Go To Posts',
                }
            });
            loaderStore.done()
        }
        loaderStore.done()
    }

    return {
        fetchAllPostsFromAPI, fetchSinglePosts, categories, posts, singlePost,
        fetchRecentPostsFromAPI,recentPosts,fetchAllPostsByTagFromAPI
    }
});