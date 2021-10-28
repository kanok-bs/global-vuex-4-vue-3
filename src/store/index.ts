import { createStore } from 'vuex'
import  * as univarsities from './modules/univarsities'
import  * as authinticate from './modules/authinticate'

export default createStore({
  modules: {
    univarsities,
    authinticate
  }
})


