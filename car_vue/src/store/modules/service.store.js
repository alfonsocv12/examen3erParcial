import serviceApi from '@/api/service.api';
import shopApi from '@/api/shops.api';

const state = {
  services: [],
  shops: []
}

const getters = {
  getServices: state => state.services,
  getShops: state => state.shops
}

const mutations = {
  SET_SERVICES(state, services){
    state.services = services
  },
  SET_SHOPS(state, shops){
    state.shops = shops
  }
}

const actions = {

  getAllServicesAction({commit}, data){
    serviceApi.getAllServices(
      data,
      result =>{
        commit("SET_SERVICES", result.data);
      },
      error =>{
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