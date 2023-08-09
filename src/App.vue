<template>
  <Navbar />
  <!-- <News />
  <Buttons />
  <AboutContent /> -->
  <router-view></router-view>

  <Footer />
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import News from './components/News.vue'
// import Buttons from './components/Buttons.vue'
// import AboutContent from './components/AboutContent.vue'

export default{
  components: {
    Navbar,
    // News,
    // Buttons,
    // AboutContent,
    Footer,
  },
}

</script>