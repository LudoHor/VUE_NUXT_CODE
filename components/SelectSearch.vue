<template>
  <div class="relative" v-click-outside="closedays">
    <div
      class="
        bg-white
        border border-gold-100
        rounded-md
        shadow-sm
        pl-3
        pr-10
        py-2
        text-left
        focus:outline-none
        focus:ring-1
        focus:ring-gold-500
        focus:border-gold-500
        sm:text-sm
      "
    >
      <span v-if="!cur_vid" class="flex items-center">
        <input
          @input="input_change()"
          type="text"
          class="w-full focus:outline-none p-0"
          v-model="input"
        />
      </span>
      <span v-if="cur_vid" class="flex border rounded-md border-gold-100">
        <span class="ml-1 text-gold-100 cursor-default">
          {{ cur_vid.Nazov_videa }}
        </span>
        <span class="ml-1 cursor-pointer" @click="delete_video()">x</span>
      </span>

      <span
        @click="visibledays = !visibledays"
        class="
          ml-1
          absolute
          inset-y-0
          right-0
          flex
          items-center
          pr-2
          cursor-pointer
        "
      >
        <!-- Heroicon name: solid/selector -->
        <svg
          class="h-5 w-5 text-gold-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>

    <transition
      enter-class="transform -translate-y-6 opacity-0"
      enter-active-class="transition duration-500 ease-in-out"
      leave-to-class="transform -translate-y-6 opacity-0 "
      leave-active-class="transition duration-500 ease-in-out"
    >
      <ul
        v-if="visibledays"
        ref="ul"
        class="
          absolute
          z-10
          mt-1
          w-full
          bg-white
          shadow-lg
          max-h-56
          rounded-md
          py-1
          text-base
          ring-1 ring-black ring-opacity-5
          overflow-auto
          focus:outline-none
          sm:text-sm
        "
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
      -->
        <li
          class="
            text-gold-500
            cursor-default
            select-none
            relative
            py-2
            pl-3
            pr-9
          "
          id="listbox-option-0"
          role="option"
          v-for="vid in curList"
          :key="vid.id"
          @click="changevid(vid)"
        >
          <div class="flex items-center">
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span class="font-normal ml-3 block truncate text-gold-100">
              {{ vid.Nazov_videa }}
            </span>
          </div>

          <!--
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        -->
          <span
            v-if="vid.Nazov_videa === cur_vid.Nazov_videa"
            class="
              text-gold-500
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-4
            "
          >
            <!-- Heroicon name: solid/check -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>

        <!-- More items... -->
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  components: {},
  props: {
    video: {},
  },
  data() {
    return {
      input: '',
      den: '',
      cur_vid: '',

      visibledays: false,

      all_videos: [],
    }
  },
  async mounted() {
    await this.$store.dispatch('setVideos')
    this.all_videos = this.$store.getters.getVideos
    if (this.video) {
      this.cur_vid = this.video
    }
  },
  computed: {
    curList() {
      if (this.input) {
        return this.all_videos.filter((vid) =>
          vid.Nazov_videa.toLowerCase().startsWith(this.input.toLowerCase())
        )
      }
      return this.all_videos
    },
  },

  methods: {
    delete_video() {
      this.cur_vid = ''
      this.$emit('changeVid', this.cur_vid)
    },
    changevid(vid) {
      this.cur_vid = vid
      this.visibledays = false
      this.$emit('changeVid', this.cur_vid)
    },

    closedays() {
      this.input = ''
      if (this.visibledays) {
        this.visibledays = false
      }
    },
    visibledaysfun() {
      this.visibledays = !this.visibledays
    },
    input_change() {
      if (this.input) {
        this.visibledays = true
      }
    },
  },
}
</script>
