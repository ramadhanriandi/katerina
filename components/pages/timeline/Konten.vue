<template>
    <section style="padding:0">
        <div class="container-fluid">
            <div class="tabs is-centered is-boxed">
                <ul>
                    <li class="is-active">
                        <a style="color: hsl(171, 100%, 41%)">
                            <span class="icon is-small"><img src="~/assets/img/icon-following.png"></span>
                            <span>Following</span>
                        </a>
                    </li>
                    <li>
                        <nuxt-link to="/timeline2">
                            <a href="">
                                <span class="icon is-small"><img src="~/assets/img/icon-near.png"></span>
                                <span>Near me</span>
                            </a>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="card">
                        <div class="media" style="padding:20px 20px 0 20px">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <nuxt-link to="/account2">
                                        <a href=""><img src="~/assets/img/girl.png" class="is-rounded"></a>
                                    </nuxt-link>
                                </figure>
                            </div>
                            <div class="media-content" style="margin-top:5px">
                                <nuxt-link to="/account2">
                                    <p class="subtitle is-6" style="padding-top: 0"><a style="color:rgb(80,80,80)">@bu_pipin_katering <br></a><span style="font-size:0.75rem">Bandung, Jawa Barat</span></p>
                                </nuxt-link>
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
                                                <img src="~/assets/img/icon-comment.png">
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
            <div class="columns">
                <div class="column">
                    <div class="card">
                        <div class="media" style="padding:20px 20px 0 20px">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <nuxt-link to="/account3">
                                        <a><img src="~/assets/img/man.png" class="is-rounded"></a>
                                    </nuxt-link>
                                </figure>
                            </div>
                            <div class="media-content" style="margin-top:5px">
                                <nuxt-link to="/account3">
                                    <p class="subtitle is-6" style="padding-top: 0"><a style="color:rgb(80,80,80)">@ahboy <br></a><span style="font-size:0.75rem">Palembang, Sumatera Selatan</span></p>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="https://mtc1-dydfxmh.netdna-ssl.com/wp-content/uploads/2018/08/DSCF5610-1300x867.jpg" alt="Placeholder image">
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
                                                <img src="~/assets/img/icon-comment.png">
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                <p style="font-size:1rem"><b>@alimutaw12 </b>Mantap gan</p>
                                <time datetime="2016-1-1" style="font-size:0.75rem">3 hari yang lalu</time>
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
        </div>
    </section>
</template>

<script>
  export default {
      name: 'Konten',
  }
</script>