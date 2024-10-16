<script setup>

import Container from "@/components/Container.vue";
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';
import {onMounted, ref} from "vue";
import ContactFormInput from "@/components/ContactFormInput.vue";
import {ErrorMessage, Field, Form} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import * as zod from "zod";
import {useAlertStore} from "@/store/alert.store.js";
import Alert from "@/components/Alert.vue";
import {createContactEmailTemplate} from "@/services/util.js";
import { useRoute } from 'vue-router';
import HeroSection from "@/components/HeroSection.vue";

const alertStore = useAlertStore();
const route = useRoute();
const sendingMessage = ref(false);
const selectedService = ref('');
const services = ref([
  {
    name: "Speaker",
    value: "speaker",
  },
  {
    name: "Personal Coaching/Training Session",
    value: "personalTrainingCoachingSession",
  },
  {
    name: "Group Coaching/Training Session",
    value: "groupTrainingCoachingSession",
  },
  {
    name: "Others",
    value: "other",
  }
])

const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, {message: 'This is required'}).email({message: 'Must be a valid email'}),
      fullName: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      phoneNumber: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      country: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}).optional(),
      service: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}),
      companyName: zod.string().min(1, {message: 'This is required'}).min(2, {message: 'Too short'}).optional(),
      message: zod.string().min(10, {message: 'This is required'}).min(2, {message: 'Must be at least 10 characters'}).optional(),
    })
);

onMounted(() => {
  const optionFromQuery = route.query?.service ?? "";
  if (optionFromQuery) {
    selectedService.value = optionFromQuery;
  }
});

async function sendEmail(values, {resetForm}) {
  alertStore.showAlert("info", "Sending email, please wait");
  sendingMessage.value = true;
  values.service = services.value.find((item) => values.service === item.value)?.name ?? 'Other';
  const htmlTemplate = createContactEmailTemplate({
    ...values
  })
  const subject = "Hey! You have a new message from: " + values.fullName
  const response = await fetch('/.netlify/functions/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: values.email,
      subject: subject,
      // text: 'This is a test email sent from Netlify serverless function.',
      html: htmlTemplate,
    }),
  });
  const result = await response.json();
  if (response.status === 200) {
    alertStore.showAlert("success", result.message);
  } else {
    alertStore.showAlert("error", result.message);
  }
  sendingMessage.value = false;
  resetForm();
}
</script>

<template>
  <main class="text-secondary">
    <!-- hero section -->
    <HeroSection
        imageUrl="https://res.cloudinary.com/dcr1pvlh3/image/upload/v1729059216/trainerbanner_ljje9a.png"
        page="Contact"
    />


    <Container>
      <div class="mt-[3.4rem] text-center">
        <Subheading title="Contact"/>
        <Heading title="Get in Touch with Bright UK"/>
      </div>

      <!-- form section -->
      <section class="mt-[2rem] mb-[5rem]">
        <Form class="font-[500] text-[2rem] max-sm:text-[1.6rem] leading-[4.2rem] text-secondaryColor contact_form" @submit="sendEmail"
              :validation-schema="validationSchema">
          <div class="space-y-[2rem]">
           <div class="grid grid-cols-2 max-medium:grid-cols-1 gap-[2.5rem]">
            <div class="w-full">
              <label class="">Full Name</label>
              <ContactFormInput name="fullName" label="Full Name" placeholder="John Doe"/>
              <ErrorMessage name="fullName" class="text-red-500"/>
            </div>
            <div class="w-full">
              <label class="">Email Address</label>
              <ContactFormInput name="email" label="Email Address" placeholder="johndoes@example.com" type="email"/>
              <ErrorMessage name="email" class="text-red-500"/>
            </div>
          </div>
          <div class="grid grid-cols-2 max-medium:grid-cols-1 gap-[2rem]">
            <div class="w-full">
              <label class="">Phone Number</label>
              <ContactFormInput name="phoneNumber" label="Full Name" placeholder="John Doe"/>
              <ErrorMessage name="phoneNumber" class="text-red-500"/>
            </div>
            <div class="w-full">
              <label class="">Company Name</label>
              <ContactFormInput name="companyName" label="Company Name" placeholder="John Doe Limited"/>
              <ErrorMessage name="companyName" class="text-red-500"/>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-[2rem] max-medium:grid-cols-1 items-end">
            <div class="w-full">
              <label class="">Country</label>
              <ContactFormInput name="country" label="Country" placeholder="Nigeria"/>
              <ErrorMessage name="country" class="text-red-500"/>
            </div>
            <div class="w-full">
              <label class="">What service are you booking Bright Uk for?</label>
              <Field v-model="selectedService" name="service" as="select" key="service">
                <option value="">Please select an option</option>
                <option v-for="(item, index) in services" :key="index" :value="item.value">{{
                    item.name
                  }}
                </option>
              </Field>
              <ErrorMessage name="service" class="text-red-500"/>
            </div>
          </div>
            <div class="w-full">
              <label class="">Message</label>
              <Field name="message" as="textarea" rows="12" key="message"/>
              <ErrorMessage name="message" class="text-red-500"/>
            </div>
          </div>

          <button class="hover:scale-[1.1] w-[22.5rem] h-[5.5rem] bg-primaryColor rounded-[8px]" type="submit" :disabled="sendingMessage">
          <span v-if="sendingMessage">
            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin"
                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"/>
              <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"/>
            </svg>
            Sending message...
          </span>
            <span v-else>
             Send Message
          </span>
          </button>
          <Alert v-if="alertStore.show"/>
        </Form>

        <div
            class="grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] gap-[3rem] text-[#ffffff] font-[500] mt-[4.8rem]">
            <a href="mailto:iambrightuk@gmail.com">
          <div class=" min-h-[15.5rem] max-medium:min-h-full rounded-[10px] p-[1.5rem] bg-[#000000]">
            <h1 class="text-[3.2rem] leading-[4.2rem]">Email</h1>
            <div class="text-[2rem] leading-[2.8rem]">iambrightuk@gmail.com</div>
          </div>
          </a>

          <a href="tel:+2348135273602">
          <div class=" min-h-[15.5rem] max-medium:min-h-full rounded-[10px] p-[1.5rem] bg-[#000000]">
            <h1 class="text-[3.2rem] leading-[4.2rem]">Phone number</h1>
            <div class="text-[2rem] leading-[2.8rem]">+2348135273602</div>
          </div>
          </a>

          <div class="min-h-[15.5rem] max-medium:min-h-full rounded-[10px] p-[1.5rem] bg-[#000000]">
            <h1 class="text-[3.2rem] leading-[4.2rem]">Address</h1>
            <div class="text-[2rem] leading-[2.8rem]">The Ridge Terrace, off kusenla Road lekki lagos</div>

          </div>
        </div>

      </section>
    </Container>
  </main>

</template>

<style scoped>
.aboutBanner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #000;
  opacity: 0.7;

}

.contact_form select {
  @apply w-full h-[6.2rem] rounded-[10px] border border-[#a6a6a6] text-[1.6rem] text-secondaryColor leading-[2.2rem];
}

.contact_form textarea {
  @apply w-full rounded-[10px] border border-[#a6a6a6] text-[1.6rem] text-secondaryColor leading-[2.2rem];
}

</style>