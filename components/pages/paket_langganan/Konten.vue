<template>
    <section style="padding-top:0px">
        <div class="columns is-multiline" id="app">
            <div class="column is-full"  style="padding:0">
                <div class="box">
                    <article class="media">
                            <div class="media-left">
                                <figure class="image is-48x48" style="margin-top:15px">
                                    <img src="~/assets/img/girl.png" alt="Placeholder image" class="is-rounded">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="subtitle is-6"><b>@bu_pipin_katering</b> <br><span class="chat-message">0.5 km</span></p>
                            </div>
                    </article>
                    <hr>
                    <p>
                    Dapatkan makanan selama 3 hari yaitu hari Senin, Selasa, dan Jumat dengan harga hanya Rp 15.000,-
                    </p>
                    <div class="columns is-multiline">
                        <div class="column is-full">
                            <div class="tabs is-boxed is-centered">
                                <ul>
                                    <li id="day1-tab" class="is-active">
                                        <a style="color: hsl(171, 100%, 41%)">
                                            <span>Day 1</span>
                                        </a>
                                    </li>
                                    <li id="day2-tab">
                                        <nuxt-link to="/paket_langganan2">
                                            <a>
                                                <span>Day 2</span>
                                            </a>
                                        </nuxt-link>
                                    </li>
                                    <li id="day3-tab">
                                        <nuxt-link to="/paket_langganan3">
                                            <a>
                                                <span>Day 3</span>
                                            </a>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            <!--/tabs is-centered-->
                            </div>
                        </div>
                    </div>
                    <div class="column is-full">
                        <div>
                           <Day1 />
                        </div>
                        <footer class="card-footer footer-btn-beli">
                            <a href="#" class="card-footer-item button is-primary btn-beli-ready">Berlangganan</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Day1 from './Day1'
    export default {
        name: 'Konten',
        components: { Day1 }
    }
</script>