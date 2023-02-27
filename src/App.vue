<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Zelda')">change name</button>
    <p>Welcome</p>
    <button @click="toggleModal()">Open modal</button>
    <div v-if="showModal">
      <ModalOption :header="header" :text="text" theme="sale" @close="toggleModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalOption from './components/ModalOption.vue'

export default defineComponent({
  name: 'App',
  components: { ModalOption },
  data() {
    return {
      name: 'Link',
      age: 25 as string | number,
      header: 'Sign up for free!',
      text: 'This is a text that is supposed to describe the header.',
      showModal: false
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name
      return name
    },
    changeAge(age: number | string) {
      this.age = age
      return age
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
});
</script>

<style>

</style>
