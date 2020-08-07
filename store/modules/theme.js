export default {
  state: {
    checkTheme: true,
    dark: {
      header: '#012345',
      body: '#0B1366',
      color: '#99A7B5',
      btn_price: '#011C37',
      btn_color: '#FCFCFC',
    },
    white: {
      header: '#FFFFFF',
      body: '#FFFFFF',
      color: '#677B8F',
      btn_price: '#f3f4f7',
    },
  },
  mutations: {
    setTheme(state, data) {
      state.checkTheme = data
    },
  },

  getters: {
    theme(state) {
      if (state.checkTheme) {
        return state.dark
      } else {
        return state.white
      }
    },
  },
}
