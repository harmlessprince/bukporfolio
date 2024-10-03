<script setup>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/aboutbanner.png';
import Container from "@/components/Container.vue";
import WhoIam from '@/assets/who_i_am.png';
import Heading from '@/components/Heading.vue';
import Subheading from '@/components/SubHeading.vue';
import InspirationCard from '@/components/InspirationCard.vue';
import {useQuoteStore} from "@/store/quotes.store.js";
import {onBeforeMount} from "vue";

const qoutes = [
  {
    title: "On Leadership",
    qoute: "Leadership is becoming the best version of yourself in order to inspire and influence others to become the best versions of themselves. Growth is the factor of inspiration. It is the external evidence of internal transformation. Where growth stops, leadership stops. But when the leader grows, everyone profits. Until you know where a person is and understand why they are there, you can’t lead them to where they ought to be."
  },
  {
    title: "On Empathy",
    qoute: "Empathy requires emotional presence – that state of vulnerability where we are willing to allow the other person to lead us into the recess of their beings; and you don’t enter another person’s world as a critical judge but as a curious learner. Empathy and vulnerability are masterstrokes for strong relational connections. "
  },
  {
    title: "On Wealth ",
    qoute: "What makes a man wealthy or poor is not the amount of money available to him but his attitude toward money and life in general. If you cannot make money without money, you might not be able to multiply money when you have it. "
  },
  {
    title: "On Productivity ",
    qoute: "Success begins with hard work. For harvest to come, the ground must be tilled, seeds must be sown and plants must be watered. Sometimes, we reap immediately after we sow; sometimes, we reap long after we have sown, but without sowing, there can be no reaping. "
  },
  {
    title: "On Excellence ",
    qoute: "The fruit of discipline is power. When you embrace self-control, you wean yourself from dependence on external systems and concentrate power in yourself to determine your outcomes. When you gain personal mastery, excellence becomes your signature and increases your bargaining power. "
  },
  {
    title: "On Power and Toxicity ",
    qoute: "Powerlessness is rather a feeling than a reality. Often, we have more power than we are aware of, but when a person surrenders to his feelings of powerlessness in a situation, he unconsciously enslaves himself. Your feelings of impotence should drive you to seek knowledge rather than settle for less. Know what you have, then use it to get what you should have. "
  },
  {
    title: "On Ownership ",
    qoute: "The fastest way to succeed at anything is to own it. To own is to take responsibility and give your best. Take ownership of your problems, your relationships, your role, your tasks. Own whatever is entrusted to you and give it your best. When you give your best, you grow and attract success in diverse forms! "
  },
  {
    title: "On Assumptions ",
    qoute: "Never underestimate the power of your assumptions. If people assume the wrong things about you, you can prove them wrong – provided you don’t give in to their assumptions. But if you assume the wrong things about yourself, you will unconsciously limit yourself. "
  },
  {
    title: "On Problem-solving ",
    qoute: "As long as you are alive, you can’t avoid having problems. But what you do with problems tells a lot about you have become. Do you create more problems than you solve? Do you own your problems or blame others for them? Do you wish your problems away or work on them? Solving problems is the fastest way to relevance. "
  },
  {
    title: "On Political Intelligence ",
    qoute: "Especially in an environment where the justice system is weak, lack of power is often the unwritten sin. If you are not powerful, you are not free – you could be a victim of another’s power. If you are not powerful. Knowing this is, perhaps, the beginning of political intelligence and sustainable freedom. In all thine getting, get power. "
  },
  {
    title: "On Confidence ",
    qoute: "Confidence is your first advantage in the corridors of power and how you use it determines whether you get a chance to unleash your other advantages. If you don’t believe in yourself, don’t expect powerful people to believe in you. "
  },
  {
    title: "On Capacity-building ",
    qoute: "Favour is to men of skill. It is easier for men to favour you when you are skillful. In fact, when God wants to bless a man, He often asks for what is in his hand because if you can solve problems, you only need an opportunity to do so. So, when you master a skill, you give your blessings an address. "
  },
  {
    title: "On Inspiration ",
    qoute: "Never write off yourself simply because you lack the kind of achievement that can afford you bragging rights; often, what you lack is inspiration. And one spark of inspiration can take you from ground zero to an unscaled peak in a short time. Get inspired! "
  },
  {
    title: "On Resourcefulness ",
    qoute: "In your life’s journey, your resources will hardly ever be enough. Interestingly, your success does not depend on what you have (resources) but your ability to make the most of what you have (resourcefulness). Beyond what you have in your hand, what do you have in your head? "
  },
  {
    title: "On Attitude ",
    qoute: "No one has it all together, no matter how cheerful they appear to be. We have our strengths and struggles, our hits and misses, our fears and faith. What matters is not just what we are going through but how we are going through it. Our attitude will not only determine our outcome, but also shape the lessons we glean afterwards from our experiences. "
  },
  {
    title: "On Managing Uncertainties  ",
    qoute: "In life, uncertainty is the only certainty. This fact should make us careful but not fearful, alert but not afraid. Actually, understanding, accepting, and embracing this fact is one of the indices of maturity. "
  },
  {
    title: "On Fulfilment",
    qoute: "There are two major aspects of life from which we derive fulfilment – our work and relationships, especially family. Without work, we lose our sense of contribution. Without family and key relationships, our work loses a significant part of its meaning. A healthy man balances both with wisdom. "
  },
  {
    title: "On Mistakes ",
    qoute: "Failure is not the problem – how you respond is the problem. There are two ways to use your mistakes and defeats constructively: learn from them and be inspired by them."
  },
  {
    title: "On Gaining Mastery",
    qoute: "The desire to be a master is valid. Within every man is the desire to be great and have dominion. We want to be in charge of our lives and control our environment rather than having it otherwise. We want “soft work” that generates results seamlessly. What is often wrong is the path that people want to take to get there. Prioritizing results over process leads to stunted growth not mastery."
  },
  {
    title: "On Discipline ",
    qoute: "In the natural realm, every problem and dream answers to discipline: to shed some weight, to curb a habit or appetite, to maximize your strengths, to love better, to achieve financial freedom, to have a better life; you need more discipline. So, don’t just desire and dream more – increase your level of discipline."
  },
  {
    title: "On Love ",
    qoute: "Love is the highest inspiration for a life of excellence. In a beautiful paradox, it breaks us to make us; it weakens us to strengthen us; it denies us to make us more deserving; it conquers us to help us win; and it slays us to recreate and resurrect us into new creatures worthy of honour and glory."
  },
]

const store = useQuoteStore()
onBeforeMount(() => {
  store.getQuotes();
});


</script>

<template>

  <main class="text-primary">
    <div class="relative h-[55rem] max-sm:w-full">
      <!-- Background image with opacity -->
      <div class="absolute inset-0 bg-black"></div>
      <div class="absolute inset-0  bg-cover bg-center"
           :style="{ 'background-image': 'url(' + AboutBanner + ')' }"></div>
      <!-- Text on top of the image -->
      <div
          class="w-[47.7rem]  max-sm:w-full relative flex items-center flex-col justify-center h-full text-basic mx-auto text-center">
        <h1 class="text-forty max-sm:text-[3.0rem] font-xlg text-basicColor">Speaker</h1>
        <p class="text-[#E1E1E1] font-xsm text-basic">Phenomenal, highly engaging sessions of insight, inspiration, and
          impact</p>
        <div class="font-lg text-basic">
          <span class="text-bannerNavColor">Home</span> <span class="text-primary"> > About</span>
        </div>
      </div>
    </div>

    <Container>
      <div class="w-full flex  max-sm:flex-col justify-between items-center mt-[5rem]">
        <div class="w-[47.6rem]  max-sm:w-full h-[47.9rem] rounded-[10px]">
          <img :src="WhoIam" class="w-full h-full rounded-[10px]" alt="bright"/>
        </div>
        <div class="w-[47.7rem]  max-sm:w-full">
          <p class="font-xsm text-basic text-[#2B2B2B] mb-[2rem]">
            Bright UK has often been described as an old sage is a young body. As such, when he speaks, wise leaders pay
            keen attention. 
            As a frequent keynote speaker, Bright UK’s speaking expertise cuts across subjects that impact on behaviour
            in order to elevate the human condition, empower individuals, raise sound leaders, shape culture, and
            democratize prosperity. These include Leadership, Personal Development, Business, Career Advancement, and
            National Development. 
            His uncanny ability to extract wisdom from life, weave them into comprehensible frameworks and contemporary
            stories, and distill them in simple language endears him to both old and young, established veterans and
            upwardly mobile professionals alike. 
            He has been featured on notable media platforms and has spoken to diverse audiences including entrepreneurs
            and business leaders, faith-based organizations, academicians, etc. 
            He is in demand at conferences, seminars, and workshops across the nation. 
          </p>

          <RouterLink
              class="font-sm text-xsm text-secondary w-[20.4rem] h-[4.3rem] bg-primary rounded-[8px] flex justify-center items-center"
              :to="{name: 'contact', query: {service: 'speaker' }}">
            Book bright UK
          </RouterLink>
        </div>
      </div>
    </Container>

    <!-- inspiration words from bright -->
    <section class="w-full bg-[#F1F1F1] py-top mt-[1rem] mb-[6rem]">
      <Container>
        <div class="w-full text-center mt-[2rem]">
          <Subheading title="Quotes"/>
          <Heading title="Inspirational words from Bright UK"/>
        </div>
        <div
            class="grid grid-cols-[repeat(auto-fill,minmax(31.1rem,1fr))] w-full gap-[3.1rem] mt-[2rem]"
        >
          <InspirationCard
              v-for="(item, index) in store.quotes"
              :title="item.title"
              :qoute="item.quote"
              :key="index"
          />

        </div>
      </Container>
    </section>
  </main>
</template>

<style scoped>
.speakerBanner::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
}

</style>