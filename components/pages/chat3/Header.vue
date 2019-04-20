<template>
  <section class="section session-chat">
    <div class="container-fluid">
      <div class="columns">
        <div class="column is-one-thirds">
          <History />
        </div>
        <div class="column">
          <Konten />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import History from './History'
  import Konten from './Konten'
  export default {
      name: 'Header',
      components: { History, Konten }
  }
</script>