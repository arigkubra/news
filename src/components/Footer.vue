<template>
    <div class=" bg-customRed text-white">
        <p class="text-6xl flex  justify-center py-5 items-center font-customFam">En absürt haberler için bizi takip edin</p>
        <div class="flex m-24 justify-between ">
            <router-link class="mr-10" to="/">Home</router-link> 
            <router-link class="mr-10" to="/news">News</router-link> 
            <router-link class="mr-10" to="/about">About</router-link> 
        </div>
      
    </div>
</template>


<script>
export default{
    components: 'Footer'
}
</script>