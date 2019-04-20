<template>
    <div class="section paket" style="padding-top: 5%">
        <div class="container-fluid">
            <div>
                <hr>
                <div class="columns is-multiline is-mobile">
                    <div class="column">
                        <p id="p-hasil-search"><b>Paket Langganan</b></p>
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
                        <div class="box" style="padding:20px">
                            <p class="subtitle is-6 search_detail"><b>Cari Lebih Detail</b></p>
                            <input class="input" type="number" placeholder="Harga minimum" style="margin-bottom:10px">
                            <input class="input" type="number" placeholder="Harga maksimum">
                            <hr class="line">
                            <p class="rate_title">Rating</p>
                            <div class="item">
                                <label class="checkbox">
                                    <input type="checkbox" name="rating">
                                    <img src="~/assets/img/icon-start.png">
                                </label>
                            </div>
                            <label class="checkbox">
                                <input type="checkbox" name="rating">
                                <i class="fa fa-star is-golden" aria-hidden="true"></i><i class="fa fa-star is-golden" aria-hidden="true"></i><i class="fa fa-star is-golden" aria-hidden="true"></i><i class="fa fa-star is-golden" aria-hidden="true"></i>
                            </label><br>
                            <label class="checkbox">
                                <input type="checkbox" name="rating">
                                <i class="fa fa-star is-golden" aria-hidden="true"></i><i class="fa fa-star is-golden" aria-hidden="true"></i><i class="fa fa-star is-golden" aria-hidden="true"></i>
                            </label><br>
                            <label class="checkbox">
                                <input type="checkbox" name="rating">
                                <i class="fa fa-star is-golden" aria-hidden="true"></i><i class="fa fa-star is-golden" aria-hidden="true"></i>
                            </label><br>
                            <label class="checkbox">
                                <input type="checkbox" name="rating">
                                <i class="fa fa-star is-golden" aria-hidden="true"></i>
                            </label><br>
                        </div>
                    </div>

                    <div class="column">
                        <div class="columns is-multiline">
                            <div class="column is-full">
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
                                            <div class="tabs is-centered">
                                                <ul>
                                                    <li id="day1-tab" class="is-active">
                                                        <a onClick="switchToDay1()">
                                                            <span>Day 1</span>
                                                        </a>
                                                    </li>
                                                    <li id="day2-tab">
                                                        <a onClick="switchToDay2()">
                                                            <span>Day 2</span>
                                                        </a>
                                                    </li>
                                                    <li id="day3-tab">
                                                        <a onClick="switchToDay3()">
                                                            <span>Day 3</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            <!--/tabs is-centered-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="column is-full">
                                        <div id="day1-tab-content">
                                            <div class="columns is-mobile is-multiline">
                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Pagi</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://streetfood.co.id/wp-content/uploads/2014/08/NasiAyamSerundeng.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Serundeng Komplit</b></p>
                                                                    <p class="p-penjual-ready">Nasi Putih + Ayam Goreng + Serundeng Kelapa + Tahu + Tempe + Sambal Pedas</p>
                                                                    <p class="p-harga-ready">Rp 25.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>

                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Siang</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://streetfood.co.id/wp-content/uploads/2014/08/NasiAyamSerundeng.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Serundeng Komplit</b></p>
                                                                    <p class="p-penjual-ready">Nasi Putih + Ayam Goreng + Serundeng Kelapa + Tahu + Tempe + Sambal Pedas</p>
                                                                    <p class="p-harga-ready">Rp 25.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
            									    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Malam</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://4.bp.blogspot.com/-eykMsDwC0jg/U8uN3b-e7SI/AAAAAAAAqm8/cRA-WygFM2A/s1600/ayam+goreng+kremes.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Goreng Kremes Komplit</b></p>
                                                                    <p class="p-penjual-ready">Paket nasi panas ayam goreng toping keremes sambel hijau</p>
                                                                    <p class="p-harga-ready">Rp 22.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                            <img src="http://3.bp.blogspot.com/--VX0QiO_l5A/VXXVEJrFyfI/AAAAAAAAAVk/fC6xSbH8IKM/s640/tahu-crispy-1.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                            <div class="media-content">
                                                                <p class="food_title"><b>Gehu Pedas Krispy</b></p>
                                                                <p class="p-penjual-ready">Gehu isi toge kol iris + pedas digoreng (isi 10pcs)</p>
                                                                <p class="p-harga-ready">Rp 15.000</p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                            <img src="https://selerasa.com/wp-content/uploads/2018/10/tempe-mendoan-sambal-kecap.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Tempe Mendoan</b></p>
                                                                    <p class="p-penjual-ready">Tempe mendoan isi 10 pcs sambal goang atau sambal kecap cabe</p>
                                                                    <p class="p-harga-ready">Rp 15.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="is-hidden" id="day2-tab-content">
                                            <div class="columns is-mobile is-multiline">
                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Pagi</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://streetfood.co.id/wp-content/uploads/2014/08/NasiAyamSerundeng.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Serundeng Komplit</b></p>
                                                                    <p class="p-penjual-ready">Nasi Putih + Ayam Goreng + Serundeng Kelapa + Tahu + Tempe + Sambal Pedas</p>
                                                                    <p class="p-harga-ready">Rp 25.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>

                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Siang</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://streetfood.co.id/wp-content/uploads/2014/08/NasiAyamSerundeng.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Serundeng Komplit</b></p>
                                                                    <p class="p-penjual-ready">Nasi Putih + Ayam Goreng + Serundeng Kelapa + Tahu + Tempe + Sambal Pedas</p>
                                                                    <p class="p-harga-ready">Rp 25.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
            									    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Malam</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://4.bp.blogspot.com/-eykMsDwC0jg/U8uN3b-e7SI/AAAAAAAAqm8/cRA-WygFM2A/s1600/ayam+goreng+kremes.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Goreng Kremes Komplit</b></p>
                                                                    <p class="p-penjual-ready">Paket nasi panas ayam goreng toping keremes sambel hijau</p>
                                                                    <p class="p-harga-ready">Rp 22.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                            <img src="http://3.bp.blogspot.com/--VX0QiO_l5A/VXXVEJrFyfI/AAAAAAAAAVk/fC6xSbH8IKM/s640/tahu-crispy-1.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                            <div class="media-content">
                                                                <p class="food_title"><b>Gehu Pedas Krispy</b></p>
                                                                <p class="p-penjual-ready">Gehu isi toge kol iris + pedas digoreng (isi 10pcs)</p>
                                                                <p class="p-harga-ready">Rp 15.000</p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                            <img src="https://selerasa.com/wp-content/uploads/2018/10/tempe-mendoan-sambal-kecap.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Tempe Mendoan</b></p>
                                                                    <p class="p-penjual-ready">Tempe mendoan isi 10 pcs sambal goang atau sambal kecap cabe</p>
                                                                    <p class="p-harga-ready">Rp 15.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="is-hidden" id="day3-tab-content">
                                            <div class="columns is-mobile is-multiline">
                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Pagi</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://streetfood.co.id/wp-content/uploads/2014/08/NasiAyamSerundeng.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Serundeng Komplit</b></p>
                                                                    <p class="p-penjual-ready">Nasi Putih + Ayam Goreng + Serundeng Kelapa + Tahu + Tempe + Sambal Pedas</p>
                                                                    <p class="p-harga-ready">Rp 25.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>

                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Siang</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://streetfood.co.id/wp-content/uploads/2014/08/NasiAyamSerundeng.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Serundeng Komplit</b></p>
                                                                    <p class="p-penjual-ready">Nasi Putih + Ayam Goreng + Serundeng Kelapa + Tahu + Tempe + Sambal Pedas</p>
                                                                    <p class="p-harga-ready">Rp 25.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
            									    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="has-text-centered">
                                                        <div class="is-centered">
                                                            <p class="food-time"><b>Malam</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                                <img src="http://4.bp.blogspot.com/-eykMsDwC0jg/U8uN3b-e7SI/AAAAAAAAqm8/cRA-WygFM2A/s1600/ayam+goreng+kremes.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Nasi Ayam Goreng Kremes Komplit</b></p>
                                                                    <p class="p-penjual-ready">Paket nasi panas ayam goreng toping keremes sambel hijau</p>
                                                                    <p class="p-harga-ready">Rp 22.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                            <img src="http://3.bp.blogspot.com/--VX0QiO_l5A/VXXVEJrFyfI/AAAAAAAAAVk/fC6xSbH8IKM/s640/tahu-crispy-1.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                            <div class="media-content">
                                                                <p class="food_title"><b>Gehu Pedas Krispy</b></p>
                                                                <p class="p-penjual-ready">Gehu isi toge kol iris + pedas digoreng (isi 10pcs)</p>
                                                                <p class="p-harga-ready">Rp 15.000</p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                                <div class="column food_card is-one-third">
                                                    <div class="card card-ready">
                                                        <div class="card-image">
                                                            <figure class="image is-4by3">
                                                            <img src="https://selerasa.com/wp-content/uploads/2018/10/tempe-mendoan-sambal-kecap.jpg" alt="Placeholder image" class="img-ready">
                                                            </figure>
                                                        </div>
                                                        <div class="card-content card-content-ready">
                                                            <div class="media">
                                                                <div class="media-content">
                                                                    <p class="food_title"><b>Tempe Mendoan</b></p>
                                                                    <p class="p-penjual-ready">Tempe mendoan isi 10 pcs sambal goang atau sambal kecap cabe</p>
                                                                    <p class="p-harga-ready">Rp 15.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <footer class="card-footer button is-primary btn-beli-ready">
                                                            <a href="#" style="color: white">Beli</a>
                                                        </footer>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        <footer class="card-footer footer-btn-beli">
                                            <a href="#" class="card-footer-item button is-primary btn-beli-ready">Berlangganan</a>
                                        </footer>
                                    </div>
    							</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      name: 'Paket',
  }
</script>