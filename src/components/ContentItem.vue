<template>
  <div class="w-96 h-96 mx-16 my-10 p-5 bg-customBlue text-white rounded-lg">
    <p
      class="h-16 flex justify-center items-center text-sm font-bold bg-white text-black"
    >
      {{ post.title }}
    </p>
    <p class="text-xs mt-5">{{ post.content }}</p>
    <p class="text-xs">{{ post.date }}</p>
    
      <Buttons @button-clicked="handleButtonClick"/>
      <NewsDetailView v-if="buttonClicked" :post="selectedPost"/>
    
    
  </div>
</template>

<script>
import NewsDetailView from "@/views/NewsDetailView.vue";
import Buttons from "./Buttons.vue";

export default {
  components: {
    Buttons,
    NewsDetailView
},
  data(){
    return {
      buttonClicked:false,
      selectedPost: null
    }
  },
  methods: {
    handleButtonClick(){
        this.buttonClicked = true,
        this.selectedPost = post
    }
    
  },
  props: ["post"],
};
</script>