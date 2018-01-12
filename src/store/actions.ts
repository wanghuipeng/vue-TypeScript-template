import * as types from './mutations-types'

export default {
  incrementNumberAsync({ commit }, data:number) {
    setTimeout(() => {
      let mutation = types.INCREMENT_NUMBER;
      commit(mutation, data)
    }, 1000)
  }
}