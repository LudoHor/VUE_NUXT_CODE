<template>
  <section class="m-2 text-gray-600 text-center">
    <h2 class="text-xl m-2"><strong>Moje videa</strong></h2>
    <div class="content">
      </div>
    <Test />
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Test from '~/components/test.vue'

export default {
  middleware: 'auth',
  components: {
      Test,
  },
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  data() {
    return {
      owner: [],
    }
  },
  created() {
    axios
      .get('http://localhost:1337/owners?users_permissions_user=$loggedInUser.id')
      .then((response) => (this.owner = response.data))
  },
}
</script>
