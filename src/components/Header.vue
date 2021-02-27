<template>
  <div>
    <!-- Output -->
    <button v-show="loggedIn">Logout</button> 
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      loggedIn: false // Input
    }
  }
}
</script>