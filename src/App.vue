<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="toggleModalForm()">Show Form</button>
    <p>Welcome</p>
    <button @click="toggleModal()">Open MODAL</button>
    <teleport to=".modal" v-if="showModal">
      <ModalOption theme="sale" @close="toggleModal">
        <h1>Dyson Airwrap</h1>
        <p>You'll buy it after your three months probationary period.</p>
        <template v-slot:links>
          <a href="#">Some Link</a>
        </template>
      </ModalOption>
    </teleport>
    <div v-if="showModalForm">
      <ModalOption @close="toggleModalForm">
        <h1>This is the second modal</h1>
      </ModalOption>

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
      showModal: false,
      showModalForm: false
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
    },
    toggleModalForm() {
      this.showModalForm = !this.showModalForm
    }

  }
});
</script>

<style>

</style>
