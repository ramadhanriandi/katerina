<template>
  <section class="hero columns is-vcentered has-background-light" style="padding:5% 0">
    <div class="login column is-4-tablet has-background-white">
      <section class="section">
        <div class="has-text-centered">
          <a href="">
            <nuxt-link to="/">
              <img class="login-logo" src="~/assets/img/logo_r_resumme.png">
            </nuxt-link>
          </a>
        </div>

        <div class="field">
          <div class="control has-icons-right">
            <input class="input" type="text" placeholder="Username">
            <span class="icon is-small is-right">
              <img src="~/assets/img/icon-user.png">
            </span>
          </div>
        </div>

        <div class="field">
          <div class="control has-icons-right">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-right">
              <img src="~/assets/img/icon-key.png">
            </span>
          </div>
        </div>
        <div class="has-text-centered">
          <nuxt-link to="/">
            <a class="button is-vcentered is-primary">Masuk</a>
          </nuxt-link>
        </div>
        <div class="has-text-centered">
          Belum punya akun? <nuxt-link to="/signup"><a style="color: hsl(171, 100%, 41%);"> Daftar sekarang!</a></nuxt-link>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
      name: 'Header',
  }
</script>

<style scoped>
input[type="text"] {
    width: default;
    height: default;
    font-size: default;
    border-color: lightgrey;
    box-shadow: default;
    padding: default;
}
input[type="text"]::placeholder {
    color: lightgrey;
    font-size: 15px;
}
</style>