<template>
  <div class="z-0">
    <!-- component -->
    <!-- https://dribbble.com/shots/14959823-Dashboard-UI-Elements -->

    <section class="m-2 text-gray-600 text-center">
      <!-- component -->

      <div class="container px-5 mx-auto max-w-7x1">
        <div class="flex flex-wrap w-full mb-4 p-4">
          <div class="w-full mb-6 lg:mb-0">
            <h1
              class="
                sm:text-4xl
                text-5xl
                font-medium font-bold
                title-font
                mb-2
                text-gold-100
              "
            >
              Môj Plán
            </h1>
            <div class="grid justify-items-center">
              <div class="flex absolute">
                <div class="mt-1 relative" v-click-outside="closedays">
                  <button
                    @click="visibledays = !visibledays"
                    ref="ludo"
                    type="button"
                    class="
                      w-40
                      bg-white
                      border border-gold-100
                      rounded-md
                      shadow-sm
                      pl-3
                      pr-10
                      py-2
                      text-left
                      cursor-default
                      focus:outline-none
                      focus:ring-1
                      focus:ring-gold-500
                      focus:border-gold-500
                      sm:text-sm
                    "
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                  >
                    <span class="flex items-center">
                      <span class="ml-3 block truncate text-gold-100">
                        {{ den_spisovne }}
                      </span>
                    </span>
                    <span
                      class="
                        ml-3
                        absolute
                        inset-y-0
                        right-0
                        flex
                        items-center
                        pr-2
                        pointer-events-none
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
                  </button>

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
                        v-for="(day, day2) in days"
                        :key="day"
                        @click="changeday(day, day2)"
                      >
                        <div class="flex items-center">
                          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                          <span
                            class="
                              font-normal
                              ml-3
                              block
                              truncate
                              text-gold-100
                            "
                          >
                            {{ day2 }}
                          </span>
                        </div>

                        <!--
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        -->
                        <span
                          v-if="day === den"
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
                <div class="mt-1 relative" v-click-outside="closeweeks">
                  <button
                    @click="visibleweeks = !visibleweeks"
                    ref="ludo"
                    type="button"
                    class="
                      w-40
                      bg-white
                      border border-gold-100
                      rounded-md
                      shadow-sm
                      pl-3
                      pr-10
                      py-2
                      text-left
                      cursor-default
                      focus:outline-none
                      focus:ring-1
                      focus:ring-gold-500
                      focus:border-gold-500
                      sm:text-sm
                    "
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                  >
                    <span class="flex items-center">
                      <span class="ml-3 block truncate text-gold-100">
                        {{ tyzden_spisovne }}
                      </span>
                    </span>
                    <span
                      class="
                        ml-3
                        absolute
                        inset-y-0
                        right-0
                        flex
                        items-center
                        pr-2
                        pointer-events-none
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
                  </button>

                  <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->

                  <transition
                    enter-class="transform -translate-y-6 opacity-0"
                    enter-active-class="transition duration-500 ease-in-out"
                    leave-to-class="transform -translate-y-6 opacity-0 "
                    leave-active-class="transition duration-500 ease-in-out"
                  >
                    <ul
                      v-if="visibleweeks"
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
                        v-for="(week2, week) in weeks"
                        :key="week"
                        @click="changeweek(week, week2)"
                      >
                        <div class="flex items-center">
                          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                          <span
                            class="
                              font-normal
                              ml-3
                              block
                              truncate
                              text-gold-100
                            "
                          >
                            {{ week2 }}
                          </span>
                        </div>

                        <!--
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        -->
                        <span
                          v-if="week === tyzden"
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
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4" v-if="listOfVideos">
          <div
            class="w-full xl:w-1/3 md:w-1/2 p-4"
            v-for="video in listOfVideos"
            :key="video.id"
          >
            <div class="bg-white p-6 rounded-lg">
              <LazyYoutube
                class="object-cover object-center mb-6 z-0"
                :src="`${video.personalizovane_videa.link}`"
              />

              <transition
                appear
                appear-class="transform scale-50"
                appear-to-class="opacity-100 "
                appear-active-class="transition duration-1000 ease-in-out"
              >
                <h3
                  class="
                    tracking-widest
                    text-gold-100 text-xs
                    font-medium
                    title-font
                  "
                >
                  {{ video.personalizovane_videa.Typ }}
                </h3>
              </transition>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                {{ video.personalizovane_videa.Nazov_videa }}
              </h2>

              <div class="leading-relaxed text-base text-left">
                <p>
                  {{ video.personalizovane_videa.Vseobecny_popis }}
                </p>
                <div v-html="$md.render(video.Personalizovany_popis)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VideoPlayer from 'nuxt-video-player'
import NavVideo from '~/components/NavBarVideo'

export default {
  middleware: 'auth',
  components: {
    VideoPlayer,
    NavVideo,
  },
  data() {
    return {
      den: 'pondelok',
      den_spisovne: 'pondelok',
      tyzden: '1',
      tyzden_spisovne: 'Týždeň 1',
      visibledays: false,
      visibleweeks: false,
      days: {
        pondelok: 'pondelok',
        utorok: 'utorok',
        streda: 'streda',
        štvrtok: 'stvrtok',
        piatok: 'piatok',
        sobota: 'sobota',
        nedeľa: 'nedela',
      },
      weeks: {
        1: 'Týždeň 1',
        2: 'Týždeň 2',
        3: 'Týždeň 3',
        4: 'Týždeň 4',
        5: 'Týždeň 5',
        6: 'Týždeň 6',
        7: 'Týždeň 7',
        8: 'Týždeň 8',
      },
    }
  },

  computed: {
    ...mapGetters(['loggedInUser']),

    listOfVideos() {
      const videa = this.$store.state.auth.user.Denny_plan
      const filteredVid = videa.filter(
        (el) => el.Den == this.den && el.Tyzden == this.tyzden
      )
      if (filteredVid.length != 0) {
        return filteredVid[0].Video
      }
      return null
    },
  },
  methods: {
    changeday(day, day2) {
      this.den = day
      this.den_spisovne = day2
      this.visibledays = false
    },
    changeweek(week, week2) {
      this.tyzden = week
      this.tyzden_spisovne = week2
      this.visibleweeks = false
    },

    closedays() {
      if (this.visibledays) {
        this.visibledays = false
      }
    },
    closeweeks() {
      if (this.visibleweeks) {
        this.visibleweeks = false
      }
    },
  },
}
</script>
