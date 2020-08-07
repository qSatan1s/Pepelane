import Vue from 'vue'
import Vuex from 'vuex'
import aircraft from './modules/aircraft'
import theme from './modules/theme'
Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      aircraft,
      theme,
    },
  })

export default store
