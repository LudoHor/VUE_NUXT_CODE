<template>
  <section class="m-2 text-center">
    <div class="md:container md:mx-auto mini:px-1 md:px-3 max-w-7xl">
      <div class="flex flex-wrap">
        <div
          class="w-full xl:w-1/3/1 md:w-1/2/1 shadow-xl rounded-xl m-1"
          v-for="video in videos"
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

          <!-- Card -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    videos: [],
  },
  data() {
    return {}
  },
}
</script>
