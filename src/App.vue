<template>
  <div id="app">
    <a href="#content" class="skip-link">Skip to main content</a>
    <section class="hero hero-home">
      <w2r-header></w2r-header>
      <main id="content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
    </section>
    
    <w2r-footer></w2r-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'w2r-header': Header,
    'w2r-footer': Footer,
  }
}
</script>

<style>

</style>