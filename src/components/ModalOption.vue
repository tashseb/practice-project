<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <div class="button-close">
        <button @click="closeModal">X</button>
      </div>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>>
</template>

<script lang="ts">

export default {
  props: ['header', 'text', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    text-align: center;
  }

  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }

  .modal.sale {
    background: crimson;
    color: white;
  }

  .modal.sale h1 {
    color: white;
  }

  .button-close {
    display: flex;
    justify-content: right;
  }
</style>
