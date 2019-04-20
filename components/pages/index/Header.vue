<template>
  <section class="hero">
    <Navbar2 />
    <div class="hero-body">
      <div class="container-fluid">
        <div class="columns">
            <div class="column is-half-tablet is-full-mobile">
                <h1 class="title hero-title" data-aos="fade-right">Ga Khawatir<br>Ga Kenyang</h1>
                <p class="subtitle" data-aos="fade-right">Kini ga perlu pusing-pusing mikirin harus makan apa tiap harinya</p>
            </div>
            <div class="column isometric is-half-tablet is-full-mobile" style="z-index: 0" data-aos="fade-down">
                <img src="~/assets/img/Isometric.png">
            </div>
        </div>
        <div class="columns" id="packet">
            <div class="column is-one-third-tablet is-full-mobile" style="padding-bottom:0px;" data-aos="fade-left">
                <a style="color: rgb(80, 80, 80)">
                  <nuxt-link to="/paket_langganan">
                    <div class="box is-one-third-tablet">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="~/assets/img/langganan.png" alt="Image">
                            </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                    <strong>Paket Langganan</strong><br>
                                    <small>Ngga perlu bingung nyiapin makanan tiap hari</small>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                  </nuxt-link>
                </a>
            </div>
            <div class="column is-one-third-tablet is-full-mobile" style="padding-bottom:0px;" data-aos="fade-left">
                <a style="color: rgb(80, 80, 80)">
                  <nuxt-link to="/paket_acara">
                    <div class="box is-one-third-tablet">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="~/assets/img/acara.png" alt="Image">
                            </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                    <strong>Paket Acara</strong><br>
                                    <small>Buat acaramu makin lancar dengan makanan favorit</small>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                  </nuxt-link>
                </a>
            </div>
            <div class="column is-one-third-tablet is-full-mobile" style="padding-bottom:0px;" data-aos="fade-left">
                <a style="color: rgb(80, 80, 80)">
                  <nuxt-link to="/paket_siap_sedia">
                    <div class="box is-one-third-tablet">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="~/assets/img/ready.png" alt="Image">
                            </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                    <strong>Paket Siap Sedia</strong><br>
                                    <small>Perut kosong langsung bisa ditangani tanpa repot-repot</small>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                  </nuxt-link>
                </a>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar2 from './Navbar2'
  export default {
      name: 'Header',
      components: { Navbar2 }
  }
</script>

<style scoped>
  .hero {
    width: 100%;
    height: 100%;
    background-image: url(~assets/img/Background.png);
    background-size: cover;
  }
</style>