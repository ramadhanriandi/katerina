<template>
    <section style="padding:0px">
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-48x48" style="margin-top:15px">
                        <img src="~/assets/img/girl.png" alt="Placeholder image" class="is-rounded">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle is-6"><b>@bu_pipin_katering</b> <br><span class="chat-message">Terakhir online 40 menit lalu</span></p>
                </div>
            </article>
            <hr>
            <div class="has-text-centered">

                <span class="tag" style="margin-bottom:20px">
                    3 Mar
                </span>
            </div>
            <div class="box chat-received" style="margin-bottom:5px">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p class="chat-message">Pesanan nasi kuning untuk hari ini sudah dikirim ya</p>
                        </div>
                    </div>
                </article>
            </div>
            <p class="chat-message">07.33</p>
            <div class="columns is-mobile">
                <div class="column"></div>
                <div class="column">

                    <div class="box chat-send" style="margin-bottom:5px">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p class="chat-message">Terima kasih bu</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="has-text-right">

                        <p class="chat-message"><i class="fas fa-check-double is-tosca"></i> 07.45</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="field">
                <div class="control has-icons-right">
                    <input class="input is-primary is-fullwidth" style="line-height:normal" type="text" placeholder="Tulis pesan">
                    <span class="icon is-small is-right">
                            <i class="fas fa-paper-plane" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
      name: 'Konten',
  }
</script>