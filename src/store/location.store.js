import {defineStore} from "pinia";
import {collection, getDocs} from 'firebase/firestore'
import {database} from "@/services/firebase.js";
import {ref} from "vue";

const BASE_URL = "https://countriesnow.space/api/v0.1/countries/positions";
const COUNTRY_STORAGE_KEY = 'countries';
export const useLocationStore = defineStore("locationStore", () => {

    const countries = ref([]);
    const states = ref([]);

    async function fetchCountriesFromAPI() {
        const response = await fetch("https://countriesnow.space/api/v0.1/countries/states")
        if (response.status === 200) {
            const data = await response.json();
            countries.value = data?.data
            const cacheObject = {
                data: data?.data,
                timestamp: new Date().getTime() // Current timestamp
            };
            localStorage.setItem(COUNTRY_STORAGE_KEY, JSON.stringify(cacheObject));
            return data?.data;
        } else {
            alert("Country api is failing")
        }
    }

    function getStatesByCountry(countryName) {
        const country = countries.value.find(c => c.name === countryName);
        if (country) {
            states.value = country.states;
        }
    }

    async function loadCountries() {
        const cache = localStorage.getItem(COUNTRY_STORAGE_KEY);
        if (cache) {
            const {data, timestamp} = JSON.parse(cache);
            const currentTime = new Date().getTime();
            const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

            // If cached data is still valid (less than 1 hour old)
            if (currentTime - timestamp < oneHour) {
                console.log('Using cached data');
                countries.value = data;
                return data;
            } else {
                // Cached data is expired
                console.log('Cache expired, fetching new data');
                return await fetchCountriesFromAPI();
            }
        } else {
            console.log('No cache found, fetching new data');
            return await fetchCountriesFromAPI();
        }
    }

    return {
        countries,
        states,
        loadCountries,
        getStatesByCountry
    };

});