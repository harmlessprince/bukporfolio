<script setup>
import Navigation from '@/components/navigation.vue';
import Footer from '@/components/footer.vue';
import AboutBanner from '@/assets/trainerbanner.png';
import Container from "@/components/Container.vue";
import Heading from '@/components/heading.vue';
import Subheading from '@/components/subheading.vue';
import Blogcard from '../../components/Blogcard.vue';

</script>

<template>
  <main class="text-secondary">
    <Navigation/>
    <!-- hero section -->
     <section class="flex items-center justify-center relative aboutBanner h-[70vh] w-full bg-cover bg-no-repeat" :style="{ 'background-image': 'url(' + AboutBanner + ')' }">
      <div class="w-[47.7rem] text-basic mx-auto text-center z-[200]">
        <h1 class="text-forty font-xlg text-basicColor">Blog</h1>
        <div class="font-lg text-basic">  
          <span class="text-bannerNavColor">Home</span> <span class="text-bannerNavColor"> > Blog</span> <span class="text-primary"> > Life coach tip</span>
        </div>
      </div>
     </section>

     <Container>
        <div class="mt-[2.4rem] mb-[5rem] text-center flex flex-row justify-between items-top">
            <div class="w-[64.5rem] text-left">
            <img :src="AboutBanner" class="w-[100%] h-[41.7rem] relative" alt="blogpics" />

            <div class="mt-[2.4rem] flex flex-row items-center space-x-[1rem]">
                <div class="text-[1.4rem] font-[400] text-[#7a7a7a] flex items-center">
                <span class="material-icons">calendar_month</span>
                <span>10-2-2024</span>
                </div>

                <div class="text-[1.4rem] font-[400] text-[#7a7a7a] flex items-center">
                <span class="material-icons">person</span>
                <span>olamide osuji</span>
                </div>
                <button class="font-[400] text-[1rem] w-[16.3rem] h-[2.1rem] rounded-[10px] bg-[#0A9C3B] ">Category 2</button>
            </div>

            <div class="mt-[1.7rem] font-[400] leading-[1.69rem] text-[1.4rem] text-[#7a7a7a]">
                <header class="mb-[1rem] font-[700] text-[2.8rem] leading-[3.38rem] text-secondaryColor">Learn Webs Applications Development from Experts</header>
                <p>
                    When working on a new piece of software, it’s essential to craft a 
                    software design document to create a clear and precise vision of the
                     client’s problem and your proposed solution. Software design 
                     documents are important for detailing expectations between the
                      software engineer and the client. They help to streamline the coding
                       process before any code is written.
                    Read on to learn how to write great software design documents that 
                    improve communication between you and your client, ensuring that 
                    everyone is on the same page when working on a project together.
                </p>

                <div class="mt-[0.8rem]" >
                    <h1 class="font-[700] text-[1.6rem] leading-[1.94rem] text-secondaryColor">What Is a Software Design Document?</h1>
                    <div class="space-y-[1.6rem]">
                        <p>Before starting a new project with the client, the planning stage involves having a clear vision and agreeing upon design goals. These goals should be laid out in a technical specification document called a software design document.</p>
                        <p>A software developer is usually responsible for creating the software design document. The developer will gather information from a client who wants a new piece of software built and then they will make a document that details the proposed solutions to the client's problems.</p>
                    </div>  
                </div>

                <div class="mt-[0.8rem]" >
                    <h1 class="font-[700] text-[1.6rem] leading-[1.94rem] text-secondaryColor">What to Include in Your Software Design Document</h1>
                    <div class="space-y-[1.6rem]">
                        <p>
                            Problems within the coding world tend to vary, and engineering 
                            teams and developers often write design documents differently. 
                            However, there is a certain software design document template 
                            that you can follow to help you include all of the essential 
                            pieces of information.
                            Here are some factors you should include:
                        </p>  
                    </div>  
                </div>

                <div class="mt-[0.8rem]" >
                    <h1 class="inline font-[700] text-[1.6rem] leading-[1.94rem] text-secondaryColor">Key Information:</h1>
                        <span>
                            Problems within the coding world tend to vary, and engineering 
                            teams and developers often write design documents differently. 
                            However, there is a certain software design document template 
                            that you can follow to help you include all of the essential 
                            pieces of information.
                            Here are some factors you should include:
                        </span>  
                    </div> 
                    
                    <div class="mt-[0.8rem]" >
                        <h1 class="inline font-[700] text-[1.6rem] leading-[1.94rem] text-secondaryColor">Overview:</h1>
                            <span>
                                Problems within the coding world tend to vary, and engineering 
                                teams and developers often write design documents differently. 
                                However, there is a certain software design document template 
                                that you can follow to help you include all of the essential 
                                pieces of information.
                                Here are some factors you should include:
                            </span>  
                        </div> 

                        <div class="mt-[0.8rem]" >
                            <h1 class="inline font-[700] text-[1.6rem] leading-[1.94rem] text-secondaryColor">Pain points:</h1>
                                <span>
                                    Problems within the coding world tend to vary, and engineering 
                                    teams and developers often write design documents differently. 
                                    However, there is a certain software design document template 
                                    that you can follow to help you include all of the essential 
                                    pieces of information.
                                    Here are some factors you should include:
                                </span>  
                            </div> 

                            <div class="mt-[0.8rem]" >
                                <h1 class="inline font-[700] text-[1.6rem] leading-[1.94rem] text-secondaryColor">Project milestones:</h1>
                                    <span>
                                        Problems within the coding world tend to vary, and engineering 
                                        teams and developers often write design documents differently. 
                                        However, there is a certain software design document template 
                                        that you can follow to help you include all of the essential 
                                        pieces of information.
                                        Here are some factors you should include:
                                    </span>  
                                </div> 

                                <div class="mt-[0.8rem]" >
                                    <h1 class="inline font-[700] text-[1.6rem] leading-[1.94rem] text-secondaryColor">Solutions:</h1>
                                        <span>
                                            Problems within the coding world tend to vary, and engineering 
                                            teams and developers often write design documents differently. 
                                            However, there is a certain software design document template 
                                            that you can follow to help you include all of the essential 
                                            pieces of information.
                                            Here are some factors you should include:
                                        </span>  
                                    </div> 
            </div>
             </div>

             <!-- second part of the flex -->
        <div class="w-[31.1rem]">
        <div class="text-left border border-[#dddddd] rounded-[10px] p-[1.2rem] text-secondaryColor">
            <header class="font-[700] text-[2rem] leading-[2.42rem]">Recent Post</header>
            <div class="flex flex-row py-[0.5rem] border border-[#dddddd] border-x-0 border-t-0 mb-[1.2rem]">
                <img :src="AboutBanner" class="w-[6.1rem] h-[5.9rem] mr-[1.1rem]" alt="blogpics" /> 
                <div class="text-[1.4rem] leading-[1.69rem]">
                    <h1 class="font-[700] ">Learn Webs Applications Development from Experts</h1>
                    <div class="font-[400] text-[#7a7a7a] flex items-center">
                    <span class="material-icons">calendar_month</span>
                    <span>10-2-2024</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-row py-[0.5rem] border border-[#dddddd] border-x-0 border-t-0 mb-[1.2rem]">
                <img :src="AboutBanner" class="w-[6.1rem] h-[5.9rem] mr-[1.1rem]" alt="blogpics" /> 
                <div class="text-[1.4rem] leading-[1.69rem]">
                    <h1 class="font-[700] ">Learn Webs Applications Development from Experts</h1>
                    <div class="font-[400] text-[#7a7a7a] flex items-center">
                    <span class="material-icons">calendar_month</span>
                    <span>10-2-2024</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="h-[204px] mt-[1.8rem] text-left border border-[#dddddd] rounded-[10px] p-[1.2rem] text-secondaryColor">
            <header class="font-[700] text-[2rem] leading-[2.42rem]">Categories</header>
            <div class="text-basicColor flex flex-row justify-between flex-wrap mt-[1.8rem] gap-y-[1.6rem] text-[1rem] font-[400] leading-[1.2rem]">
                <button class="bg-[#0A9C3B] w-[13.8rem] h-[2.9rem] rounded-[10px]">Category 1</button>
                <button class="bg-[#9C5F0A] w-[13.8rem] h-[2.9rem] rounded-[10px]">Category 2</button>
                <button class="bg-[#3D0A9C] w-[13.8rem] h-[2.9rem] rounded-[10px]">Category 3</button>
                <button class="bg-[#9C330A] w-[13.8rem] h-[2.9rem] rounded-[10px]">Category 4</button>
            </div>
        </div>
        </div>
        </div>   
     </Container>
    <Footer />  
    </main>
</template>

<style scoped>
.aboutBanner::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: #000;
  opacity: 0.7;

}

</style>