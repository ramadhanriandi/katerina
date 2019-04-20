<template>
    <section style="padding:0px">
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-48x48" style="margin-top:15px">
                        <img src="~/assets/img/boy.png" alt="Placeholder image" class="is-rounded">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle is-6"><b>@pak_aldi</b> <br><span class="chat-message">Terakhir online 30 menit lalu</span></p>
                </div>
            </article>
            <hr>
            <div class="has-text-centered">

                <span class="tag" style="margin-bottom:20px">
                    14 Feb
                </span>
            </div>
            <div class="columns is-mobile">
                <div class="column"></div>
                <div class="column">

                    <div class="box chat-send" style="margin-bottom:5px">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p class="chat-message">Apakah nasi kuning ada ?</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="has-text-right">
                        <p class="chat-message"><i class="fas fa-check-double is-tosca"></i> 09.55</p>
                    </div>
                </div>
            </div>
            <div class="box chat-received" style="margin-bottom:5px">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p class="chat-message">Stok nasi kuningnya kosong</p>
                        </div>
                    </div>
                </article>
            </div>
            <p class="chat-message">11.33</p>
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