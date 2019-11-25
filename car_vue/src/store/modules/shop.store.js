import shopApi from '@/api/shops.api';

const state = {
  shops: []
}

const getters = {
  getShops: state => state.shops
}

const mutations = {
  SET_SHOPS(state, shops){
    state.shops = shops
  }
}

const actions = {

  getAllShopsAction({ commit }, service_id){
    let params = {}
    if(service_id){
      params = {
        service_id:service_id
      }
    }
    shopApi.getAllShops(params,
      result =>{
        commit('SET_SHOPS', result.data);
      },
      error =>{
        return error;
      }
    )
  }
}

export default {
  namespaced: true,
  state: {
    ...state
  },
  getters: {
    ...getters
  },
  mutations,
  actions
};
