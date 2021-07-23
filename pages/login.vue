<template>
  <section class="m-2 text-center">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="px-6 text-gray-600"><strong>Login</strong></h2>

          <Notification v-if="error" type="danger" :message="error" />

          <form method="post" @submit.prevent="login">
            <div class="inline-block">
              <input
                v-model="email"
                type="email"
                class="border-2 m-4 rounded-md"
                name="email"
                placeholder="Em@il"
              />
            </div>
            <div class="">
              <input
                v-model="password"
                type="password"
                class="border-2 rounded-md"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="control">
              <button type="submit" class="m-5 px-2 py-2 bg-indigo-200 rounded">
                <span class="text-blue-900"><strong>Login</strong></span>
              </button>
            </div>
          </form>
          <div>
            <p class="text-gray-600">
              Don't have an account?
              <nuxt-link to="/register" class="text-gray-600"
                >Register</nuxt-link
              >
            </p>
            <p>
              <nuxt-link to="/forgot-password" class="text-gray-600"
                >Forgot Password?</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async login() {
      this.error = null
      try {
        await this.$auth.loginWith('local', {
          data: {
            identifier: this.email,
            password: this.password,
          },
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>
