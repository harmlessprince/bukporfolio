<script setup>
import {onBeforeMount, ref, watch} from "vue";
import {ErrorMessage, Form} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import * as zod from 'zod';
import CheckoutInput from "@/components/CheckoutInput.vue";
import {useLocationStore} from "@/store/location.store.js";
import Multiselect from 'vue-multiselect'
import Paystack from '@paystack/inline-js';
import {useCartStore} from "@/store/cart.store.js";
import {useAlertStore} from "@/store/alert.store.js";
import {createOrderEmailTemplate} from "@/services/util.js";

const props = defineProps(['totalAmount'])
const locationStore = useLocationStore();
const cartStore = useCartStore();
const alertStore = useAlertStore();
const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, {message: 'This is required'}).email({message: 'Must be a valid email'}),
      firstName: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      lastName: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      phoneNumber: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      address: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      state: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      country: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      city: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
    })
);

const selectedCountry = ref(null)
const selectedState = ref(null)
const formatedCountriesList = ref([])
const formatedStatesList = ref([])
const sendingMessage = ref(false);
onBeforeMount(() => {
  locationStore.loadCountries();
});


watch(selectedCountry, (newX) => {
  console.log(newX.value);
  selectedState.value = [];
  locationStore.getStatesByCountry(newX.value);
  formatedStatesList.value = locationStore.states;
})

watch(
    () => locationStore.countries,
    (newCountries) => {
      if (newCountries.length > 0) {
        formatedCountriesList.value = formatCountries(newCountries);
      }
    }
);

async function sendEmail(orderData) {
  sendingMessage.value = true;
  const htmlTemplate = createOrderEmailTemplate({
    ...orderData
  })
  const subject = "Hey! You have new order from : " + orderData.firstName
  const response = await fetch('/.netlify/functions/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: orderData.email,
      subject: subject,
      // text: 'This is a test email sent from Netlify serverless function.',
      html: htmlTemplate,
    }),
  });
  const result = await response.json();
  if (response.status === 200) {
    // alertStore.showAlert("success", result.message);
  } else {
    alertStore.showAlert("error", result.message);
  }
  sendingMessage.value = false;
}


function checkoutHandler(values, {resetForm}) {
  const orderData = {
    ...values,
    totalAmount: cartStore.totalAmount,
    numberOfItems: cartStore.cartItemCount,
  }
  orderData.items = cartStore.items.map(function (item){
    return {
      ...item,
    };
  });
  const popup = new Paystack()
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
  popup.newTransaction({
    key: publicKey,
    email: values.email,
    firstName: values.firstName,
    lastName: values.lastName,
    phone: values.phoneNumber,
    amount: cartStore.totalAmount * 100,
    metadata: values,
    onSuccess: (transaction) => {
      // console.log(transaction);
      orderData.order_id = transaction.transaction;
      orderData.reference = transaction.reference;
      alertStore.showAlert("success", "Payment successful! We will reach out to you shortly.");
      cartStore.clearCart();
      resetForm();
      sendEmail(orderData);
    },
    onLoad: (response) => {
      console.log("onLoad: ", response);
    },
    onCancel: () => {
      console.log("onCancel");
      alertStore.showAlert("info", "Payment canceled! Please try again.");
    },
    onError: (error) => {
      console.log("Error: ", error.message);
      alertStore.showAlert("error", "Payment canceled! Please try again later.");
    }
  })


}

function formatCountries(countries) {
  return countries
      ?.map((item) => {
        return {
          value: item.name,
          label: item.name,
        };
      });
}
</script>

<template>
  <div class="bg-gray-100 rounded-md p-4 h-max">
    <h3 class="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order
      Summary</h3>

    <Form class="mt-6" @submit="checkoutHandler" :validation-schema="validationSchema">
      <div>
        <h3 class="text-base text-gray-800  font-semibold mb-4">Enter Details</h3>
        <div class="space-y-3">
          <div>
            <CheckoutInput name="firstName" label="First Name" placeholder="First Name"/>
            <ErrorMessage name="firstName" class="text-red-500"/>
          </div>

          <div>
            <CheckoutInput name="lastName" label="First Name" placeholder="Last Name"/>
            <ErrorMessage name="lastName" class="text-red-500"/>
          </div>
          <div>
            <CheckoutInput name="email" label="Email" placeholder="Email" type="email"/>
            <ErrorMessage name="email" class="text-red-500"/>
          </div>
          <div>
            <CheckoutInput name="phoneNumber" label="Phone Number" placeholder="Phone Number"/>
            <ErrorMessage name="phoneNumber" class="text-red-500"/>
          </div>
          <div>
            {{ selectedCountry?.value ?? 'No country selected' }}
            <CheckoutInput name="country" class="hidden" :model-value="selectedCountry.value"
                           :value="selectedCountry.value"
                           v-model="selectedCountry.value" v-if="selectedCountry"/>
            <multiselect
                :options="formatedCountriesList"
                placeholder="Select country"
                label="label"
                track-by="value"
                name="country"
                model-value="value"
                v-model="selectedCountry"
            />

            <ErrorMessage name="country" class="text-red-500"/>
          </div>

          <div>
            {{ selectedState?.name ?? 'No state selected' }}
            <CheckoutInput name="state" class="hidden" :model-value="selectedState.value" :value="selectedState.name"
                           v-model="selectedState.name" v-if="selectedState"/>
            <multiselect
                :options="formatedStatesList"
                placeholder="Select state"
                label="name"
                track-by="name"
                name="state"
                model-value="name"
                v-model="selectedState"
            />

            <ErrorMessage name="state" class="text-red-500"/>
          </div>
          <div>
            <CheckoutInput name="city" label="City" placeholder="City"/>
            <ErrorMessage name="city" class="text-red-500"/>
          </div>
          <div>
            <CheckoutInput name="address" label="Address" placeholder="Delivery Address"/>
            <ErrorMessage name="address" class="text-red-500"/>
          </div>
        </div>
      </div>


      <ul class="text-gray-800 mt-6 space-y-3">
        <!--      <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">#200.00</span></li>-->
        <!--      <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-bold">0.00</span></li>-->
        <!--      <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">0.00</span></li>-->
        <hr class="border-gray-300"/>
        <li class="flex flex-wrap gap-4 text-sm font-bold">Total <span class="ml-auto">#{{ props.totalAmount }}</span>
        </li>
      </ul>

      <div class="mt-6 space-y-3">
        <button type="submit"
                class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
        >
          Checkout
        </button>
        <RouterLink type="button"
                    :to="{name: 'books'}"
                    class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md flex items-center justify-center">
          Continue Shopping
        </RouterLink>
      </div>
    </Form>
  </div>
</template>


<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<style scoped>

</style>