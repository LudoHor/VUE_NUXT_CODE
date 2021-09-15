<template>
<div>
        <label for="week">Vyber týždeň: </label>
        <select id="week" name="week">
        <option value="volvo">1</option>
        <option value="saab">2</option>
        <option value="fiat">3</option>
        <option value="audi">4</option>
        <option value="volvo">5</option>
        <option value="saab">6</option>
        <option value="fiat">7</option>
        <option value="audi">8</option>
  </select>
    
    <nav class="flex inline-box m-4 justify-center items-center">
        <Nuxt-link to="/pondelok"> <div class="m-4">Pondelok</div> </Nuxt-link>
        <Nuxt-link to="/utorok"> <div class="m-4">Utorok</div> </Nuxt-link>
        <Nuxt-link to="/utorok"> <div class="m-4">Streda</div> </Nuxt-link>
        <Nuxt-link to="/utorok"> <div class="m-4">Štvrtok</div> </Nuxt-link>
        <Nuxt-link to="/utorok"> <div class="m-4">Piatok</div> </Nuxt-link>
        <Nuxt-link to="/utorok"> <div class="m-4">Sobota</div> </Nuxt-link>
        <Nuxt-link to="/utorok"> <div class="m-4">Nedeľa</div> </Nuxt-link>
    </nav>
    </div>
</template>

<script>

export default {

}
</script>
