import shopApi from '@/api/shops.api';

const state = {
  shops: [],
  token: null
}

const getters = {
  getShops: state => state.shops,
  getToken: token => state.token
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

  loginShop({ commit }, data){
    shopApi.loginPost(
      data,
      result => {
        commit('SET_TOKEN', result.data)
      },
      error => {
        return error;
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
