<template>
    <section class="box">
        <article class="media">
            <div class="media-left">
                <p>CHAT (3)</p>
            </div>
        </article>
        <div class="field" style="margin-top:20px">
            <div class="control has-icons-left">
                <input class="input is-primary is-fullwidth" type="text" placeholder="Cari chat">
                <span class="icon is-small is-left">
                    <img src="~/assets/img/icon-search.png">
                </span>
            </div>
        </div>
        <nuxt-link to="/chat">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48" style="margin-top:20px">
                        <img src="~/assets/img/small.png" alt="Placeholder image" class="is-rounded has-background-primary">
                    </figure>
                </div>
                <div class="media-content" style="margin-top:5px">
                    <div class="columns is-mobile">
                        <div class="column">
                            <p class="subtitle is-6">Katerina Info <br><span class="chatlist-chat">Promo terbaru dari kami</span> </p>
                        </div>
                        <div class="column is-one-quarter has-text-right">
                            <p class="subtitle is-6 is-tosca">14.55</p>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
        <nuxt-link to="/chat2">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48" style="margin-top:20px">
                        <img src="~/assets/img/girl.png" alt="Placeholder image" class="is-rounded">
                    </figure>
                </div>
                <div class="media-content" style="margin-top:5px">
                    <div class="columns is-mobile">
                        <div class="column">
                            <p class="subtitle is-6">@bu_pipin_katering<br><span class="chatlist-chat">Terima kasih Bu</span> </p>
                        </div>
                        <div class="column is-one-quarter has-text-right">
                            <p class="subtitle is-6 is-tosca">3 Mar</p>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48" style="margin-top:20px">
                    <img src="~/assets/img/boy.png" alt="Placeholder image" class="is-rounded">
                </figure>
            </div>
            <div class="media-content" style="margin-top:5px">
                <div class="columns is-mobile">
                    <div class="column">
                        <p class="subtitle is-6 is-tosca">@pak_aldi<br><span class="chatlist-chat">Stok nasi kuningnya kosong</span> </p>
                    </div>
                    <div class="column is-one-quarter has-text-right">
                        <p class="subtitle is-6 is-tosca">14 Feb</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
      name: 'History',
  }
</script>