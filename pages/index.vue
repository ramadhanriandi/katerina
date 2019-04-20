<template>
  <section class="">
    <div>
      <Header />
      <Feature />
      <Footer /> 
    </div>
  </section>
</template>

<script>
import Header from '@/components/pages/index/Header'
import Feature from '@/components/pages/index/Feature'
import Footer from '@/components/shared/Footer'

export default {
  components: {
    Header,
    Feature,
    Footer,
  }
}
</script>

<style unscoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');
body {
    font-family: 'Quicksand', sans-serif;
    color: rgb(80, 80, 80);
    letter-spacing: 0.5px;
    font-weight: 400;
}
.hero {
    padding: 3% 10% 2% 10%;
    position: relative;
}
.hero-title {
    color: hsl(171, 100%, 41%);
    padding-top: 10vh;
}
.category {
    padding: 2% 10% 4% 10%;
}
.paket {
    padding: 2% 10% 4% 10%;
}
.timeline {
    padding: 9% 25% 4% 25%;
}
.card {
    border-radius: 20px;
}
.price {
    margin-top: 7px;
    color: hsl(171, 100%, 41%);
}
.part_category {
    padding: 2% 0 0% 0;
}
#packet {
    z-index: 1;
    position: absolute;
    padding-right: 10%;
    top: 70vh;
}
#emphasize {
    font-size: 36px;
    color: hsl(171, 100%, 41%);
}
.title {
    font-size: 64px;
    line-height: 1.25;
}
.subtitle {
    padding-top: 15px;
    font-size: 24px;
    line-height: 1.5;
}
input[type="text"] {
    width: 500px;
    height: 40px;
    font-size: 15px;
    border-color: white;
    box-shadow: none;
    padding: 0 2%;
}
input[type="text"]::placeholder {
    color: rgb(80, 80, 80);
    font-size: 15px;
    font-family: 'Quicksand', sans-serif; 
}
.icon_input {
    max-height:2px;
}
.navbar-item {
    display: flex;
}
.navbar .container {
    display: flex;
  }
.navbar-item {
    display: flex;
    align-items: center;
    color: white;
}
.navbar-item:hover {
    color: white;
}
.navbar, .navbar-menu, .navbar-end {
    align-items: stretch;
    display: flex;
    padding: 0;
    background: hsl(171, 100%, 41%);
    color: white;
}
.navbar-menu{
    flex-grow: 1;
    flex-shrink: 0;
}
.navbar-end {
    justify-content: flex-end;
    margin-left: auto;
}
footer {
    padding: 3% 0;
}
.is-golden {
    color:rgb(255,215,0);
}
.card-ready {
    border-radius: 5px;
}
#p-hasil-search {
    font-size:1.5rem;
}
.img-ready {
    border-radius:5px 5px 0px 0px;
}
.btn-beli-ready {
    border-radius:0px 0px 5px 5px;
}
.card-content-ready{
    padding:0.75rem;
}
.p-harga-ready{ 
    font-size:1rem;
    color:hsl(171, 100%, 41%); 
    font-weight: bolder;
}
.p-penjual-ready{ 
    font-size:0.75rem; 
    color:rgb(165, 165, 165);
}
.media+.media{
	padding-top: 0px;
}
.chatlist-chat{
	font-size:0.75rem
}
.is-tosca{
	color:hsl(171, 100%, 41%);
}
.chat-received{
	width:50%;
	background-color:rgb(245, 245, 245);
	border-radius:0px 5px 5px 5px;
}
.chat-send{
	background-color:rgb(245, 245, 245);
	border-radius:5px 0px 5px 5px;
}
.chat-message{
	font-size:0.75rem
}
.session-chat{
    padding: 7% 10% 7% 10%;
}
.session-cart{
    padding: 7% 10% 7% 10%;
}

@media (max-width: 1024px) {
    .content p strong {
        font-size: 14px
    }
    #packet {
        z-index: 0;
        position: unset;
        padding: 0;
    }
    .content p {
        font-size: 11px
    }
    .hero-title {
        padding-top: 6vh;
    }
    .title {
        font-size: 54px;
    }
    .subtitle {
        font-size: 20px;
    }
    #emphasize {
        font-size: 28px;
    }
    .price {
        font-size: 14px;
    }
    .session-chat{
        padding: 10% 10% 7% 10%;
    }
    .session-cart{
        padding: 10% 10% 7% 10%;
    }
    .hero {
        padding: 3% 8% 2% 8%;
        position: relative;
    }
}

@media (max-width: 768px) {
    .content p strong {
        font-size: 14px
    }
    .content p {
        font-size: 14px
    }
    .isometric {
        max-height: 50vh;
        width: auto;
    }
    .hero {
        padding: 3% 10% 3% 10%;
        min-height: 100vh;
    }
    .is-64x64 {
        max-width: 5vh;
        height: auto;
    }
    .category_title {
        font-size: 14px;
    }
    .food_title {
        font-size: 14px;
    }
    .box {
        padding: 2%;
    }
    .session-chat{
        padding: 20% 10% 7% 10%;
    }
}

@media (max-width: 414px) {
    .title {
        font-size: 36px;
    }
    .subtitle {
        font-size: 16px;
    }
    .hero {
        padding: 2%;
    }
    .box {
        padding: 4%;
    }
    .content strong {
        font-size: 14px;
    }
    .content {
        font-size: 10px;
    }
    #emphasize {
        font-size: 20px;
    }
    .card-content {
        padding: 3% 7%;
    }
    .media-content p strong {
        font-size: 14px;
    }
    .price {
        font-size: 10px;
    }
    .card {
        border-radius: 10px;
    }
    .section {
        padding-top: 0.6;
    }
    .line {
        margin: 0;
        display: none;
    }
    .food_title {
        font-size: 0.6rem;
    }
    .p-penjual-ready{ 
        font-size:0.4rem; 
    }
    .p-harga-ready{ 
        font-size: 0.7rem;
    }
    .btn-beli-ready {
        font-size: 0.5rem;
    }
    .search_detail {
        padding-top: 0;
    }
    .rate_title {
        padding-top: 1rem;
    }
    .food_card {
        padding-left: 5px;
        padding-right: 5px;
    }
    .session-cart{
        padding: 20% 10% 7% 10%;
    }
}

@media (max-width:376px) {
    .media-content p strong {
        font-size: 10px;
        line-height: 1;
    }
    .price {
        font-size: 8px;
    }
    .content p strong{
        font-size: 12px;
    }
    .content p small{
        font-size: 10px;
    }
    .card {
        border-radius: 10px;
    }
    .category_title {
        font-size: 10px;
    }
    .food_title {
        font-size: 10px;
    }
} 
.interactive-bg {
  height: 100vh;
  background-color: #00D1B2;
  padding: 0px;
}
@media (max-width: 769px) {
  .interactive-bg {
    display: none;
  }
}

.input {
  border-radius: 5px;
}

.button {
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 150px;
}
.login-logo {
  margin: 0 auto;
  margin-bottom: 50px;
  max-height: 150px;
}
.columns {
  margin: 0px;
}
@media(max-width:414px){
    .timeline {
        padding: 20% 10% 5% 10%;
    }
}
</style>
