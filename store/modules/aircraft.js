export default {
  state: {
    Items: [],
    sortItem: 'whatever',
  },
  mutations: {
    setItem(state, data) {
      state.Items = [...data]
    },
    sortItems(state, data) {
      state.sortItem = data
    },
  },
  getters: {
    getPosts(state) {
      if (state.sortItem === 'whatever') {
        return state.Items
      }
      return state.Items.filter((c) => c.type == state.sortItem)
    },
  },
}
