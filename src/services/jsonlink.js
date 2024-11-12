const apiKey = import.meta.env.VITE_JSON_LINK_KEY;
const cacheKey = 'cachedPreviewLinks';
export default async function fetchPreviewData (url){
    try{
        const cachedData = JSON.parse(localStorage.getItem(cacheKey)) || {};
        if (cachedData[url]) {
            return {
                status: true,
                ...cachedData[url],
            };
        }
        const apiUrl = `https://jsonlink.io/api/extract?url=${url}&api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        if (!response.ok){
            return {
                status: false,
            };
        }
        cachedData[url] = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(cachedData));
        return {
            status: true,
            data: cachedData[url],
        };
    }catch(e){
        console.error('An error occurred:', e);
        const cachedData = JSON.parse(localStorage.getItem(cacheKey)) || {};
        cachedData[url] = e;
        localStorage.setItem(cacheKey, JSON.stringify(cachedData));
        return {
            status: false,
            data: null
        };
    }
};