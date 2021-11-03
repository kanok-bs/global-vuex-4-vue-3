import { createStore } from 'vuex'
import  * as univarsities from './modules/univarsities'
import  * as authinticate from './modules/authinticate'
import  * as task from './modules/task'
import  * as post from './modules/post'
import  * as dictionary from './modules/dictionary'

export default createStore({
  modules: {
    univarsities,
    authinticate,
    task,
    post,
    dictionary
  }
})


