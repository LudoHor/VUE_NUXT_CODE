<template>
  <section class="m-2 text-center">
    <div class="container mx-auto">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="px-6 text-gold-100"><strong>Prihlásenie</strong></h2>

          <form method="post" @submit.prevent="login">
            <div class="inline-block">
              <input
                v-model="email"
                type="email"
                class="
                  border-2
                  m-4
                  border-gold-100
                  rounded-md
                  p-2
                  focus:border-gold-500 focus:outline-none
                "
                name="email"
                placeholder="Em@il"
                title="Please enter Alphabets."
              />
            </div>
            <div class="">
              <input
                v-model="password"
                type="password"
                class="
                  border-2 border-gold-100
                  rounded-md
                  p-2
                  focus:border-gold-500 focus:outline-none
                "
                name="password"
                placeholder="Heslo"
              />
            </div>
            <Notification
              v-if="error"
              type="danger"
              class="mt-2"
              :message="'Email alebo heslo je nesprávne'"
            />
            <div class="control">
              <button
                type="submit"
                class="
                  m-5
                  py-2
                  text-bold
                  px-3
                  bg-gold-50
                  hover:bg-gold-100
                  text-gold-500
                  rounded
                  transition
                  duration-300
                "
              >
                <span class="text-gold-900"><strong>Prihlásiť sa</strong></span>
              </button>
            </div>
          </form>
          <!-- <div>
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
          </div> -->
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
