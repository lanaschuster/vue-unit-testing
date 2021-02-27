<template>
  <div>
    <!-- Output -->
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">
      Gerar número aleatório
    </button>
  </div>
</template>

<script>
export default {
  name: 'RandomNumber',
  // Inputs
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    } 
  },
  data() {
    return {
      randomNumber: 0
    }
  },
  methods: {
    getRandomNumber() {
      this.randomNumber = Math
        .floor(Math.random() * (this.max - this.min + 1)) + this.min
    }
  }
}
</script>
