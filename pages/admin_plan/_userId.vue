<template>
  <div v-if="loggedInUser" class="z-0">
    <!-- component -->
    <!-- https://dribbble.com/shots/14959823-Dashboard-UI-Elements -->

    <section class="m-2 text-gray-600 text-center">
      <!-- component -->

      <div class="md:container md:mx-auto mini:px-1 md:px-3 max-w-7x1">
        <div class="flex flex-wrap w-full p-1 mini:p-2">
          <div class="w-full">
            <h1
              class="
                sm:text-4xl
                text-xl
                font-bold
                title-font
                mb-2
                text-gold-100
              "
            >
              {{ user.username }}
            </h1>
            <div class="grid justify-items-center mb-1">
              <div class="mini:flex">
                <div class="relative mx-1" v-click-outside="closedays">
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
                <div class="relative mx-1" v-click-outside="closeweeks">
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

        <button class="py-5 px-3 text-gold-100" @click="add()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clip-rule="evenodd"
            />
          </svg>
          Nov?? Video
        </button>
        <div class="mini:flex justify-center">
          <div class="flex flex-col mb-6 mx-1">
            <label class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
              >Za??iatok pl??nu</label
            >
            <div class="relative">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  absolute
                  left-0
                  top-0
                  h-full
                  w-10
                  text-gold-500
                "
              >
                <span>
                  <i class="fas fa-lock text-gold-500"></i>
                </span>
              </div>

              <input
                name="start_date"
                @change="change_start_date()"
                placeholder="Zaciatok planu"
                v-model="zaciatok_planu"
                class="
                  w-40
                  bg-white
                  border border-gold-100
                  rounded-md
                  shadow-sm
                  cursor-default
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gold-500
                  focus:border-gold-500
                  sm:text-sm
                  py-2
                "
                type="date"
              />
            </div>
          </div>

          <div class="flex flex-col mb-6 mx-1">
            <label class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
              >Koniec pl??nu</label
            >
            <div class="relative">
              <div
                class="
                  inline-flex
                  items-center
                  justify-center
                  absolute
                  left-0
                  top-0
                  h-full
                  w-10
                  text-gold-500
                "
              >
                <span>
                  <i class="fas fa-lock text-gold-500"></i>
                </span>
              </div>

              <input
                name="end_date"
                @change="change_end_date()"
                v-model="koniec_planu"
                placeholder="Zaciatok planu"
                class="
                  w-40
                  bg-white
                  border border-gold-100
                  rounded-md
                  shadow-sm
                  cursor-default
                  focus:outline-none
                  focus:ring-1
                  focus:ring-gold-500
                  focus:border-gold-500
                  sm:text-sm
                  py-2
                "
                type="date"
              />
            </div>
          </div>
        </div>
        <div class="mb-6">
          <label class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
            >My??lienka d??a:</label
          >
          <div class="relative">
            <div
              class="
                inline-flex
                items-center
                justify-center
                absolute
                left-0
                top-0
                h-full
                w-10
                text-gold-500
              "
            >
              <span>
                <i class="fas fa-lock text-gold-500"></i>
              </span>
            </div>

            <textarea
              v-model="myslienka_dna"
              class="
                text-sm
                placeholder-gold-500
                pl-4
                pr-4
                rounded-2xl
                border border-gold-100
                py-2
                focus:outline-none focus:border-gold-500
                w-full
                xl:w-1/3/1
                md:w-1/2/1
              "
              placeholder=""
            />
          </div>
          <button
            class="
              bg-gold-50
              hover:bg-gold-100
              text-gold-500
              font-bold
              uppercase
              text-xs
              px-4
              py-2
              rounded
              shadow
              hover:shadow-md
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
            type="button"
            @click="save_idea()"
          >
            Ulo??i?? my??lienku d??a
          </button>
        </div>


        <div class="mb-6">
          <label class="mb-1 text-xs sm:text-sm tracking-wide text-gold-500"
            >Koment??r d??a :</label
          >
          <div class="relative">
            <div
              class="
                inline-flex
                items-center
                justify-center
                absolute
                left-0
                top-0
                h-full
                w-10
                text-gold-500
              "
            >
              <span>
                <i class="fas fa-lock text-gold-500"></i>
              </span>
            </div>

            <textarea
              v-model="comment"
              class="
                text-sm
                placeholder-gold-500
                pl-4
                pr-4
                rounded-2xl
                border border-gold-100
                py-2
                focus:outline-none focus:border-gold-500
                w-full
                xl:w-1/3/1
                md:w-1/2/1
              "
              placeholder=""
            />
          </div>
          <button
            class="
              bg-gold-50
              hover:bg-gold-100
              text-gold-500
              font-bold
              uppercase
              text-xs
              px-4
              py-2
              rounded
              shadow
              hover:shadow-md
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
            type="button"
            @click="save_comment()"
          >
            Ulo??i?? koment??r d??a
          </button>
        </div>

        <div class="flex flex-wrap" v-if="listOfVideos">
          <div
            class="w-full xl:w-1/3/1 md:w-1/2/1 shadow-xl rounded-xl m-1"
            v-for="video in listOfVideos"
            :key="video.id"
          >
            <!-- Card -->
            <!-- Card -->
            <div class="bg-white md:p-3 rounded-lg">
              <LazyYoutube
                class="object-cover object-center mb-2 z-0"
                :src="`${video.personalizovane_videa.link}`"
              />

              <div class="text-center">
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
                <h2 class="text-lg text-gold-500 font-medium title-font mb-2">
                  {{ video.personalizovane_videa.Nazov_videa }}
                </h2>

                <div class="text-gold-100 text-left mb-2">
                  <div v-if="video.Vseobecny_popis">
                    <p
                      class="ml-7"
                      v-for="(
                        line, i
                      ) in video.personalizovane_videa.Vseobecny_popis.split(
                        /\r?\n/
                      )"
                      :key="i"
                    >
                      {{ line }}
                    </p>
                  </div>
                </div>

                <div class="text-gold-100 text-left mb-2">
                  <div v-if="video.personalizovany_popis">
                    <p
                      class="ml-7"
                      v-for="(line, i) in video.personalizovany_popis.split(
                        /\r?\n/
                      )"
                      :key="i"
                    >
                      {{ line }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="
                bg-gold-50
                hover:bg-gold-100
                text-gold-500
                font-bold
                uppercase
                text-xs
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
              @click="update(video)"
            >
              Upravi??
            </button>
            <button
              class="
                bg-gold-50
                hover:bg-gold-100
                text-gold-500
                font-bold
                uppercase
                text-xs
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
              @click="Delete(video)"
            >
              Vymaza??
            </button>

            <!-- Card -->
          </div>
        </div>
      </div>
    </section>

    <PlanModal
      :video="cur_video"
      :day="den"
      :week="tyzden"
      :user="user"
      v-if="visibleModal"
      @refresh="refresh()"
    />
  </div>
</template>

<script>
import SelectSearch from '~/components/SelectSearch'
import PlanModal from '~/components/PlanModal'

export default {
  middleware: 'admin',
  components: { SelectSearch, PlanModal },
  data() {
    return {
      comment:'',
      myslienka_dna: '',
      zaciatok_planu: '',
      koniec_planu: '',
      userId: this.$route.params.userId,
      den: 'pondelok',
      den_spisovne: 'pondelok',
      tyzden: '1',
      tyzden_spisovne: 'T????de?? 1',
      visibledays: false,
      visibleweeks: false,
      days: {
        pondelok: 'pondelok',
        utorok: 'utorok',
        streda: 'streda',
        ??tvrtok: 'stvrtok',
        piatok: 'piatok',
        sobota: 'sobota',
        nede??a: 'nedela',
      },
      cur_video: {},

      weeks: {
        1: 'T????de?? 1',
        2: 'T????de?? 2',
        3: 'T????de?? 3',
        4: 'T????de?? 4',
        5: 'T????de?? 5',
        6: 'T????de?? 6',
        7: 'T????de?? 7',
        8: 'T????de?? 8',
      },
      videa: '',
      user: {},
    }
  },
  async created() {
    this.user = await this.$strapi.findOne('users', this.userId)
    this.videa = this.user.Denny_plan
    this.zaciatok_planu = this.user.Start_date
    this.koniec_planu = this.user.End_date
    
  },

  computed: {
    visibleModal() {
      return this.$store.getters.visibleModalPlan
    },
    loggedInUser() {
      return this.$strapi.user
    },
    listOfVideos() {
      if (!this.videa) {
        return null
      }
      const filteredVid = this.videa.filter(
        (el) => el.Den == this.den && el.Tyzden == this.tyzden
      )
      this.myslienka_dna = filteredVid[0]?.Myslienka_dna
      this.comment = filteredVid[0]?.poznamka_den
      if (filteredVid.length != 0) {
        return filteredVid[0].Video
      }
      return null
    },
  },
  methods: {
    async Delete(vid) {
      let updated_videa = [...this.videa]

      let curent_videa = updated_videa.filter(
        (el) => el.Den == this.den && el.Tyzden == this.tyzden
      )[0].Video
      curent_videa = curent_videa.filter((v) => v.id !== vid.id)

      updated_videa.filter(
        (el) => el.Den == this.den && el.Tyzden == this.tyzden
      )[0].Video = curent_videa

      await this.$strapi.update('users', this.userId, {
        Denny_plan: updated_videa,
      })
      await this.refresh()
    },
    async refresh() {
      this.user = await this.$strapi.findOne('users', this.userId)
      this.videa = this.user.Denny_plan
    },
    add() {
      this.cur_video = ''
      this.$store.commit('setvisibleModalPlan', true)
    },

    update(video) {
      this.cur_video = video
      this.$store.commit('setvisibleModalPlan', true)
    },
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

    async change_start_date() {
      try {
        await this.$strapi.update('users', this.userId, {
          Start_date: this.zaciatok_planu,
        })
      } catch {
        console.log('error')
      }
    },

    async change_end_date() {
      try {
        await this.$strapi.update('users', this.userId, {
          End_date: this.koniec_planu,
        })
      } catch {
        console.log('error')
      }
    },

    async save_idea() {
      try {
        // await this.$strapi.update('users', this.userId, {
        //   End_date: this.koniec_planu,
        // })
        let updated_videa = [...this.user.Denny_plan]

        if (
          !updated_videa.filter(
            (v) => v.Den === this.den && v.Tyzden == this.tyzden
          )[0]
        ) {
          updated_videa.push({
            Den: this.den,
            Tyzden: this.tyzden,
            Video: [],
            Myslienka_dna: this.myslienka_dna,
          })
        }

        updated_videa.filter(
          (v) => v.Den === this.den && v.Tyzden == this.tyzden
        )[0].Myslienka_dna = this.myslienka_dna

        this.videa = (
          await this.$strapi.update('users', this.user.id, {
            Denny_plan: updated_videa,
          })
        ).Denny_plan
      } catch {}
    },
     async save_comment() {
      try {
        // await this.$strapi.update('users', this.userId, {
        //   End_date: this.koniec_planu,
        // })
        let updated_videa = [...this.user.Denny_plan]

        if (
          !updated_videa.filter(
            (v) => v.Den === this.den && v.Tyzden == this.tyzden
          )[0]
        ) {
          updated_videa.push({
            Den: this.den,
            Tyzden: this.tyzden,
            Video: [],
            poznamka_den: this.comment,
          })
        }

        updated_videa.filter(
          (v) => v.Den === this.den && v.Tyzden == this.tyzden
        )[0].poznamka_den = this.comment

        this.videa = (
          await this.$strapi.update('users', this.user.id, {
            Denny_plan: updated_videa,
          })
        ).Denny_plan
      } catch {}
    },
  },
}
</script>
