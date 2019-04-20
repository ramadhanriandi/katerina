<template>
    <nav class="navbar is-fixed-top has-background-primary" role="navigation" aria-label="main navigation">
        <div class="container is-mobile">
            <div class="navbar-brand is-hidden-mobile is-vcentered" style="background-color:rgba(0, 0, 0, 0);">
                <a class="navbar-item" href="#">
                    <nuxt-link to="/">
                        <img src="~/assets/img/full.png">
                    </nuxt-link>
                </a>
            </div>
            <div class="navbar-brand is-hidden-tablet" style="background-color:rgba(0, 0, 0, 0);">
                <a class="navbar-item" href="#">
                    <nuxt-link to="/">
                        <img src="~/assets/img/small.png">
                    </nuxt-link>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item is-hidden-mobile">
                        <div class="field">
                            <div class="control has-icons-right">
                                <input class="input" type="text" placeholder="Cari produk, layanan, akun">
                                <span class="icon is-small is-right">
                                    <img src="~assets/img/icon-search.png">
                                </span>
                            </div>
                        </div>
                    </div>
                    <a class="navbar-item is-hidden-tablet">
                        <span class="icon">
                            <img src="~assets/img/icon-search.png">
                        </span>
                    </a>
                    <a class="navbar-item">
                        <nuxt-link to="/timeline">
                            <span class="icon">
                                <img src="~assets/img/icon-timeline.png">
                            </span>
                        </nuxt-link>
                    </a>
                    <a class="navbar-item">
                        <nuxt-link to="/chat">
                            <span class="icon">
                                <img src="~assets/img/icon-chat.png">
                            </span>
                        </nuxt-link>
                    </a>
                    <a class="navbar-item">
                        <nuxt-link to="/cart">
                            <span class="icon">
                                <img src="~assets/img/icon-cart.png">
                            </span>
                        </nuxt-link>
                    </a>
                    <a class="navbar-item">
                        <nuxt-link to="/account">
                            <span class="icon">
                                <img src="~assets/img/icon-account.png">
                            </span>
                        </nuxt-link>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
      return {
        'activeBurger': false
      }
    }
  }
</script>
