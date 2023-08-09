<template>
    <div class="flex justify-end items-center bg-customBlue w-screen h-12">
      <router-link class="mr-10 text-white" to="/">Home</router-link> 
      <router-link class="mr-10 text-white" to="/news">News</router-link> 
      <router-link class="mr-10 text-white" to="/about">About</router-link> 
    </div>
</template>


<script>
export default{
  components: 'Navbar'
}
</script>

