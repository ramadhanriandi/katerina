<template>
    <section style="padding:0px">
        <div class="box">
            <div class="columns is-mobile">
                <div class="column">
                    <label class="checkbox">
                        <input type="checkbox">
                        Pilih semua produk
                    </label>
                </div>
                <div class="column is-one-fifth">
                    <div class="has-text-right has-text-danger">
                        <p>Hapus</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="columns is-mobile">
                <div class="column is-one-quarter" style="width:1%; margin-top:20px">
                    <label class="checkbox">
                        <input type="checkbox">
                    </label>
                </div>
                <div class="column">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-48x48" style="margin-top:5px">
                                <img src="~/assets/img/boy.png" alt="Placeholder image" class="is-rounded">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="subtitle is-6"><b>Bagas Katering</b></p>
                        </div>
                    </article>
                </div>
            </div>
            <hr>       
            <div class="columns is-mobile">
                <div class="column">
                    <label class="checkbox">
                        <input type="checkbox">
                        <strong>Basreng Bumbu Rujak Cikur</strong>
                    </label>
                </div>
                <div class="column is-one-thirds has">
                    <div class="has-text-right has-text-danger">
                        <p class="is-right">Hapus</p>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column has-text-primary" style="padding-top:0px; margin-left:15px">
                    Rp 18.000,-
                </div>
                <div class="column is-one-thirds" style="padding-top:0px">
                    <div class="has-text-right">
                        <span class="icon is-big">
                            <i class="fas fa-minus-circle"></i>
                        </span>
                        <span class="is-right">1</span>
                        <span class="icon is-big">
                            <i class="fas fa-plus-circle"></i>
                        </span>
                    </div>
                </div>
            </div>  
            <hr>
            <div class="columns">
                <div class="column">
                    <p>Catatan penjualan</p>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="columns is-mobile">
                <div class="column is-one-quarter" style="width:1%; margin-top:20px">
                    <label class="checkbox">
                        <input type="checkbox">
                    </label>
                </div>
                <div class="column">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-48x48" style="margin-top:5px">
                                <img src="~/assets/img/girl.png" alt="Placeholder image" class="is-rounded">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="subtitle is-6"><b>Tasya Katering</b></p>
                        </div>
                    </article>
                </div>
            </div>
            <hr>       
            <div class="columns is-mobile">
                <div class="column">
                    <label class="checkbox">
                        <input type="checkbox">
                        <strong>Nasi Ayam Serundeng Komplit</strong>
                    </label>
                </div>
                <div class="column is-one-thirds has">
                    <div class="has-text-right has-text-danger">
                        <p class="is-right">Hapus</p>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column has-text-primary" style="padding-top:0px; margin-left:15px">
                    Rp 25.000,-
                </div>
                <div class="column is-one-thirds" style="padding-top:0px">
                    <div class="has-text-right">
                        <span class="icon is-big">
                            <i class="fas fa-minus-circle"></i>
                        </span>
                        <span class="is-right">1</span>
                        <span class="icon is-big">
                            <i class="fas fa-plus-circle"></i>
                        </span>
                    </div>
                </div>
            </div>  
            <hr>
            <div class="columns">
                <div class="column">
                    <p>Catatan penjualan</p>
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