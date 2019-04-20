<template>
    <section class="box" style="padding:20px">
        <p class="subtitle is-6 search_detail"><b>Cari Lebih Detail</b></p>
        <input class="input" type="number" placeholder="Harga minimum" style="margin-bottom:10px">
        <input class="input" type="number" placeholder="Harga maksimum">
        <hr class="line">
        <p class="rate_title">Rating</p>
        <label class="checkbox">
            <input type="checkbox" name="rating">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
        </label><br>
        <label class="checkbox">
            <input type="checkbox" name="rating">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
        </label><br>
        <label class="checkbox">
            <input type="checkbox" name="rating">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
        </label><br>
        <label class="checkbox">
            <input type="checkbox" name="rating">
            <img src="~/assets/img/icon-star.png">
            <img src="~/assets/img/icon-star.png">
        </label><br>
        <label class="checkbox">
            <input type="checkbox" name="rating">
            <img src="~/assets/img/icon-star.png">
        </label><br>
    </section>
</template>

<script>
  export default {
      name: 'Cari',
  }
</script>