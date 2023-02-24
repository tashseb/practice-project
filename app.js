const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'The Hunger Games', author: 'Suzanne Collins', isFav: true },
        { title: 'Fifty Shades of Gray', author: 'E.L James', isFav: true },
        { title: 'El Book', author: 'Jose Rizal', isFav: false },
      ],
      url: 'https://github.com/tashseb',
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
