<template>
  <section class="section max-w-6xl mx-auto">
    <div class="grid justify-items-center">
      <h1 class="text-3xl text-gold-100 text-center m-2">Vitajte na stránke</h1>
      <div class="section max-w-xl">
        <transition
          appear
          appear-class="transform scale-50"
          appear-to-class="opacity-100 "
          appear-active-class="transition duration-1000 ease-in-out"
        >
          <img class="object-center" v-lazy="'/pic/CC.jpg'" alt="" />
        </transition>
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
}
</script>
