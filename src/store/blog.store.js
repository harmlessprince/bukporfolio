import {defineStore} from "pinia";
import {ref} from "vue";
import {useLoaderStore} from "@/store/loader.store.js";
import {useRouter} from "vue-router";


const BLOG_ID = import.meta.env.VITE_BLOGGER_BLOG_ID;
const bloggerAPIKey = import.meta.env.VITE_BLOGGER_API_KEY;
const BLOG_LABELS_KEY = 'blog_label_key';
export const useBlogStore = defineStore("blogsStore", () => {
    const loaderStore = useLoaderStore()
    const router = useRouter()
    const posts = ref([])
    const recentPosts = ref([])
    const singlePost = ref(null)
    const categories = ref([])

    async function fetchAllPostsFromAPI() {
        loaderStore.start()
        const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${bloggerAPIKey}`
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json();
            posts.value = data?.items ?? []
        }
        loaderStore.done()
        await retrievePostsLabels()
    }

    async function fetchAllPostsByTagFromAPI(category) {
        if (category === 'all') {
            await fetchAllPostsFromAPI()
            return
        }
        loaderStore.start()
        const url = generateCategoryUrl(category)
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json();
            posts.value = data?.items ?? []
        }
        loaderStore.done()
        loadBlogLabelsFromLocalStorage()
    }

    function generateCategoryUrl(category) {
        if (category === 'all') {
            return `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${bloggerAPIKey}`
        }
        return `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${bloggerAPIKey}&labels=${category}`
    }


    async function retrievePostsLabels() {
        const categoriesSet = new Set();
        if (posts.value.length > 0) {
            posts.value.forEach(item => {
                if (item?.labels) {
                    categoriesSet.add(...item.labels)
                }
            });
            categoriesSet.forEach(item => {
                if (categories.value.indexOf(item) < 0) {
                    categories.value.push(item)
                }
            })
        }
        if (categories.value.length > 0) {
            saveBlogLabels()
        } else {
            loadBlogLabelsFromLocalStorage()
        }


    }

    function saveBlogLabels() {
        localStorage.setItem(BLOG_LABELS_KEY, JSON.stringify(categories.value));
    }

    function loadBlogLabelsFromLocalStorage() {
        const storedCategories = localStorage.getItem(BLOG_LABELS_KEY);
        if (storedCategories) {
            categories.value = JSON.parse(storedCategories);
        }
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
                name: 'NotFound', query: {
                    message: 'The post you are looking for does not exist',
                    reason: 'You may have visited an old link or the post has been removed',
                    route: 'blog',
                    buttonText: 'Go To Posts',
                }
            });
            loaderStore.done()
        }
        loaderStore.done()
        await retrievePostsLabels()
    }

    return {
        fetchAllPostsFromAPI,
        fetchSinglePosts,
        categories,
        posts,
        singlePost,
        fetchRecentPostsFromAPI,
        recentPosts,
        fetchAllPostsByTagFromAPI
    }
});