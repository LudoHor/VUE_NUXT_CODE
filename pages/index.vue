<template>
  <section class="section max-w-6xl mx-auto">
    <div class="grid justify-items-center">
      <h1 class="text-3xl text-gold-100 text-center m-2">Vitajte na stránke</h1>
      <div class="section max-w-xl">
        <!-- <transition
          enter-class="transform scale-50"
          enter-to-class="opacity-100 "
          enter-active-class="transition duration-1000 ease-in-out"
        > -->
        <nuxt-img class="object-center" src="/pic/CC.jpg" alt="" />
        <!-- </transition> -->
      </div>
      <Logo />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      isLoadedLogo: false,
    }
  },
  methods: {
    loadLogo() {
      this.isLoadedLogo = true
    },
  },
}
</script>
