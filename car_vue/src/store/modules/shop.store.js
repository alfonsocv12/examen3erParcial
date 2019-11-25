import shopApi from '@/api/shops.api';

const state = {
  shops: [],
  token: {}
}

const getters = {
  getShops: state => state.shops,
  getToken: state => state.token
}

const mutations = {
  SET_SHOPS(state, shops){
    state.shops = shops
  },
  SET_TOKEN(state, token){
    state.token = token
  }
}

const actions = {

  async loginShop({ commit }, data){
    return await shopApi.loginPost(
      data,
      result => {
        commit('SET_TOKEN', result.data);
        return result;
      },
      error => {
        return error.response;
      }
    );
  },

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
