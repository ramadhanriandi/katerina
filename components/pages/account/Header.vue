<template>
  <section class="section timeline">
    <div class="container-fluid">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48" style="margin:0px">
                                        <img src="~/assets/img/boy.png" class="is-rounded" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="" style="margin:0">@irluths</p>
                                    <p class="" style="font-size: 14px;">Bandung, Jawa Barat</p>
                                </div>
                            </div>
                            <div class="columns is-mobile">
                                <div class="column has-text-centered">
                                    <p style="font-size:1rem; margin-bottom:2px;">1</p>
                                    <p style="font-size:0.75rem">POST</p>
                                </div>
                                <div class="column has-text-centered">
                                    <p style="font-size:1rem; margin-bottom:2px;">14</p>
                                    <p style="font-size:0.75rem">FOLLOWING</p>
                                </div>
                                <div class="column has-text-centered">
                                    <p style="font-size:1rem; margin-bottom:2px;">14</p>
                                    <p style="font-size:0.75rem">FOLLOWER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="media" style="padding:20px 20px 0 20px">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="~/assets/img/boy.png" class="is-rounded">
                            </figure>
                        </div>
                        <div class="media-content" style="margin-top:5px">
                            <p class="subtitle is-6" style="padding-top: 0">@irluths <br><span style="font-size:0.75rem">Bandung, Jawa Barat</span></p>
                        </div>
                    </div>
                    <div class="card-image">
                        <figure class="image is-2by1">
                            <img src="https://img-global.cpcdn.com/003_recipes/64e2470972ebc4fc/1200x630cq70/photo.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item" aria-label="like">
                                        <span class="icon">
                                            <img src="~/assets/img/icon-love.png">
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="like">
                                        <span class="icon">
                                          <img src="~/assets/img/icon-comment.png"><i class="fas fa-comment-dots" style="color:hsl(171, 100%, 41%)"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                            <p style="font-size:1rem"><b>@alimutaw12 </b>Pengen pesen jg dong bu</p>
                            <time datetime="2016-1-1" style="font-size:0.75rem">1 hari yang lalu</time>
                        </div>
                        <div class="field">
                            <div class="control has-icons-right">
                                <input class="input is-fullwidth" type="text" placeholder="Tambahkan komentar">
                                <span class="icon is-small is-right">
                                    <img src="~/assets/img/icon-send.png">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nuxt-link to="/"><button class="button is-primary is-pulled-right">Logout</button></nuxt-link>
    </div>
</section>
</template>

<script>
  export default {
      name: 'Header',
  }
</script>