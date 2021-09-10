<template>
  <section class="text-center">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="text-gray-600"><strong>Register</strong></h2>

          <Notification v-if="success" type="success" :message="success" />
          <Notification v-if="error" type="danger" :message="error" />

          <form
            v-if="!success"
            method="post"
            @submit.prevent="register"
            class="grid justify-items-center"
          >
            <div class="space-x-4 m-2">
              <label class="text-gray-600 block">Username</label>
              <div class="block">
                <input
                  v-model="username"
                  type="text"
                  class="border-2"
                  name="username"
                  required
                />
              </div>
            </div>
            <div class="space-x-2">
              <label class="text-gray-600 block">Email</label>
              <div class="block">
                <input
                  v-model="email"
                  type="email"
                  class="border-2 m-2"
                  name="email"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="text-gray-600">Password</label>
              <div class="control">
                <input
                  v-model="password"
                  type="password"
                  class="border-2 m-2"
                  name="password"
                  required
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="m-5 px-2 py-2 bg-indigo-200 rounded">
                <span class="text-blue-900"><strong>Register</strong></span>
              </button>
            </div>
          </form>

          <div class="text-gray-600">
            Already got an account?
            <nuxt-link to="/login"><strong>Login</strong></nuxt-link>
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
      username: '',
      email: '',
      password: '',
      success: null,
      error: null,
    }
  },
  methods: {
    async register() {
      this.error = null
      try {
        this.$axios.setToken(false)
        await this.$axios.post('https://strapi-bb.herokuapp.com/auth/local/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        this.success = `A confirmation link has been sent to your email account. \
 Please click on the link to complete the registration process.`
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message
      }
    },
  },
}
</script>
