<template>
  <div class="notification" :class="{
        'is-danger': (type == 'error'), 'is-success': (type == 'success')
    }">

    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message','type']
};
</script>