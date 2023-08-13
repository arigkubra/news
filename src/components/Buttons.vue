<template>
   <button class=" mt-5 p-3  bg-black rounded-lg" @click="Clicked">
    <router-link to="/news-detail">Haberin Devamı İçin Tıklayınız...</router-link> 
   </button>
  
   
</template>


<script>
export default{
   props:['post'],
    methods: {
      Clicked(){
      this.$emit('button-clicked', this.post)
    },
   }
}
</script>