<template>
  <section class="section paket" style="padding-top: 5%">
    <div class="container-fluid">
      <hr>
        <div class="columns is-multiline is-mobile">
          <div class="column">
            <p id="p-hasil-search"><b>Paket Acara</b></p>
          </div>
          <div class="column is-one-fifth">
            <div class="select is-primary">
              <select>
                <option>Relevansi</option>
                <option>Terbaru</option>
                <option>Termurah</option>
                <option>Termahal</option>
                <option>Terlaris</option>
                <option>View terbanyak</option>
                <option>Favorit paling banyak</option>
                <option>Favorit paling sedikit</option>
                <option>Favorit paling tinggi</option>
              </select>
            </div>
          </div>
        </div>
        <hr>
        <div class="columns is-multiline">
          <div class="column is-one-quarter">
            <Cari />
          </div>
          <div class="column">
            <Konten />
          </div>
        </div>
    </div>
  </section>
</template>

<script>
  import Cari from '../paket_langganan/Cari'
  import Konten from './Konten'
  export default {
      name: 'Header',
      components: { Cari, Konten }
  }
</script>