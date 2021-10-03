<template>
  <div>
    <Navbar />
    <nuxt />
    <Logo />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Logo from '~/components/Logo'

export default {
  components: {
    Navbar,
    Logo,
  },
}
</script>
