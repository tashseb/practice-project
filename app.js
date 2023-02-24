const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'The Hunger Games', author: 'Suzanne Collins' },
        { title: 'Fifty Shades of Gray', author: 'E.L James' },
        { title: 'El Filibusterismo', author: 'Jose Rizal' },
      ],
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')
