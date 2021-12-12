<template>
  <div>
    <UserComp :users="users" v-if="users" />
    <NewUserModal v-if="visibleModal" />
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
import NewUserModal from '~/components/NewUserModal'
import UserComp from '~/components/UserComp'

export default {
  components: {
    NewUserModal,
    UserComp,
  },
  middleware: 'auth',
  computed: {},
  data() {
    return {}
  },
  computed: {
    users() {
      return this.$store.getters.getUsers
    },

    visibleModal() {
      return this.$store.getters.visibleModalNewUser
    },
  },
  mounted() {
    this.$store.dispatch('setUsers')
  },

  methods: {},
}
</script>
