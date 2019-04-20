<template>
    <section style="padding:0px">
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-48x48" style="margin-top:15px">
                        <img src="~/assets/img/small.png" alt="Placeholder image" class="is-rounded has-background-primary">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle is-6"><b>Katerina Info</b> <br><span class="chat-message">Terakhir online 2 menit lalu</span></p>
                </div>
            </article>
            <hr>
            <div class="has-text-centered">
                <span class="tag" style="margin-bottom:20px">
                    Hari ini
                </span>
            </div>
            <div class="box chat-received" style="margin-bottom:5px">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p class="chat-message">Cek Timeline</p>
                        </div>
                    </div>
                </article>
            </div>
            <div class="box chat-received" style="margin-bottom:5px">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p class="chat-message">Promo terbaru dari kami</p>
                        </div>
                    </div>
                </article>
            </div>
            <p class="chat-message">14.55</p>
        </div>
        <hr>
        <div class="field">
            <div class="control has-icons-right">
                <input class="input is-primary is-fullwidth" style="line-height:normal" type="text" placeholder="Tulis pesan">
                <span class="icon is-small is-right">
                    <img src="~/assets/img/icon-send.png">
                </span>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
      name: 'Konten',
  }
</script>