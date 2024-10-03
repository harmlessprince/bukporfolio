import { defineStore } from "pinia";
import { ref } from "vue";

export const useToggleSidebar = defineStore("sideBar", () => {
    const sideBar = ref(false);
   
    function showSideBar() {
      sideBar.value = true
    }

    function hideSideBar() {
        sideBar.value = false
    }

    return {sideBar, showSideBar, hideSideBar};
});