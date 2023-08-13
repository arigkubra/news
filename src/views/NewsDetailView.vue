<template>
   <div class="">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p>{{ post.date }}</p>
   </div>
</template>

<script>
import ContentItem from '@/components/ContentItem.vue';

export default {
  components: {
    ContentItem,
    
  },
  props:{
    post: {
      type: Object,
      required: true
    }
  },

  
};
</script>