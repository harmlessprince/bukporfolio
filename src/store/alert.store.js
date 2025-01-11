import {defineStore} from "pinia";
import {ref} from "vue";

export const useAlertStore = defineStore("alertsStore", () => {

    const show = ref(false);
    const type = ref("")
    const message = ref("")
    function showAlert(alertType, message) {
        setType(alertType)
        setMessage(message)
        show.value = true;
    }
    function hiderAlert(){
        setType("")
        return show.value = false;
    }
    function setType(value){
        return type.value = value;
    }
    function setMessage(value){
        return message.value = value;
    }
    return {
        showAlert,
        type,
        message,
        hiderAlert,
        show,
    }
});