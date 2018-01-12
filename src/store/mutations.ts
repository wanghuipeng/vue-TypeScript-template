import * as types from './mutations-types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [types.INCREMENT_NUMBER](state, data:number): void {
    state.initNumber += data;
  }
}

export default mutations


