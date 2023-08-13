<template>
  <div class="flex justify-center ">
    <div class="flex w-3/5">
      <img class="object-cover" src="../images/haberlerAnasayfa.jpg" alt="">
    </div>
  </div>
  <div class="flex py-10 justify-center font-customFam bg-customBlue text-white text-5xl ">
    Son Dakika Haberleri
  </div>
  <div class="flex justify-center">
    <ContentItem v-for="post in posts" :key="post.date" :post="post" 
    
     />
     
  </div>
  
</template>

<script>
import ContentItem from '@/components/ContentItem.vue';
export default{
  components: {
    ContentItem,
  },
  data(){
    return{
      posts:[
      { date: 1, title: 'YKS Sonuçları Açıklandı!', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget bibendum ipsum. Fusce at turpis vel libero elementum rhoncus. Nullam scelerisque, libero vel porttitor blandit, justo felis tristique sapien, eget ullamcorper nunc libero nec velit'},
      { date: 2, title: 'Ali Cabbar Evlendi!', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget bibendum ipsum. Fusce at turpis vel libero elementum rhoncus. Nullam scelerisque, libero vel porttitor blandit, justo felis tristique sapien, eget ullamcorper nunc libero nec velit'},
      { date: 3, title: 'Bilgisayar Fiyatlarında Artış!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget bibendum ipsum. Fusce at turpis vel libero elementum rhoncus. Nullam scelerisque, libero vel porttitor blandit, justo felis tristique sapien, eget ullamcorper nunc libero nec velit'},
      { date: 4, title: 'Gök Tengri Sıcakları Geliyor!', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget bibendum ipsum. Fusce at turpis vel libero elementum rhoncus. Nullam scelerisque, libero vel porttitor blandit, justo felis tristique sapien, eget ullamcorper nunc libero nec velit'},
      
    ]}
    
  }
}
</script>