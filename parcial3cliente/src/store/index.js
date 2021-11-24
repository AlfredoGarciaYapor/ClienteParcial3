import Vue from 'vue'
import Vuex from 'vuex'
import services from './modules/services'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    userInfo:{
      useerId: Number,
      password: String,
      userType:Number
    }
  },
  modules: {
    services: services
  }
})
